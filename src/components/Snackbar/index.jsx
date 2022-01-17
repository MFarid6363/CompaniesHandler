import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'

export default function index(props) {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: props.vertical || 'top',
                horizontal: props.bottom || 'center'
            }}
            open={props.alert.open}
            message={props.alert.message}
            ContentProps={{ style: { backgroundColor: props.alert.bgc } }}
            onClose={() => props.setAlert({ ...props.alert, open: false })}
            autoHideDuration={2000}
        />
    )
}
