import { Form } from "react-router-dom";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
  IconButton,
  ThemeProvider,
  Tooltip,
  Avatar,
  Chip,
  Stack,
  CircularProgress,
} from "@mui/material";
import {
  DeleteOutlineOutlined as DeleteOutlineOutlinedIcon,
  EditOutlined as EditOutlinedIcon,
} from "@mui/icons-material";
import { theme } from "@/modules/user-management/components/user-list/components/user-table/theme";
import { IUser } from "@/modules/user-management/types/UserTypes";
import { useUserTable } from "@/modules/user-management/components/user-list/components/user-table/useUserTable";
import { useState } from "react";

const Head = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell width={50}></TableCell>
        <TableCell width={200}>
          <b>Nombres</b>
        </TableCell>
        <TableCell width={200}>
          <b>Apellidos</b>
        </TableCell>
        <TableCell width={200}>
          <b>DNI</b>
        </TableCell>
        <TableCell width={300}>
          <b>Email</b>
        </TableCell>
        <TableCell width={240}>
          <b>Rol</b>
        </TableCell>
        <TableCell width={240}>
          <b>Estado</b>
        </TableCell>
        <TableCell width={260}>
          <b>Acciones</b>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

const UserTable = ({ users }: { users: IUser[] }) => {
  const [selectUser, setSelectUser] = useState<undefined | string>(undefined);
  const { navigation, handleEditUser } = useUserTable();

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table>
          <Head />
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Avatar
                    alt="Imagen de usuario"
                    src={user.photo}
                    sx={{ width: 50, height: 50 }}
                  />
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.dni}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Chip
                    label={user.status ? "Activo" : "Inactivo"}
                    color={user.status ? "success" : "error"}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <Stack direction="row">
                    <Tooltip title="Editar">
                      <IconButton
                        disabled={
                          navigation.state === "submitting" ||
                          navigation.state === "loading"
                        }
                        onClick={() => handleEditUser(user)}
                      >
                        <EditOutlinedIcon
                          fontSize="medium"
                          color={
                            navigation.state === "submitting" ||
                            navigation.state === "loading"
                              ? "inherit"
                              : "primary"
                          }
                        />
                      </IconButton>
                    </Tooltip>

                    {navigation.state === "submitting" ||
                    navigation.state === "loading" ? (
                      selectUser === user.id ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        <IconButton disabled>
                          <DeleteOutlineOutlinedIcon
                            fontSize="medium"
                            color="inherit"
                          />
                        </IconButton>
                      )
                    ) : (
                      <Form
                        method="post"
                        action={`${user.id}/destroy`}
                        onSubmit={(event) => {
                          setSelectUser(user.id);
                          if (
                            !confirm(
                              "Please confirm you want to delete this record.",
                            )
                          ) {
                            event.preventDefault();
                          }
                        }}
                      >
                        <Tooltip title="Eliminar">
                          <IconButton type="submit">
                            <DeleteOutlineOutlinedIcon
                              fontSize="medium"
                              color="error"
                            />
                          </IconButton>
                        </Tooltip>
                      </Form>
                    )}
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export { Head, UserTable };
