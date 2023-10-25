import React from "react"

import styles from '../top-navbar/top-navbar.module.css'

import UserAvatarURL from '../images/user-avatar.png'

// import icons
import SearchIcon from "../icons/search-icon"
import SettingsIcon from "../icons/settings-icon"
import BellIcon from "../icons/bell-icon"


import CompanyLogo from "../icons/company-logo"

// import  components
import UserAvatar from "../user-avatar/user-avatar"


const NAVBAR_MENU = [
    {
        id: 'dashboard',
        title: 'Dashboard'
    },
    {
        id: 'crm',
        title: 'CRM'
    },
    {
        id: 'submission',
        title: 'Submission'
    },
    {
        id: 'lms',
        title: 'LMS'
    }
]

const TopNavBar = () => {

    return (
        <div className={styles.container}>
            <div className={styles.navContainer}>
                <div className={styles.navbarMenuContainer}>

                    <div style={{ marginRight: 16 }}>
                        <CompanyLogo />
                    </div>

                    {NAVBAR_MENU.map((menu, index) => (
                        <div className={styles.navbarMenu}>
                            {menu.title}
                        </div>
                    ))
                    }
                </div>
                <div className={styles.profileMenuSection}>
                    <div className={styles.profileMenu}>
                        <SearchIcon />
                    </div>
                    <div className={styles.profileMenu}>
                        <SettingsIcon />
                    </div>
                    <div className={styles.profileMenu}>
                        <BellIcon />
                    </div>
                    <div style={{ marginLeft: 12 }}>
                        <UserAvatar imageUrl={UserAvatarURL} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNavBar