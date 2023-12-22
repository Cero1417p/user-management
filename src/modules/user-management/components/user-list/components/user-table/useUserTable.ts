import { useNavigate, useNavigation } from "react-router-dom";
import { IUser } from "@/modules/user-management/types/UserTypes";

const useUserTable = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const handleEditUser = (user: IUser) => {
    navigate(`edit/${user.id}`);
  };

  return {
    navigation,
    handleEditUser,
  };
};
export { useUserTable };
