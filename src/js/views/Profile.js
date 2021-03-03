import React from 'react'
import { useParams } from "react-router-dom";
import earthQuakeData from '../../data/earthquakes.json'

export default function Profile() {

    const { id } = useParams()
    const profile = earthQuakeData.profile
    console.log('profile:' + JSON.stringify(profile))

    const fields = [
        { label: "First Name", value: "firstName" },
        { label: "Last Name", value: "lastName" },
        { label: "Phone", value: "phone" },
        { label: "Email", value: "email" },
        { label: "Bio", value: "bio" }
    ]

    const profileTemplate = []

    fields.map(field => {
        console.log(JSON.stringify(field))
        profileTemplate.push(
            <div className='row' key={field.value}>
                <div className='entry title'>
                    {field.label}
                </div>
                <div className='entry value'>
                    {profile[field.value]}
                </div>
            </div>
        )
    });

    return (
        <article className="container">
            <h1>Profile</h1>
            {profileTemplate}
        </article>
    )
}