import React from 'react'

export default props => {

    return (
        <div className="container-fluid text-center text-red">
            <span style={{ fontSize: props.size }}>
                <i className={'fa fa-' + props.icon}> {props.name}</i>
            </span>
        </div>

    )
}





