import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path="/" icon="dashboard" label="Dashboard" />
         <MenuTree label="Débitos e Créditos" icon="money">
            <MenuItem path="ciclopagamentos" label=" Novo" icon="plus" />
        </MenuTree>        
         <MenuTree label="Minhas Pendências" icon="ban">
            <MenuItem path="pendencias" label=" Novo" icon="plus" />
        </MenuTree>        
    </ul>
)