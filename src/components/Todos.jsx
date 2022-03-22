import {store} from "../redux/store"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import {
    addTodoLoading,
    addTodoSuccess,
    getTodoLoading,
    getTodoSuccess,
  } from "../redux/actions";
  import axios from "axios";

  import styled from "styled-components";

  const ResultDiv = styled.div`
  .box1{
  
    margin:auto;
     margin-top:50px;
    width:60%;
    /* padding-top:10px; */
    height:auto;
    color: white;
    background-color:teal;
     /* border:1px solid red; */
  }
  .box2{
    margin:auto;
      width:98%;
      height:30px;
      border-bottom:1px solid black;
  }
  .box2:hover{
    background-color: whitesmoke;
    color: black;
    font-weight: bold;
  }
  .bt{
    float:right;
    padding:4px;
    width:60px;
    margin-left:10px;
  }
  .todotext{
    float:left;
  }
  input{
    margin-top:50px;
    width:40%;
    height:33px;
  }
  #addtodo{
    width:9%;
   padding:12px;
   color:white;
   background-color: red;
   border:2px solid red;
  }
  a{
    text-decoration: none;
    color:white;
  }
  #btn1{
    color:white;
    background-color: blue;
    border:2px solid blue;
   
  }
  #btn2{
    color:white;
    background-color: green;
    border:2px solid green;
   
  }
  #btn3{
    color:white;
    background-color: red;
    border:2px solid red;
   
  }
h1:hover{
  color:red;
}
span{
  color:blue;
  font-weight: bold;
}
span:hover{
  font-weight: bold;
}
`;

  export const Todos = () => {
    const { loading, data, error } = useSelector((store) => store.todos); 
    const dispatch = useDispatch();
  // let {id} =useParams();
    const [text, setText] = useState("");
    const [stat, setStat] =useState(true);

    useEffect(() => {
      getTodos();
    }, []);

    const getTodos = () => {
        dispatch(getTodoLoading());
        axios.get("http://localhost:3001/todos").then(({ data }) => {
          dispatch(getTodoSuccess(data));
        });
      };
     

      let handleRemove = (e) => {
        axios.delete(`http://localhost:3001/todos/${e.id}`)
            .then((res) => {
              getTodos()
            
            })
            .catch((err) => {
               console.log(err);
            })
    }

    const handleToggle=(e)=>{  
      axios.get(`http://localhost:3001/todos/${e.id}`)
      .then((res) => {
        setStat(e.status=!e.status)
      
      })
      .catch((err) => {
      })     
  }
      //console.log(stat);
      return loading ? (
        "Loading...."
      ) : (
        <div>
          <h1>Home Page</h1>
          <ResultDiv>
          <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Enter Todo"/>
          <button id="addtodo"
            onClick={() => {
              dispatch(addTodoLoading());
              axios
                .post("http://localhost:3001/todos", {
                  title: text,
                  status: false,
                })
                .then((data) => {
                  dispatch(addTodoSuccess());
                  getTodos();
                })
                .catch(() => {
                  dispatch(error)
                });
            }}
          >
            Add todo
          </button>
          <div className="box1">
            <h1>Todo List</h1>
            {data.map((e) => (
              <div className="box2" key={e.id}>
                 <button className="bt" onClick={()=>{handleToggle(e)}}>Toggle</button>
                <div className="todotext">{e.title}  </div>
                {(e.status) ? <span style={{color:"green"}}>Completed</span> : <span>Progress</span>}
              <button className="bt" id="btn1" onClick={() => {
             
        }}><Link to={`/todo/${e.id}/edit`}>Edit</Link></button>
         
          <button className="bt" id="btn2" onClick={() => {
             
            }}><Link to={`/todo/${e.id}/detail`}>Details</Link></button>
    
              <button className="bt" id="btn3" onClick={() => {
              handleRemove(e)
        }}>Delete</button>
              </div>
              
            ))}
          </div>
          </ResultDiv>
        </div>
      );
    };