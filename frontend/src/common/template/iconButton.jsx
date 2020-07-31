import React from 'react'

export default props => {
    return (
        <button className={'btn btn-sm btn-xs btn-' + props.style}
            onClick={props.onClick}
            type={props.type}
            title={props.title}
            >
            <i className={'fa fa-' + props.icon}> {props.name}</i>
        </button>

    )
}





