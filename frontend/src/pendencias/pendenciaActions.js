import axios from "axios"
import {toastr } from 'react-redux-toastr'
import { reset as reseForm, initialize } from "redux-form";
import { showTabs, selectTab } from "../common/tab/tabActions";
const URL = "http://localhost:3003/api"

export const changeDescricao = (event) => ({
  type: "DESCRICAO_MUDOU",
  payload: event.target.value,
})

export const changeValor = (event) => ({
  type: "VALOR_MUDOU",
  payload: event.target.value,
})

export function create(values) {
  return submit(values, "post");
}

//Utiliza dentro desse modulo
function submit(values, method) {
  return (dispatch) => {
    const id = values._id ? values._id : "";

    axios[method](`${URL}/todo/${id}`, values)
      .then((resposta) => {
        toastr.success("Sucesso", "Débito cadastrado com Sucesso.");

        //Chama as outras Actions Creators
        dispatch(init());
      })
      .catch((e) => {
        e.response.data.errors.forEach((error) => toastr.error("Erro", error));
      });
  };
}

//Deve implementar o Midlleware para resolver o problema de carregamento
export const pesquisar = () => {

  return (dispatch, getState) => {
    const descricao = getState().todo.descricao
    const pesquisa = descricao ? `&descricao__regex=/${descricao}/` : ""
    const request = axios.get(`${URL}/todo?sort=-datacadastro${pesquisa}`)
        .then(resposta => dispatch({type: 'PESQUISA_TAREFA', payload: resposta.data}))
  } 
}

//Utilizando o midlleware THUNK
export const add = (descricao) => {
   return (dispatch) => {
    axios
      .post(`${URL}/todo`, { descricao })
      .then((resposta) => dispatch(clear()))
      .then((resposta) => dispatch(pesquisar()))
  } 
}

//Utilizando o midlleware THUNK
export const tarefaConcluida = (tarefa) => {
  return (dispatch) => {
    axios
      .put(`${URL}/todo/${tarefa._id}`, { ...tarefa, status: true })
      .then((resposta) =>
        dispatch({ 
          type: "TAREFA_CONLUIDA", 
          payload: resposta.data })
      )
      .then((resposta) => dispatch(pesquisar()))
  }
}

//Utilizando o midlleware THUNK
export const tarefaPendente = (tarefa) => {
  return (dispatch) => {
    axios
      .put(`${URL}/todo/${tarefa._id}`, { ...tarefa, status: false })
      .then((resposta) => dispatch(pesquisar()))
  }
}

//Utilizando o midlleware THUNK
export const tarefaExcluida = (tarefa) => {
  return (dispatch) => {
    axios
      .delete(`${URL}/todo/${tarefa._id}`)
      .then((resposta) => dispatch(pesquisar()))
  }
}

//Utilizando o midlleware THUNK
export const clear = () => {
  return [{ type: "TAREFA_CLEAR" }, pesquisar()]
}

export function init() {
  return [
    showTabs("tabCreate"),
    selectTab("tabCreate"),
    pesquisar(),
    initialize("pendenciaForm")
  ];
}