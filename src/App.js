import { Route, Routes } from 'react-router-dom';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Navbar from './components/Navbar'


function App() {
  return (
    <>
    <Navbar />
     <Routes>
      <Route path='/' element={<TodoList />}/>
      <Route path='/add' element={<AddTodo />}/>
    </Routes>
    </>
  );
}

export default App;
