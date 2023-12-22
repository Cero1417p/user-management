import { Button, Divider, Grid, Skeleton, Typography } from '@mui/material'

const SkeletonLoader = () => {
  return (
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
          <Skeleton variant="rectangular" width={400} height={56} />
        </Grid>

        <Grid item md={3} xs={12}>
          <Typography variant="subtitle2" component="label" htmlFor="last-name">
            Apellido:
          </Typography>
          <Skeleton variant="rectangular" width={400} height={56} />
        </Grid>

        <Grid item md={3} xs={12}>
          <Typography variant="subtitle2" component="label" htmlFor="dni">
            Dni:
          </Typography>
          <Skeleton variant="rectangular" width={400} height={56} />
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography variant="subtitle2" component="label" htmlFor="email">
            Correo:
          </Typography>
          <Skeleton variant="rectangular" width={400} height={56} />
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography variant="subtitle2" component="label">
            Rol:
          </Typography>
          <Skeleton variant="rectangular" width={400} height={56} />
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography variant="subtitle2" component="label" htmlFor="status">
            Estado:
          </Typography>
          <Skeleton variant="rectangular" width={400} height={56} />
        </Grid>
      </Grid>

      <Grid item pb={5} mt={2} columnGap={5}>
        <Grid item pl={{ md: 7 }} md={12} container direction="row" alignItems="center">
          <Grid item>
            <Typography variant="subtitle2">Imagen de perfil (*):</Typography>
            <Skeleton variant="circular" width={80} height={80} />
          </Grid>
          <Grid item>
            <Button variant="outlined" component="label" size="large" disabled>
              Cargar imagen
              <input type="file" name="photo" hidden accept="image/*" />
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/*  */}
      <Divider />
      {/*  */}

      <Divider />

      <Grid item xs={12} mt={2}>
        <Button variant="contained" color="primary" type="submit" size="large" disabled>
          Guardar
        </Button>
      </Grid>
    </Grid>
  )
}

export { SkeletonLoader }
