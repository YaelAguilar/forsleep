import {useContext} from "react";
import {Contexto} from "../../Contexto.jsx";


export function CuartoCard({data}) {
    const {cancelarReserv} = useContext(Contexto)
    const {id,name,descripcion,img,price,nameClient,fechaStart,fechaEnd} = data
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
                    <h3>Fecha de llegada: {`${fechaStart}`}</h3>
                    <h3>Fecha de Salida:{`${fechaEnd}`}</h3>
                </div>
                <div className="price">
                    <button onClick={() => cancelarReserv(id)}>Cancelar Reservacion</button>
                </div>
            </div>
        </div>
        </>
    )
}