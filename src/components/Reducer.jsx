export default function appReducer(state, action) {
    const cuarto1 = action.payload
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state, 
                cuartos: [...state.cuartos, action.payload],
            };
        case "UPDATE_TASK": {
            const updatedTask = action.payload;

            const updatedTasks = state.cuartos.map((task) => {
                if (task.id === updatedTask.id) {
                    updatedTask.done = task.done;
                    return updatedTask;
                }
                return task;
            });
            return {
                ...state,
                cuartos: updatedTasks,
            };
        }
        case "DELETE_TASK":
            return {
                ...state,
                cuartos: state.cuartos.filter((task) => task.id !== action.payload),
            };
        case "TOGGLE_TASK_DONE":
            let itemToDelete = state.cuartos.find((cuarto) => cuarto.id === cuarto1.id);
            console.log(cuarto1.id)

            return itemToDelete.quantity > 1 ? {
                ...state,
                cuartos: state.cuartos.map((cuarto) =>
                cuarto.id === cuarto1.id
                    ? {...cuarto, quantity: cuarto.quantity - 1}
                    : cuarto
                )

            } :{
                ...state,
                cuartos: state.cuartos.filter((cuarto)=> cuarto.id !== cuarto1.id)
            }
        default:
            return state;
    }
}