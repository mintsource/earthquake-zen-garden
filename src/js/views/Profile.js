
import React from 'react'
import { useParams } from "react-router-dom";
import earthQuakeData from '../../data/earthquakes.json'

export default function Profile() {

    const { id } = useParams()
    const profile = earthQuakeData.profile
    console.log('profile:' + JSON.stringify(profile))

    return (
        <article>
            <h1>Profile</h1>
            <div className='row'>
                <div className='category'>
                    First Name
            </div>
                <div className='details'>
                    {profile.firstName}
                </div>
            </div>
            <div className='row'>
                <div className='category'>
                    Second Name
            </div>
                <div className='details'>
                    {profile.lastName}
                </div>
            </div>
            <div className='row'>
                <div className='category'>
                    Phone
            </div>
                <div className='details'>
                    {profile.lastName}
                </div>
            </div>
            <div className='row'>
                <div className='category'>
                    Email
            </div>
                <div className='details'>
                    {profile.lastName}
                </div>
            </div>
            <div className='row'>
                <div className='category'>
                    Bio
            </div>
                <div className='details'>
                    {profile.lastName}
                </div>
            </div>
            <div className='row'>
                <div className='category'>
                    Image (refactor)
            </div>
                <div className='details'>
                    {profile.avatarImage}
                </div>
            </div>
        </article>
    )
}