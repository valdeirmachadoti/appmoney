import axios from "axios";

const BASE_URL = "http://localhost:3003/api"

export const getSummary = () => {
  const request = axios.get(`${BASE_URL}/ciclopagamentos/summary`)
  return {
    type: "OBTER_SUMMARY",
    payload: request
  }
}

export const getPendencias = () => {
  const request = axios.get(`${BASE_URL}/todo/totalpendecias`)
  return {
    type: 'OBTER_PENDENCIAS',
    payload: request
  }
}