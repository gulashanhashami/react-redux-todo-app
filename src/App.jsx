// import logo from './logo.svg';
import './App.css';
import {Todos} from "./components/Todos";
import {Routes, Route} from "react-router-dom";
import { EditTodos } from './components/EditTodo';
import { DetailsTodo } from './components/DetailsTodo';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path={"/"} element={<Todos />}></Route>
       <Route path={"/todo/:id/edit"} element={<EditTodos />}></Route>
       <Route path={"/todo/:id/detail"} element={<DetailsTodo />}></Route>
     </Routes>
    </div>
  );
}

export default App;
