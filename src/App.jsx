import './App.css'
import {Header} from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Footer} from "./components/Footer/Footer";
import {LayoutHome} from "./components/Body/Home/LayoutHome";
import {LayoutCuartos} from "./components/Body/Cuartos/LayoutCuartos";
import {LayoutCuarto} from "./components/Body/Cuarto/LayoutCuarto";
import {LayoutReservaciones} from "./components/Body/RersvacionesCliente/LayoutReservaciones";
import {LayoutPanelAdministrativo} from "./components/Body/PanelAdministrativo/LayoutPanelAdministrativo";
import {ContextoProvider} from "./components/Contexto";
import SignIn from "./components/registro.jsx";
import SignUp from "./components/login";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <ContextoProvider>
            <Header></Header>
            <Routes>
                <Route path={"/"} element={<LayoutHome></LayoutHome>}></Route>
                <Route path={"/cuarto"} element={<LayoutCuartos></LayoutCuartos>}></Route>
                <Route path={"/reservar/:data"} element={<LayoutCuarto></LayoutCuarto>}></Route>
                <Route path={"/reservaciones"} element={<LayoutReservaciones></LayoutReservaciones>}></Route>
                <Route path={"/panel"} element={<LayoutPanelAdministrativo></LayoutPanelAdministrativo>}></Route>
                <Route path={"/login"} element={<SignIn></SignIn>}></Route>
                <Route path={"/registro"} element={<SignUp></SignUp>}></Route>
            </Routes>
            <Footer></Footer>
            </ContextoProvider>
        </BrowserRouter>
    </div>
  )
}

export default App
