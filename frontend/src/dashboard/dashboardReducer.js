const INITIAL_STATE = { 
  summary: { credito: 0, debito: 0 }, 
  soma: 0 
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "OBTER_SUMMARY":
      return { ...state, summary: action.payload.data }
    case "OBTER_PENDENCIAS":
      return { ...state, soma: action.payload.data }
    default:
      return state;
  }
}
