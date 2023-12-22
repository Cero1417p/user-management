import { LoaderFunctionArgs, defer } from "react-router-dom";
import { getUsers } from "@/modules/user-management/api";

export async function loader({ request }: LoaderFunctionArgs) {
  const q = new URL(request.url).searchParams.get("q");
  const users = getUsers(q);
  return defer({ users });
}
