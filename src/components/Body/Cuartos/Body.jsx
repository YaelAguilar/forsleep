import {CuartoCard} from "./CuartoCard";
import {useContext} from "react";
import {Contexto} from "../../Contexto.jsx";

export function Body() {
    const {cuartos} = useContext(Contexto)


    return (
        <>
            <section className="cuartos">

                {cuartos.map((data,index) => <CuartoCard key={data.id} data={data}></CuartoCard>)}
            </section>
        </>
    )
}