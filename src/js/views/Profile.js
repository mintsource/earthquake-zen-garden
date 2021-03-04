import React from 'react'
import earthQuakeData from '../../data/earthquakes.json'

export default function Profile() {

  const profile = earthQuakeData.profile

  const fields = [
    { label: "First Name", value: "firstName" },
    { label: "Last Name", value: "lastName" },
    { label: "Phone", value: "phone" },
    { label: "Email", value: "email" },
    { label: "Bio", value: "bio" }
  ]

  const profileTemplate = []

  fields.map(field => {
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
    <article className='container'>
      <h1>Profile</h1>
      <div className='row'>
        <div className='column'>
          <img className="avatar" src={profile.avatarImage} />
        </div>
        <div className='double-column'>
          {profileTemplate}
        </div>
      </div>
    </article>
  )
}