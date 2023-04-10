import {createContext, useEffect, useReducer, useState} from "react";
import appReducer from "./Reducer.jsx";
import {v4} from "uuid";
import {useNavigate} from "react-router-dom";


export const Contexto = createContext();

export const ContextoProvider = ({children}) =>{
    const initialState = {
        cuartos: [        {
            id: "1",
            name: "Cuarto Presidencial",
            descripcion: "Cuarto ideal para mas de 5 personas con capacidad maxima de 8 personas para una experiencia totalmente unica..",
            img: "https://www.eleconomista.com.mx/__export/1525719513500/sites/eleconomista/img/2018/05/07/putin_03.jpg_1741123634.jpg",
            price: 1000,
            quantity: 20
        },
            {
                id: "2",
                name: "Cuarto Vip",
                descripcion: "Disponibilidad premium para el cliente, la comodidad mas top de todo nuestro hotel...",
                img: "https://www.hoteleskinky.com/img/hotel/pasadena/villa-vip-remodelada/hoteleskinky/pasadena-villa-vip-remodelada-6.jpg",
                price: 700,
                quantity: 20
            },
            {
                id: "3",
                name: "Cuarto Comun",
                descripcion: "Habitacion ideal para 2 personas, con todos los servicios necesarios y la atencion que usted necesita..",
                img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/18/c7/c1/1b/hotel-san-miguel.jpg",
                price: 400,
                quantity: 20
            }]
    }
    const navigate = useNavigate();

    const [cuartosLength, setCuartosLength] = useState(0)
    const [cuartosLength1, setCuartosLength1] = useState(0)





    const [users, setUsers] = useState([
        {
            name:"yael",
            email: "yael@gmail.com",
            password:"1234"
        },
        { 

            name:"Admin",
          email: "admin@gmail.com",
          password: "1234"
        }
        ])



    const [logins,setLogins] =useState({
    })

    const [reservaciones, setReservaciones] =useState([])

    useEffect(() => {
        setCuartosLength(
            reservaciones.reduce((previous, current) => previous +current.quantity, 0)
        );
    }, [reservaciones]);


    const [isLogin,setIsLogin] = useState(false)

    const register = (user) =>{
        setUsers([...users, user])
        navigate("/login")
    }


    const login = (user)=>{
        const client = users.find((data) => data.email === user.email)
        if (client === undefined){
            alert("error")
        }
        else {
            alert("Incio de sesion Correcto")
            setIsLogin(true)
            setLogins(client)
            navigate("/")

        }
    }

    console.log(reservaciones)


    const [state, dispatch] = useReducer(appReducer, initialState);

    function addCuarto(task) {
        dispatch({
            type: "ADD_TASK",
            payload: { ...task, id: v4()},
        });
        setCuartosLength1(
            state.cuartos.reduce((previous, current) => previous +current.quantity, 0)
        );
    }

    function updateCuarto(updatedTask) {
        dispatch({
            type: "UPDATE_TASK",
            payload: updatedTask,
        });
    }

    function deleteCuarto(id) {
        dispatch({
            type: "DELETE_TASK",
            payload: id,
        });
    }

    function reservarss(id) {
        dispatch({
            type: "TOGGLE_TASK_DONE",
            payload: id,
        });
    }

    console.log(users)

    const cancelarReserv = (id) =>{
        setReservaciones(reservaciones.filter((task) => task.id !== id))
    }

    console.log(cuartosLength)
    useEffect(() => {
        setCuartosLength1(
            state.cuartos.reduce((previous, current) => previous +current.quantity, 0)
        );
    }, [state.cuartos]);

    console.log(cuartosLength1)
    const reservar = (reservars) =>{
        if (isLogin){
            setReservaciones([...reservaciones, {...reservars, quantity: 1}])
            console.log(users)
            navigate("/reservaciones")
            reservarss(reservars)

        } else {
            alert("incia sesion Primero")
        }

    }
    console.log(state.cuartos)
    console.log(cuartosLength1)



    return(
        <Contexto.Provider value={{
            cuartos: state.cuartos,
            addCuarto,
            updateCuarto,
            deleteCuarto,
            login,
            isLogin,
            logins,
            register,
            users,
            reservaciones,
            reservar,
            cancelarReserv,
            reservarss,
            cuartosLength1,
            cuartosLength
        }}>
            {children}
        </Contexto.Provider>



    )



}