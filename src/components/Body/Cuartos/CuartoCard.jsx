
import {Link} from "react-router-dom";






export function CuartoCard({data}) {
    const {id,name,descripcion,img,price} = data
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
                    <Link to={`/reservar/${id}`} state={data}>Reservar</Link>
                </div>
            </div>
        </div>
        </>
    )
}