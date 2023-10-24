import React, { useState, useEffect } from 'react'

import Styles from './crm-page.module.css'

import { API_UTILS } from '@/utils/api-utils'

// import components
import TitleSeparator from "@/components/title-separator/title-separator"
import Button from '@/components/button/button'
import SearchBar from '@/components/search-bar/search-bar'
import ErrorComponent from '@/components/error-component/error-component'

const CrmPage = () => {

    const [activeTab, setActiveTab] = useState(0)

    const [clients, setClients] = useState([])

    const [isError, setIsError] = useState(false)

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


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(`${API_UTILS}/clients`)

                if (response.status >= 400) {
                    setIsError(true)
                } else {
                    const result = await response.json()
                    setIsError(false)
                    setClients(result)
                }

            } catch (error) {
                console.log('INTERNAL SERVER ERROR')
            }
        }

        fetchData()

        console.log('seses')
    }, [])


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

                <div style={{ marginTop: '20px' }}>
                    <SearchBar />
                </div>

                <div style={{ marginTop: '20px' }}>

                    {
                        isError ? (
                            <>
                                <ErrorComponent title={'Opps! Unable to load clients'} />
                            </>
                        ) : (
                            <>
                            {clients.length}
                            </>
                        )
                    }


                </div>
            </div>
        </>

    )
}

export default CrmPage