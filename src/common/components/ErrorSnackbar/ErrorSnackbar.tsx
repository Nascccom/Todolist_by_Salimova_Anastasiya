import * as React from "react"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert, { AlertProps } from "@mui/material/Alert"
import { useAppDispatch, useAppSelector } from "common/hooks"
import { appActions } from "app/appSlice"

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

export const ErrorSnackbars = () => {
    const error = useAppSelector<string | null>((state) => state.app.error)
    const dispatch = useAppDispatch()

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return
        }
        dispatch(appActions.setErrorMessage({ error: null }))
    }

    return (
        <Snackbar open={!!error} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity='error' sx={{ width: "100%" }}>
                {error}
            </Alert>
        </Snackbar>
    )
}
