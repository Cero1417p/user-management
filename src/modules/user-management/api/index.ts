import { IUser } from "@/modules/user-management/types/UserTypes";
import { UserDatabase } from "@/modules/user-management/api/UserDatabase";

const database = new UserDatabase("users", 1);

async function getUsers(query?: string | null) {
  await fakeNetwork(`getUsers:${query}`);
  return await database.openDatabase().then(() => database.getAllUsers(query));
}

async function getUser(id: string) {
  await fakeNetwork(`user:${id}`);
  return await database.openDatabase().then(() => database.getUser(id));
}

async function deleteUser(id: string) {
  await fakeNetwork();
  return await database.openDatabase().then(() =>
    database
      .deleteUser(id)
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      }),
  );
}

async function createUser(user: IUser) {
  await fakeNetwork();
  return await database.openDatabase().then(() => database.addUser(user));
}

async function updateUser(id: string, updates: IUser) {
  await fakeNetwork();
  const oldUser = await getUser(id);
  if (!oldUser) return false;
  updates.password = oldUser?.password;

  return database.openDatabase().then(() =>
    database
      .updateUser(id, updates)
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      }),
  );
}

let fakeCache: { [key: string]: boolean } = {};

async function fakeNetwork(key?: string | undefined): Promise<void> {
  if (!key) {
    fakeCache = {};
  }

  if (key && fakeCache[key]) {
    return;
  }

  if (key) {
    fakeCache[key] = true;
  }

  await new Promise<void>((res) => {
    setTimeout(() => {
      res();
    }, Math.random() * 3000);
  });
}

export { getUsers, getUser, deleteUser, createUser, updateUser };
