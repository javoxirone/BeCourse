import React from 'react'
export default function Icon (props) {
    return(
        <props.icon style={{ fontSize: props.iconSize }} className="menu__link-icon" />
    )
}