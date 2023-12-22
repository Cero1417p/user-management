import {
  IconButton,
  Paper,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  ThemeProvider,
} from '@mui/material'
import {
  DeleteOutlineOutlined as DeleteOutlineOutlinedIcon,
  EditOutlined as EditOutlinedIcon,
} from '@mui/icons-material'
import { theme } from '@/modules/user-management/components/user-list/components/user-table/theme'
import { Head } from '@/modules/user-management/components/user-list/components/user-table/UserTable'

const TableSkeletonLoading = () => {
  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table>
          <Head />
          <TableBody>
            {[1, 2, 3, 4, 5, 6].map((element) => {
              return (
                <TableRow key={element}>
                  <TableCell>
                    <Skeleton variant="circular" width={50} height={50} />
                  </TableCell>
                  <TableCell>
                    <Skeleton animation="wave" />
                  </TableCell>
                  <TableCell>
                    <Skeleton animation="wave" />
                  </TableCell>
                  <TableCell>
                    <Skeleton animation="wave" />
                  </TableCell>
                  <TableCell>
                    <Skeleton animation="wave" />
                  </TableCell>
                  <TableCell>
                    <Skeleton animation="wave" />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="rounded" animation="wave" />
                  </TableCell>
                  <TableCell>
                    <Stack direction="row">
                      <IconButton disabled>
                        <EditOutlinedIcon fontSize="medium" color="disabled" />
                      </IconButton>
                      <IconButton disabled>
                        <DeleteOutlineOutlinedIcon fontSize="medium" color="disabled" />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  )
}

export { TableSkeletonLoading }
