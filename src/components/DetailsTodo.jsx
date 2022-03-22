import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import {detailsTodoLoading, detailsTodoSuccess} from "../redux/actions";
import styled from "styled-components";

const ResultDiv = styled.div`
.box{
    margin:auto;
    margin-top:50px;
    width:40%;
    height:70px;
    // border:1px solid red;
}
  .l{
      float: left;
  }
  .r{
      float:right;
  }
`;
export const DetailsTodo=()=>{
    const { loading, data, error } = useSelector((store) => store.todos);  
    const dispatch = useDispatch();
   
    const [Data, setData]=useState("");
    let { id } = useParams();
    useEffect(()=>{
        dispatch(detailsTodoLoading());
    axios.get(`http://localhost:3001/todos/${id}`).then(({data})=>{
        // console.log(res)
        dispatch(detailsTodoSuccess(data));
      
    })
    },[])
   
// console.log(data.status)
if(data.status){
return (
    <div>
        <ResultDiv> 
            <div className="box">
        <h2 className="l">Title : {data.title}</h2>
          <h3 className="r">Status : False</h3> 
          </div>
      </ResultDiv>
    </div>
)
}else{
    return (
        <div className="box"> 
            <ResultDiv>  
            <div className="box"> 
          <h2 className="l">Title : {data.title}</h2>
          <h3 className="r">Status : False</h3>
          </div>
          </ResultDiv> 
        </div>
    )   
}
}