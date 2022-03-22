
import {
    ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    GET_TODO_LOADING,
    GET_TODO_SUCCESS,
    DETAILS_TODO_LOADING,
    DETAILS_TODO_SUCCESS,
    EDIT_TODO_LOADING,
    EDIT_TODO_SUCCESS,
  } from "./actionTypes";
  
  export const addTodoLoading = () => {
    return {
      type: ADD_TODO_LOADING,
    };
  };
  
  export const addTodoSuccess = (payload) => {
    return {
      type: ADD_TODO_SUCCESS,
      payload,
    };
  };
  
  export const getTodoLoading = () => {
    return {
      type: GET_TODO_LOADING,
    };
  };
  
  export const getTodoSuccess = (payload) => {
    return {
      type: GET_TODO_SUCCESS,
      payload,
    };
  };

  export const detailsTodoLoading = () => {
    return {
      type: DETAILS_TODO_LOADING,
    };
  };
  
  export const detailsTodoSuccess = (payload) => {
    return {
      type: DETAILS_TODO_SUCCESS,
      payload,
    };
  };


  export const editTodoLoading = () => {
    return {
      type: EDIT_TODO_LOADING,
    };
  };
  
  export const editTodoSuccess = (payload) => {
    return {
      type: EDIT_TODO_SUCCESS,
      payload,
    };
  };