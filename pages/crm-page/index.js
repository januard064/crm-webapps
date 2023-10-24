import React, { useState } from 'react'

import Styles from './crm-page.module.css'

// import components
import TitleSeparator from "@/components/title-separator/title-separator"
import Button from '@/components/button/button'
import SearchBar from '@/components/search-bar/search-bar'

const CrmPage = () => {

    const [activeTab, setActiveTab] = useState(0)

    const CRM_MENU = [
        {
            id: 0,
            title: 'Clients',
            action: () => { }
        },
        {
            id: 1,
            title: 'Policy',
            action: () => { }
        },
        {
            id: 2,
            title: 'Policy',
            action: () => { }
        }
    ]

    return (
        <>
            <TitleSeparator title={"CRM"} />
            <div className={Styles.container}>
                <div className={Styles.tabContainer}>
                    {
                        CRM_MENU.map((menu, index) => (
                            <div key={index} style={{ marginLeft: index == 0 ? 0 : '8px' }}>
                                <Button title={menu.title} action={menu.action} isActive={activeTab === menu.id} />
                            </div>
                        ))
                    }
                </div>

                <div style={{ marginTop:'20px' }}>
                    <SearchBar />
                </div>
            </div>
        </>

    )
}

export default CrmPage