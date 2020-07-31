const INICIAL_STATE = {
  descricao: '', valor: '', list: []
}

export default (state = INICIAL_STATE, action) => {

  switch (action.type) {
    case "DESCRICAO_MUDOU":
      return { ...state, descricao: action.payload }
    case "VALOR_MUDOU":
      return { ...state, valor: action.payload }
    case "PESQUISA_TAREFA":
      return { ...state, list: action.payload }
    case 'TAREFA_CLEAR':
      return { ...state, descricao: ''}
    default:
      return state;
  }
}
