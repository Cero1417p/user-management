import { Grid, Skeleton } from '@mui/material'
import { TableSkeletonLoading } from '@/modules/user-management/components/user-list/components/user-table/TableSkeletonLoading'

const SkeletonLoading = () => {
  return (
    <>
      <Grid
        item
        container
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        mb={1}
      >
        <Grid item>
          <Skeleton variant="rounded" width={60} height={10} />
        </Grid>
        <Grid item>
          <Skeleton variant="rounded" width={260} height={40} />
        </Grid>
      </Grid>
      <Grid item container alignItems="stretch">
        <TableSkeletonLoading />
      </Grid>
    </>
  )
}

export { SkeletonLoading }
