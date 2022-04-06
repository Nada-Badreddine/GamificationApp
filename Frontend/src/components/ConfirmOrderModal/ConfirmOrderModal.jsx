import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
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
            <Box display="flex" flexDirection="row-reverse" mb={2}>
                <Button
                    style={{
                        background: "#333",
                        color: " #fff",
                        fontFamily: "function-bold,Arial,sans-serif",
                        textDecoration: 'none'
                    }}
                    color="info"
                    variant="contained"
                    onClick={handleClickOpen}>Commander
                </Button>

            </Box>
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