import { ChangeEvent, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import {
  IUser,
  IUserValidationFormData,
} from "@/modules/user-management/types";
import { validationFields } from "@/modules/user-management/components/utils";

const useUserForm = (user: IUser) => {
  const [userFormData, setUserFormData] = useState<IUserValidationFormData>({
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
    password: "",
    confirmPassword: "",
    photo: user.photo,
    dni: user.dni,
    status: user.status,
  });
  const [hasErrors, setHasErrors] = useState<Partial<IUserValidationFormData>>(
    {},
  );

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      | SelectChangeEvent<string>,
  ) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setUserFormData({
      ...userFormData,
      [name]: value,
    });

    validationFields(name, value, hasErrors, setHasErrors, userFormData);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      //setSelectedFile(file);
      console.log("File: ", file);
    }
  };

  return { userFormData, hasErrors, handleChange, handleFileChange };
};

export { useUserForm };
