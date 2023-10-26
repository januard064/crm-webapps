import React, { useState, useEffect } from "react"

import { API_UTILS } from "@/utils/api-utils"

import styles from './profile-page.module.css'

import ProfileImage from '../../components/images/user-avatar.png'
import Avatar2 from '../../components/images/avatar-2.png'

// import components
import TitleSeparator from "@/components/title-separator/title-separator"
import ErrorComponent from "@/components/error-component/error-component"
import ProfileData from "@/components/profile-data/profile-data"
import SubTitleSeparator from "@/components/title-separator/sub-title-separator"
import FinancialData from "@/components/financial-data/financial-data"
import CardComponent from "@/components/card-component/card-component"

const ProfilePage = () => {

    const [profile, setProfile] = useState()

    const [isError, setIsError] = useState(true)

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(`${API_UTILS}/profile`)

                if (response.status >= 400) {
                    setIsError(true)
                } else {
                    const result = await response.json()
                    setIsError(false)
                    setProfile(result)
                }

            } catch (error) {
                console.log('INTERNAL SERVER ERROR')
                setIsError(true)
            }
        }

        fetchData()
    }, [])

    return (
        <>
            {isError ? (
                <div style={{ marginTop: '120px' }}>
                    <ErrorComponent title={'Opps! Unable to load profile'} />
                </div>
            ) : (
                <div style={{ paddingBottom: '94px' }}>
                    <TitleSeparator title={profile.clientInformation.name} />
                    <ProfileData data={profile.clientInformation} />

                    <SubTitleSeparator title={"Financials"} />
                    <FinancialData data={profile.financials} />

                    <SubTitleSeparator title={"Goals"} style={{ marginTop: '25px' }} />
                    <div className={styles.profileGoals}>
                        <CardComponent title={"Emergency Fund"} data={profile.goals.emergencyFund} imageUrl={ProfileImage} actionTitle={"Edit"} />
                        <CardComponent title={"Travel"} data={profile.goals.travel} imageUrl={Avatar2}  actionTitle={"Edit"} />
                    </div>


                    <SubTitleSeparator title={"Insurances"} style={{ marginTop: '25px' }} />
                    <div className={styles.profileGoals}>
                        <CardComponent title={"Life Insurance"} data={profile.insurances.lifeInsurance} imageUrl={Avatar2} actionTitle={"View insurance"} />
                        <CardComponent title={"Personal Accident"} data={profile.insurances.personalAccident} imageUrl={Avatar2} actionTitle={"View insurance"} />
                    </div>
                </div>
            )}
        </>
    )
}

export default ProfilePage