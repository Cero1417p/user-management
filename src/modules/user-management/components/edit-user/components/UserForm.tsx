import {
  Avatar,
  Button,
  CircularProgress,
  Divider,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { IUser } from "@/modules/user-management/types";
import { useState } from "react";
import { useUserForm } from "@/modules/user-management/components/edit-user/components/useUserForm";
import { Form } from "react-router-dom";
import { SelectRole } from "@/modules/user-management/components/select-role/SelectRole";
import { SwitchState } from "@/modules/user-management/components/switch-state/SwitchState";
import SaveIcon from "@mui/icons-material/Save";

const CustomPasswordField = styled(TextField)({
  '& input[type="password"]': {
    fontSize: "25px",
    padding: "10px 14px",
  },
});

const UserForm = ({ user, isUserNew }: { user: IUser; isUserNew: boolean }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { userFormData, hasErrors, handleChange, handleFileChange } =
    useUserForm(user);
  return (
    <Form
      method="post"
      encType="multipart/form-data"
      onSubmit={() => {
        setIsLoading(true);
      }}
    >
      <Grid
        container
        padding={4}
        paddingTop={2}
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item>
          <Typography variant="h6">Información General</Typography>
        </Grid>
        <Grid item container mt={2} columnGap={20} rowGap={2} pl={{ md: 7 }}>
          <Grid item md={3} xs={12}>
            <Typography variant="subtitle2" component="label" htmlFor="name">
              Nombre:
            </Typography>
            <TextField
              id="name"
              name="name"
              value={userFormData.name}
              onChange={handleChange}
              error={!!hasErrors.name}
              helperText={hasErrors.name}
              autoComplete="off"
              fullWidth
              required
              autoFocus
            />
          </Grid>

          <Grid item md={3} xs={12}>
            <Typography
              variant="subtitle2"
              component="label"
              htmlFor="last-name"
            >
              Apellido:
            </Typography>
            <TextField
              id="last-name"
              name="lastName"
              value={userFormData.lastName}
              onChange={handleChange}
              error={!!hasErrors.lastName}
              helperText={hasErrors.lastName}
              fullWidth
              required
              autoComplete="off"
            />
          </Grid>

          <Grid item md={3} xs={12}>
            <Typography variant="subtitle2" component="label" htmlFor="dni">
              Dni:
            </Typography>
            <TextField
              id="dni"
              name="dni"
              type="number"
              value={userFormData.dni}
              onChange={handleChange}
              error={!!hasErrors.dni}
              helperText={hasErrors.dni}
              fullWidth
              required
              autoComplete="off"
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography variant="subtitle2" component="label" htmlFor="email">
              Correo:
            </Typography>
            <TextField
              id="email"
              name="email"
              autoComplete="off"
              value={userFormData.email}
              onChange={handleChange}
              error={!!hasErrors.email}
              helperText={hasErrors.email}
              fullWidth
              required
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography variant="subtitle2" component="label">
              Rol:
            </Typography>
            <SelectRole
              label={false}
              name="role"
              value={userFormData.role}
              onChange={handleChange}
              error={!!hasErrors.role}
              helperText={hasErrors.role}
              required
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography variant="subtitle2" component="label" htmlFor="status">
              Estado:
            </Typography>
            <SwitchState
              id="status"
              name="status"
              value={userFormData.status}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Grid item pb={5} mt={2} columnGap={5}>
          <Grid
            item
            pl={{ md: 7 }}
            md={12}
            container
            direction="row"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="subtitle2">Imagen de perfil (*):</Typography>
              <Avatar alt="Imagen de usuario" sx={{ width: 80, height: 80 }} />
            </Grid>
            <Grid item>
              <Button variant="outlined" component="label" size="large">
                Cargar imagen
                <input
                  type="file"
                  name="photo"
                  hidden
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/*  */}
        <Divider />
        {/*  */}

        {isUserNew && (
          <>
            <Grid item mt={2}>
              <Typography variant="h6">Seguridad</Typography>
            </Grid>
            <Grid item container mt={2} columnGap={20} pl={{ md: 7 }} pb={5}>
              <Grid item md={3} xs={12}>
                <Typography
                  variant="subtitle2"
                  component="label"
                  htmlFor="password"
                >
                  Contraseña:
                </Typography>
                <CustomPasswordField
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  value={userFormData.password}
                  onChange={handleChange}
                  error={!!hasErrors.password}
                  helperText={hasErrors.password}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item md={3} xs={12}>
                <Typography
                  variant="subtitle2"
                  component="label"
                  htmlFor="confirm-password"
                >
                  Repita la contraseña:
                </Typography>
                <CustomPasswordField
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  value={userFormData.confirmPassword}
                  onChange={handleChange}
                  error={!!hasErrors.confirmPassword}
                  helperText={hasErrors.confirmPassword}
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
          </>
        )}

        <Divider />

        <Grid item xs={12} mt={2}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="large"
            disabled={isLoading}
            endIcon={
              isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                <SaveIcon />
              )
            }
          >
            Guardar
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export { UserForm };
