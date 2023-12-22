import { ActionFunctionArgs, redirect } from "react-router-dom";
import { createUser, updateUser } from "@/modules/user-management/api";
import { IUser } from "@/modules/user-management/types/UserTypes";
import { IUserFormData } from "@/modules/user-management/types/UserFormTypes";

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();

  const updates = Object.fromEntries(formData) as unknown as IUserFormData;

  const userId = params.userId ? params.userId : "";

  const newUser: IUser = {
    id: userId,
    name: updates.name,
    lastName: updates.lastName,
    photo: "",
    dni: updates.dni,
    email: updates.email,
    status: updates.status === "on",
    role: updates.role,
    password: updates.password,
  };

  if (userId === "new")
    await createUser(newUser)
      .then(() => {
        setTimeout(() => {
          alert("Usuario creado correctamente!!");
        }, 2000);
      })
      .catch((err) => {
        setTimeout(() => {
          alert(err);
        }, 2000);
      });
  else
    await updateUser(userId, newUser)
      .then(() => {
        setTimeout(() => {
          alert("Usuario actualizado!!");
        }, 2000);
      })
      .catch((err) => {
        setTimeout(() => {
          alert(err);
        }, 2000);
      });

  return redirect("/users");
  //return { ok: true, message: "Usuario creado correctamente" };
}
