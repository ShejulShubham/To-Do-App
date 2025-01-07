import { useState } from "react";

export function TodoCard(props) {
    const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo, handleEditTodo } = props;

    const [showEditInput, setShowEditInput] = useState(false);
    const [newTodo, setNewTodo] = useState("");

    function callBackHandlerEditTodo(index, newDetails) {
        if(newDetails){
            handleEditTodo(index, newDetails);
        }
        setShowEditInput(false);
    }



    return (
        <div className="card todo-item">
            {showEditInput ? (
                <>
                    <input id={todoIndex} value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} />
                    <button onClick={() => { callBackHandlerEditTodo(todoIndex, newTodo) }}>Save</button>
                    <button onClick={() => { setShowEditInput(false) }}>Cancel</button>
                </>
            ) : (
                <>
                    <p>{todo.input}</p>
                    <div className="todo-buttons">
                        <button onClick={() => {
                            handleCompleteTodo(todoIndex)
                        }}
                            disabled={todo.complete}>
                            <h6>Done</h6>
                        </button>
                        <button onClick={() => { setShowEditInput(true), setNewTodo(todo.input) }}
                            disabled={todo.complete}>Edit</button>
                        <button onClick={() => {
                            handleDeleteTodo(todoIndex)
                        }}>
                            <h6>Delete</h6>
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}