import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import Styles from './crm-page.module.css'

import { API_UTILS } from '@/utils/api-utils'
import { ROUTER_PATH } from '@/components/constanta/route-path'

// import components
import TitleSeparator from "@/components/title-separator/title-separator"
import Button from '@/components/button/button'
import SearchBar from '@/components/search-bar/search-bar'
import ErrorComponent from '@/components/error-component/error-component'
import PaginationTable from '@/components/pagination-table/pagination-table'
import ChipAction from '@/components/chip-action/chip-action'
import OverFlowMenu from '@/components/overflow-menu/overflow-menu'

const CrmPage = () => {

    const router = useRouter()

    const [activeTab, setActiveTab] = useState(0)

    const [clients, setClients] = useState([])

    const [isError, setIsError] = useState(false)

    const [searchText, setSearchText] = useState('')

    const [filteredClients, setFilteredClients] = useState([])

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

    const GENDER_FILTER = [
        {
            title: 'Male',
            action: () => { }
        },
        {
            title: 'Female',
            action: () => { }
        }
    ]

    const marital_FILTER = [
        {
            title: 'Single',
            action: () => { }
        },
        {
            title: 'Married',
            action: () => { }
        },
        {
            title: 'Divorced',
            action: () => { }
        }
    ]

    const handleOpenProfile = () => {
        router.push(ROUTER_PATH.PROFILE_PAGE)
    }


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
                    setFilteredClients(result)
                }

            } catch (error) {
                console.log('INTERNAL SERVER ERROR')
            }
        }

        fetchData()
    }, [])

    useEffect(() => {

        const filterClients = clients.filter((client) => client.name.toLowerCase().includes(searchText.toLowerCase()))

        setFilteredClients(filterClients)

    }, [searchText])


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

                <div className={Styles.filterSection}>
                    <SearchBar searchText={searchText} setSearchText={setSearchText} />

                    <div className={Styles.chipSection}>
                        <OverFlowMenu title={'Gender'} menuId={'gender-menu'} menu={GENDER_FILTER} />
                        <OverFlowMenu title={'Marital Status'} menuId={'marital-menu'} menu={marital_FILTER} />
                    </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                    {
                        isError ? (
                            <>
                                <ErrorComponent title={'Opps! Unable to load clients'} />
                            </>
                        ) : (
                            <>
                                <PaginationTable data={filteredClients} onClickTableRow={handleOpenProfile} />
                            </>
                        )
                    }
                </div>
            </div>
        </>

    )
}

export default CrmPage