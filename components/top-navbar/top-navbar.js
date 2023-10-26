import React from "react"

import { useRouter } from "next/router"

import styles from '../top-navbar/top-navbar.module.css'

import UserAvatarURL from '../images/user-avatar.png'

import { ROUTER_PATH } from "../constanta/route-path"

// import icons
import SearchIcon from "../icons/search-icon"
import SettingsIcon from "../icons/settings-icon"
import BellIcon from "../icons/bell-icon"
import HamburgerIcon from "../icons/hamburger-icon"


import CompanyLogo from "../icons/company-logo"

// import  components
import UserAvatar from "../user-avatar/user-avatar"



const TopNavBar = () => {

    const router = useRouter()


    const NAVBAR_MENU = [
        {
            id: 'dashboard',
            title: 'Dashboard',
            onClick: () => {
                router.push(ROUTER_PATH.DASHBOARD)
            }
        },
        {
            id: 'crm-page',
            title: 'CRM',
            onClick: () => {
                router.push(ROUTER_PATH.CRM_PAGE)
            }
        },
        {
            id: 'submission',
            title: 'Submission',
            onClick: () => {
                router.push(ROUTER_PATH.SUBMISSION)
            }
        },
        {
            id: 'lms',
            title: 'LMS',
            onClick: () => {
                router.push(ROUTER_PATH.LMS)
            }
        }
    ]

    const { pathname } = useRouter();

    const handleOpenHamburgerMenu = () => {
        const hamburgerMenu = document.getElementById("hamburger-menu")
        if (hamburgerMenu) {
            if (hamburgerMenu.style.display === "block") {
                hamburgerMenu.style.display = "none"
            } else {
                hamburgerMenu.style.display = "block"
            }
        }
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.navContainer}>
                    <div className={styles.navbarMenuContainer}>

                        <div style={{ marginRight: 16 }}>
                            <CompanyLogo />
                        </div>

                        {NAVBAR_MENU.map((menu, index) => (
                            <div className={styles.navbarMenu} onClick={menu.onClick} style={{ background: menu.id == pathname.slice(1) ? '#F9FAFB' : '' }}>
                                {menu.title}
                            </div>
                        ))
                        }
                    </div>
                    <div className={styles.hamburgerIcon} onClick={handleOpenHamburgerMenu}>
                        <HamburgerIcon />
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

            <div className={styles.hamburgerMenu} id={"hamburger-menu"}>
                {NAVBAR_MENU.map((menu, index) => (
                    <div className={styles.hamburgerItem} onClick={menu.onClick} style={{ background: menu.id == pathname.slice(1) ? '#F9FAFB' : '' }}>
                        {menu.title}
                    </div>
                ))}
            </div>
        </>
    )
}

export default TopNavBar