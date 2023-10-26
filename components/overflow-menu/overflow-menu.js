import React, { useState, useEffect, useRef } from 'react';


import styles from './overflow-menu.module.css'

// import icons
import ChipAction from "../chip-action/chip-action"


const OverFlowMenu = (props) => {

    const { title, menuId, menu } = props

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className={styles.overflowMenuContainer} ref={dropdownRef}>
            <ChipAction title={title} onClick={toggleDropdown} />

            {isOpen && (
                <div className={styles.overflowMenu} id={menuId}>
                    {
                        menu.map((mn, index) => (
                            <div id={menuId} className={styles.menuItem}>
                                <input type='checkbox' className={styles.checkbox} />
                                <div style={{ marginLeft: '8px' }}> {mn.title} </div>
                            </div>
                        ))
                    }
                </div>
            )}

        </div>
    )
}

export default OverFlowMenu