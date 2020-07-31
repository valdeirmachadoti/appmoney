import React from 'react'
import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({ creditos, debitos }) => (
    <Grid cols="12">
        <fieldset>
            <legend>Resumo</legend>
            <ValueBox color="green" icon="bank" value={`R$ ${creditos}`} text="Total de Créditos" />
            <ValueBox color="yellow" icon="credit-card" value={`R$ ${debitos}`} text="Total de Débitos" />
            <ValueBox color="purple" icon="money" value={`R$ ${creditos - debitos}`} text="Valor Consolidado" />
        </fieldset>
    </Grid>
)