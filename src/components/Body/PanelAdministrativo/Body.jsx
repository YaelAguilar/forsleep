import {CuartoCard} from "./CuartoCard.jsx";
import {CuartoCard2} from "./CuartoCard2.jsx";
import {useContext, useState} from "react";
import {Contexto} from "../../Contexto.jsx";
import {Box, Button, Modal, TextField} from "@mui/material";
import * as React from "react";
import {v4} from "uuid";
 
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


export function Body() {

    const {cuartos,addCuarto,reservaciones,cuartosLength,cuartosLength1} = useContext(Contexto)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [cuarte, setCuarte] = useState({
        id: v4(),
        descripcion: "",
        img: "",
        name: "",
        price: "",
        quantity: 10
    });


    const handleChange = e => {
        setCuarte({...cuarte ,[e.target.name]: e.target.value})
        console.log(cuarte)
    }

    const handleChange2 = e => {
        setCuarte({...cuarte ,[e.target.name]: Number(e.target.value)})

    }

    const handleSubmit = e => {
        e.preventDefault()
        addCuarto(cuarte)
    }
    return (
        <>
            <section className="body-panel">
                <h2 className="title-general">PANEL ADMINISTRATIVO</h2>
                <div className="admin-cuartos">
                    <h3>Administra Cuartos</h3>
                    <button onClick={() => handleOpen()}>Add Cuarto</button>
                    {cuartos.map((data,index) => <CuartoCard key={data.id} data={data}></CuartoCard>)}
                </div>
                <div className="admin-reservaciones">
                    <h3>Administra Reservaciones</h3>
                    <h3>Cuartos Ocupados:{cuartosLength}  Cuartos Disponibles:{cuartosLength1}</h3>
                    {reservaciones.map((data) => <CuartoCard2 data={data}></CuartoCard2>)}
                </div>
            </section>
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
                    <label htmlFor="quantity">Colocar Cantidad de Cuartos</label>
                    <input type="number" id="quantity" name="quantity" onChange={handleChange2}/>
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