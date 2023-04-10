import {Link} from "react-router-dom";
import "./FooterStyle.css"

export function Footer() {
    return (
        <>
        <footer className="body-footer">
            <h1 className="title"><Link to={"/"}>ForSleep</Link> </h1>
        </footer>
        </>
    )
} 