import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { editTodoLoading, editTodoSuccess } from "../redux/actions";

export const EditTodos=()=>{
    const { loading } = useSelector((store) => store.todos);
  const dispatch = useDispatch();
//   const { id } = useParams();
  const [data, setData] = useState({});
  const [newData, setNewData] = useState({});
    let { id } = useParams();
    useEffect(()=>{
    axios.get(`http://localhost:3001/todos/${id}`).then((res)=>{
        // console.log(res)
       setData(res.data.title);
    })
    },[])

    function handleChange(e) {
        let { name, checked, value } = e.target;
        let inputData = {};
        if (name != "check") {
          inputData = {
            ...newData,
            title: value,
          };
        } else {
          inputData = {
            ...newData,
            status: checked,
          };
        }
    
        setNewData(inputData);
      }

      function handleSave() {
        dispatch(editTodoLoading());
        axios({
          method: "patch",
          url: `http://localhost:3001/todos/${id}`,
          data: {
            id: data.id,
            title: newData.title || data.title,
            status: newData.status || data.status,
          },
        }).then((res) => {
          dispatch(editTodoSuccess());
       
        });
      }
return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <h3>Edit yout Todo</h3>
      <input
        type="text"
        defaultValue={data.title}
        onChange={handleChange}
        name="task"
      />
      <input type="checkbox" id="check" onChange={handleChange} name="check" />
      <label htmlFor="check">completed</label>
      <button onClick={handleSave}>Save</button>
      <button>
        <Link to={"/"}>Return to Home</Link>
      </button>
    </div>
  );
};