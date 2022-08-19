import React, { MouseEventHandler, useEffect, useState } from "react"
import "../styles/modal.scss"

interface ModalType{
    visible: boolean,
    children: React.ReactNode,
    onClick?: MouseEventHandler<HTMLDivElement>
}

export default function Modal(props: ModalType) {
    

    return (
        <div onClick={props.onClick} className={`modal-box ${props.visible ? 'visible': ''}`}>
            <div className={`modal`}>
                {props.children}
            </div>
        </div>
    )
}