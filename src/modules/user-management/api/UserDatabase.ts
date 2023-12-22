import { IUser } from "@/modules/user-management/types/UserTypes";

export class UserDatabase {
  private db!: IDBDatabase;

  constructor(
    private dbName: string,
    private dbVersion: number,
  ) {}

  public openDatabase(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request: IDBOpenDBRequest = indexedDB.open(
        this.dbName,
        this.dbVersion,
      );

      request.onerror = () => {
        console.error("Error opening database");
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;

        if (!db.objectStoreNames.contains("users")) {
          const objectStore = db.createObjectStore("users", { keyPath: "id" });
          objectStore.createIndex("email", "email", { unique: true });
        }
      };
    });
  }

  public addUser(user: IUser): Promise<IDBValidKey | undefined> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["users"], "readwrite");
      const objectStore = transaction.objectStore("users");

      user.id = Math.random().toString(36).substring(2, 9);
      const addRequest = objectStore.add(user);

      addRequest.onsuccess = () => {
        resolve(addRequest.result);
      };

      addRequest.onerror = () => {
        console.error("Error adding user");
        reject(addRequest.error);
      };
    });
  }

  public getAllUsers(query?: string | null): Promise<IUser[]> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["users"], "readonly");
      const objectStore = transaction.objectStore("users");
      const getAllRequest = objectStore.getAll();

      getAllRequest.onsuccess = () => {
        let users: IUser[] = getAllRequest.result;

        if (query) {
          users = users.filter((user) =>
            user.name.toLowerCase().includes(query.toLowerCase()),
          );
        }

        resolve(users);
      };

      getAllRequest.onerror = () => {
        console.error("Error getting users");
        reject(getAllRequest.error);
      };
    });
  }

  public getUser(userId: string): Promise<IUser | undefined> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["users"], "readonly");
      const objectStore = transaction.objectStore("users");
      const getRequest = objectStore.get(userId);

      getRequest.onsuccess = () => {
        resolve(getRequest.result);
      };

      getRequest.onerror = () => {
        console.error("Error getting user");
        reject(getRequest.error);
      };
    });
  }

  public deleteUser(userId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["users"], "readwrite");
      const objectStore = transaction.objectStore("users");
      const deleteRequest = objectStore.delete(userId);

      deleteRequest.onsuccess = () => {
        resolve();
      };

      deleteRequest.onerror = () => {
        console.error("Error deleting user");
        reject(deleteRequest.error);
      };
    });
  }

  public updateUser(
    userId: string,
    updatedUserData: Partial<IUser>,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["users"], "readwrite");
      const objectStore = transaction.objectStore("users");
      const getRequest = objectStore.get(userId);

      getRequest.onsuccess = () => {
        const userData: IUser | undefined = getRequest.result;

        if (userData) {
          const updatedUser: IUser = { ...userData, ...updatedUserData };
          const putRequest = objectStore.put(updatedUser);

          putRequest.onsuccess = () => {
            resolve();
          };

          putRequest.onerror = () => {
            console.error("Error updating user");
            reject(putRequest.error);
          };
        } else {
          reject(new Error("User not found"));
        }
      };

      getRequest.onerror = () => {
        console.error("Error getting user for update");
        reject(getRequest.error);
      };
    });
  }
}
