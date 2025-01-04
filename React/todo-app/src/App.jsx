import { useState } from 'react'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoList } from './components/TodoList'
import { TodoInput } from './components/TodoInput'

function App() {

  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true },
  // ]

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true }
  ]);

  const [selectedTab, setSelectedTab] = useState('Open');

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }]

    setTodos(newTodoList);
  }

  function handleCompleteTodo(index) {
    //update/edit/modify
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo['complete'] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })

    setTodos(newTodoList);
  }

  return (
    <>

      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos} />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
