import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos, selectedTab } = props;

    const filterTodoList = selectedTab === 'All' ?
        todos :
        selectedTab === 'completed' ?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete)

    return (
        <>
            {filterTodoList.map((todo, todoIndex) => {
                return (
                    <TodoCard
                        key={todoIndex}
                        todoIndex={todoIndex}
                        {...props}
                        todo={todo}
                    />
                )
            })}
        </>
    )
}