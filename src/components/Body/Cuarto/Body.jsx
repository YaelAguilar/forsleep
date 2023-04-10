import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useContext, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Contexto} from "../../Contexto.jsx";
import {v4} from "uuid";


export function Body() {

    const {cuartos,logins,reservar,cancelarReserv} = useContext(Contexto)
    console.log(cuartos)
    const {data} = useParams();
    const cuarto = cuartos.find(
        (cuarte) => cuarte.id === data
    );

    const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());
    const {id,name,descripcion,img,price} = cuarto
    const [reserv, setReserv] = useState({
        id: id,
        descripcion: descripcion,
        img: img,
        name: name,
        price: price,
        nameClient: logins.name,
        fechaStart: startDate,
        fechaEnd: startDate1
    });


    const handleChange = e => {
        setReserv({...reserv ,[e.target.name]: e.target.value})
        console.log(reserv)
    }
    const handleSubmit = e =>{
        e.preventDefault()
        reservar(reserv)
    }

    return (
        <>
        <section className="body-reservar">
            <div className="contenedor-cuarto">
                <div className="img">
                    <img src={img} alt="Cuarto Imagen"/>
                </div>
                <div className="info">
                    <h2>{name}</h2>
                    <p>{descripcion}</p>
                    <div className="price">
                        <h3>{price}$</h3>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="reservar">
                <input onChange={handleChange} type="text" name="nameClient" placeholder="Colocar Nombre Completo" className="text"/>
                <input onChange={handleChange} type="email" name="email" placeholder="Colocar Email"  className="text"/>
                <label className="label">Colocar De Llegada</label>
                <DatePicker className="fecha" selected={startDate} onChange={(date) => setStartDate(date)} />
                <label className="label">Colocar de Salida</label>
                <DatePicker className="fecha" selected={startDate1} onChange={(date) => setStartDate1(date)} />
                <label className="label">Colocar identificacion</label>
                <input onChange={handleChange} itemID="identificacion" type="file" className="file"/>
                <button>Reservar</button>
            </form>
        </section>
        </>
    )
}