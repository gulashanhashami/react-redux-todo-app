
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

  const init = {
    todos: {
      loading: false,
      error: false,
      data: [],
    },
  };

  export const reducer = (store = init, { type, payload }) => {
    switch (type) {
        case ADD_TODO_LOADING:
            return {
              ...store,
              todos: {
                ...store.todos,
                loading: true,
              },
            };
      
          case ADD_TODO_SUCCESS:
            return {
              ...store,
              todos: {
                ...store.todos,
                loading: false,
              },
            };

            case GET_TODO_LOADING:
            return {
              ...store,
              todos: {
                ...store.todos,
                loading: true,
              },
            };
      
          case GET_TODO_SUCCESS:
            return {
              ...store,
              todos: {
                ...store.todos,
                loading: false,
                data: payload,
              },
            };
          
            case DETAILS_TODO_LOADING:
            return {
              ...store,
              todos: {
                ...store.todos,
                loading: true,
              },
            };
      
          case DETAILS_TODO_SUCCESS:
            return {
              ...store,
              todos: {
                ...store.todos,
                loading: false,
                data: payload,
              },
            };

            case EDIT_TODO_LOADING:
            return {
              ...store,
              todos: {
                ...store.todos,
                loading: true,
              },
            };
      
          case EDIT_TODO_SUCCESS:
            return {
              ...store,
              todos: {
                ...store.todos,
                loading: false,
              },
            };
      
          default:
            return { ...store };
        }
      }; 