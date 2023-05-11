import { useEffect, useReducer } from "react";
import { todoReducer } from "../components/08-useReducer/todoReducer";
const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
    // 2°
    // return [
    //   {
    //     id: new Date().getTime(),
    //     desc: "Aprender React Native",
    //     done: false,
    //   },
    // ];
};
export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (id) => {
        const action = {
            type: "delete",
            payload: id,
        };
        dispatch(action);
    };

    const handleToggle = (id) => {
        dispatch({ type: "toggle", payload: id });
    };
    const handleAddTodo = (newTodo) => {
        dispatch({ type: "add", payload: newTodo });
    };

    const getPendientes = () => (todos.filter((todo) => !todo.done));

    return {
        todos,
        handleDelete,
        handleToggle,
        handleAddTodo,
        getPendientes,
        totalTodos: todos.length,
        totalPendientes: (todos.filter((todo) => !todo.done)).length
    }
}