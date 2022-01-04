import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert'
import {useDispatch, useSelector} from 'react-redux'
import {setErrorAC} from "../../redux/reducer";
import {setError} from '../../redux/selectors';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

export function ErrorTooltip() {

    const error = useSelector(setError)
    const dispatch = useDispatch()

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        dispatch(setErrorAC(null));
    }

    const isOpen = error !== null;

    return (
        <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {error}
            </Alert>
        </Snackbar>
    )
}
