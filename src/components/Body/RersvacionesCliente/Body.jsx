import {CuartoCard} from "./CuartoCard.jsx";
import "./ResrvacionesStyle.css"
import {useContext} from "react";
import {Contexto} from "../../Contexto.jsx";

export function Body() {
    const {reservaciones} =useContext(Contexto)
    console.log(reservaciones)
    return (
        <>
            <section className="body-reservaciones">
                {reservaciones.map((data,index) => <CuartoCard data={data} key={data.id}></CuartoCard>)}
            </section>
        </>
    )
}