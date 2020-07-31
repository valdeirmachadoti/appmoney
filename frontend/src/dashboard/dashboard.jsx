import './dashboard.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import { getSummary, getPendencias } from './dashboardActions'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
        this.props.getPendencias()
    }

    render() {
        const { totalCredito, totalDebito } = this.props.summary
        const { soma } = this.props.soma

        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0" />
                <Content>
                    <ValueBox
                        color="green"
                        icon="bank"
                        value={`R$ ${totalCredito}`} text="Total de Créditos"
                        href="/ciclopagamentos" 
                        info="Ver Créditos"/>
                    <ValueBox
                        color="yellow"
                        icon="credit-card"
                        value={`R$ ${totalDebito}`} text="Total de Débitos"
                        href="/ciclopagamentos" 
                        info="Ver Débitos"/>
                    <ValueBox
                        color="red"
                        icon="ban"
                        value={`R$ ${soma}`} text="Total de Pendências"
                        href="/pendencias" 
                        info="Ver Pendências"/>
                    <ValueBox
                        color="purple"
                        icon="money"
                        value={`R$ ${totalCredito - totalDebito}`} text="Valor Consolidado"
                        href="/ciclopagamentos" 
                        info="Ver Consolidado"/>

                </Content>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    summary: state.dashboard.summary,
    soma: state.dashboard.soma

})
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary, getPendencias }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)