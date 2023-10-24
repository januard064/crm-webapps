import React, { useState } from "react"

import Styles from './button.module.css'

const Button = (props) => {

    const { isActive, title, action } = props

    return (
        <div onClick={action} style={{ fontFamily: 'Inter-SemiBold' }} className={isActive ? Styles.buttonActiveContainer : Styles.buttonContainer}>
            {title}
        </div>
    )
}

export default Button