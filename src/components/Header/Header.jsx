import {Link} from "react-router-dom";
import "./HeaderStyle.css";
import {useContext} from "react";
import {Contexto} from "../Contexto.jsx";

export function Header() {

    const {isLogin,logins} = useContext(Contexto)
    console.log(logins)

 
    console.log(name)
    return (
        <>
        <header className="body-menu">
            <h1 className="title"><Link to={"/"}>ForSleep</Link> </h1>
            <div className="menu">
                <Link to={"/cuarto"}>Cuartos</Link>
                <Link to={"/reservaciones"}>Mis Reservaciones</Link>
                <Link to={"/panel"}>Panel Administrativo</Link>
            </div>

            {isLogin ? <Link to={"/"}>{logins.name}</Link> :       <div className="login">
                <Link to={"/login"}>Inciar Sesion</Link>
                <Link to={"/registro"}>Registrarse</Link>
            </div>}


        </header>
        </>
    )
}