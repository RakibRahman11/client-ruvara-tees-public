import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import deliveryMan from '../../../../Images/delivery-man.jpg'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Delivery = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <img src={deliveryMan} style={{ width: '40%', marginTop: '60px' }} alt='' />
            <br />
            <Typography variant="h6">
                Want to be a Delivery Hero? 
            </Typography>
            <Button onClick={handleOpen}>Please click</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Thank you for your great interest
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Please call at +8801516707349
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Or mail at ruvaraTeessOfficial@gmail.com
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default Delivery;