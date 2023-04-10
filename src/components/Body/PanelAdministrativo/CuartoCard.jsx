import {useContext, useState} from "react";
import {Contexto} from "../../Contexto.jsx";
import {Box, Button, Modal, TextField} from "@mui/material";
import * as React from 'react';

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


export function CuartoCard({data}) {
    const {id,name,descripcion,img,price,quantity} = data
    const {removeCuarto,updateCuarto,deleteCuarto} = useContext(Contexto)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [cuarte, setCuarte] = useState({
        id: id ,
        descripcion: descripcion,
        img: img,
        name: name,
        price: price
    });


    const handleChange = e => {
        setCuarte({...cuarte ,[e.target.name]: e.target.value})
        console.log(cuarte)
    }
    const handleSubmit = e => {
        e.preventDefault()
        updateCuarto(cuarte)
    }
    return (
        <>
        <div className="contenedor">
            <div className="img">
                <img src={img} alt="Cuarto"/>
            </div>
            <div className="info">
                <h2>{name}</h2>
                <p>{descripcion}</p>
                <div className="price">
                    <h3>{price}$</h3>
                    <h3>Cuartos Disponibles:{quantity}</h3>
                </div>
                <div className="price">
                    <button onClick={() => handleOpen()}>Editar</button>
                    <button onClick={()=> deleteCuarto(id)}>Eliminar</button>
                </div>
            </div>
        </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box  component="form" noValidate onSubmit={handleSubmit} sx={style}>
                    <TextField
                        onChange={handleChange}
                        color='primary'
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />
                    <TextField
                        onChange={handleChange}
                        color='primary'
                        margin="normal"
                        required
                        fullWidth
                        id="descripcion"
                        label="descripcion"
                        name="descripcion"
                        autoComplete="description"
                        autoFocus
                    />
                    <TextField
                        onChange={handleChange}
                        color='primary'
                        margin="normal"
                        required
                        fullWidth
                        name="price"
                        label="Price"
                        id="price"
                        autoComplete="current-price"
                    />
                    <TextField
                    onChange={handleChange}
                    color='primary'
                    margin="normal"
                    required
                    fullWidth
                    name="img"
                    label="imgURL"
                    id="img"
                    autoComplete="current-price"
                />
                    <Button
                        color="secondary"
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Enviar
                    </Button>
                </Box>
            </Modal>
        </>
    )
}