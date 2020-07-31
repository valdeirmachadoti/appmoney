import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";
import AuthReducer from "../auth/authReducer";
import DashboardReducer from "../dashboard/dashboardReducer";
import TabReducer from "../common/tab/tabReducer";
import cicloPagamentoReducer from "../cicloPagamento/cicloPagamentoReducer";
import TodoReducer from "../pendencias/pendenciaReducer";


const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  cicloPagamento: cicloPagamentoReducer,
  todo: TodoReducer,
  form: formReducer,
  toastr: toastrReducer,
  auth: AuthReducer,
});

export default rootReducer;
