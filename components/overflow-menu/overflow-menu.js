import { useEffect, useRef } from 'react'


import styles from './overflow-menu.module.css'

// import icons
import ChipAction from "../chip-action/chip-action"


const OverFlowMenu = (props) => {

    const { title, menuId, menu } = props

    const handleOpenOverFlowMenu = () => {
        const overflwMenu = document.getElementById(menuId)
        if (overflwMenu) {
            overflwMenu.style.display = "block"

        }
    }

    const handleCloseOverFlowMenu = () => {
        const overflwMenu = document.getElementById(menuId)
        if (overflwMenu) {
            overflwMenu.style.display = "none"
        }
    }


    useEffect(() => {
        const handleOutSideClick = (event) => {
            const overflwMenu = document.getElementById(menuId)
            console.log(event.target)

            if (event.target !== overflwMenu) {
                handleCloseOverFlowMenu()
            }
        };

        window.addEventListener("mousedown", handleOutSideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, []);


    return (
        <div className={styles.overflowMenuContainer}>
            <ChipAction title={title} onClick={handleOpenOverFlowMenu} />

            <div className={styles.overflowMenu} id={menuId}>
                {
                    menu.map((mn, index) => (
                        <div id={menuId} className={styles.menuItem} style={{ pointerEvents: 'none' }} onclick={handleOpenOverFlowMenu}>
                            <input type='checkbox' className={styles.checkbox} />
                            <div style={{ marginLeft: '8px', pointerEvents: 'none' }}> {mn.title} </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OverFlowMenu