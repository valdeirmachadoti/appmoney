import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { init, create } from './pendenciaActions'

class PendenciaForm extends Component {

    render() {

        const { handleSubmit } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>

                    <Field 
                    name='descricao' 
                    component={LabelAndInput}
                    label="Descrição da pendência" 
                    cols="12 6" 
                    placeholder="Informe a descrição" 
                    icon="list" />

                    <Field 
                        name='valor' 
                        component={LabelAndInput} 
                        type="number"
                        label="Valor" 
                        cols="12 6" 
                        placeholder="Valor da pendência"
                        icon="money"
                    />
                </div>

                <div className='box-footer'>
                    <button type='submit' className={`btn btn-sm btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                </div>
            </form>
        )
    }
}

PendenciaForm = reduxForm({ form: 'pendenciaForm', destroyOnUnmount: false })(PendenciaForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init, create }, dispatch)

export default connect(null, mapDispatchToProps)(PendenciaForm)