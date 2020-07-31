import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, showUpdate, showDelete } from '../cicloPagamento/cicloPagamentoActions'
import IconButton from '../common/template/iconButton'

class CicloPagamentoList extends Component {

    //Carrega
    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(ciclos => (
            <tr key={ciclos._id}>
                <td>{ciclos.nome}</td>
                <td>{ciclos.mes}</td>
                <td>{ciclos.ano}</td>
                <td>
                    <IconButton style="warning" icon="pencil" onClick={() => this.props.showUpdate(ciclos)} />
                    <IconButton style="danger" icon="trash-o" onClick={() => this.props.showDelete(ciclos)} />
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className="table-actions">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.cicloPagamento.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CicloPagamentoList)