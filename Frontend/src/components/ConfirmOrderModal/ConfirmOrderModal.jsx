import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function ConfirmOrderModal({
    open,
    handleClickOpen,
    handleClose,
    AddGiftToOrderLine,
}) {
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Commander
            </Button>
            <Dialog
                fullWidth={"lg"}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Vous étes sur de passer cette commander?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Annuler</Button>
                    <Button onClick={AddGiftToOrderLine} autoFocus>
                        commander
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}