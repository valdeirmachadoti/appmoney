import React from 'react'
import Grid from '../common/layout/grid'
import IconButton from '../common/template/iconButton'
import moment from 'moment'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { tarefaConcluida, tarefaPendente, tarefaExcluida } from './pendenciaActions'

const TodoList = props => {

	const carregarTabela = () => {
		const list = props.list || []
		return list.map((tarefa, i) => (
			<tr key={tarefa._id}>
				<td className={tarefa.status ? 'concluido' : ''}>{i + 1}</td>
				<td className={tarefa.status ? 'concluido' : ''}>{tarefa.descricao}</td>
				<td className={tarefa.status ? 'concluido' : ''}>{`R$ ${tarefa.valor}`}</td>
				<td className={tarefa.status ? 'concluido' : ''}>{moment(tarefa.datacadastro).locale('pt-br').format('l')}</td>
				<td>
					<IconButton style="success" icon="check" /* name="Concluir" */ hidem={tarefa.status} onClick={() => props.tarefaConcluida(tarefa)} />
					<IconButton style="warning" icon="undo" /* name="Pendente" */ hide={tarefa.status} onClick={() => props.tarefaPendente(tarefa)} />
					<IconButton style="danger" icon="trash-o" /* name="Excluir" */ hide={tarefa.status} onClick={() => props.tarefaExcluida(tarefa)} />
				</td>
			</tr>
		))
	}
	return (
		<div className="box-body">
			<Grid cols="12">
				<table className="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Descrição</th>
							<th>Valor</th>
							<th>Data de cadastro</th>
							<th className="table-actions ">Ações</th>
						</tr>
					</thead>
					<tbody>
						{carregarTabela()}
					</tbody>
				</table>
			</Grid>
		</div>
	)
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = (dispatch) => bindActionCreators({ tarefaConcluida, tarefaPendente, tarefaExcluida }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)