import img from "../../../assets/hotel-hacienda-la-valdiviana-hoteles-en-cintalapa.jpg"

export function CuartoCard2({data}) {
    const {id,name,descripcion,img,price,nameClient,fechaStart,fechaEnd} = data
    console.log(nameClient)
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
                    <h3>Fecha de llegada:{`${fechaStart}`} </h3>
                    <h3>Fecha de Salida: {`${fechaEnd}`}</h3>
                </div>
                <div className="price">
                    <h3>OCUPADO POR: {nameClient}</h3>
                </div>
            </div>
        </div>
        </>
    )
}