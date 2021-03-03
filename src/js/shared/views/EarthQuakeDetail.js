import React from 'react';
import { useParams } from "react-router-dom";
import earthQuakeData from '../../../data/earthquakes.json'


export default function EarthQuakeDetail() {
  const { id } = useParams()
  const details = earthQuakeData.data.features.find(earthquake => earthquake.id = id)

  return (
    <article className='detail-container'>
      <h1>{details.properties.title}</h1>
      <div >
        <div className='row'>
          <div className='category'>
            Title
            </div>
          <div className='details'>
            {details.properties.title}
          </div>
          <div className='category'>
            Magnititude
            </div>
          <div className='details'>
            {details.properties.mag}
          </div>
          <div className='category'>
            Time
            </div>
          <div className='details'>
            {details.properties.time}
          </div>
          <div className='category'>
            Status
            </div>
          <div className='details'>
            {details.properties.status}
          </div>
          <div className='category'>
            Tsunami
            </div>
          <div className='details'>
            {details.properties.tsunami}
          </div>
          <div className='category'>
            Type
            </div>
          <div className='details'>
            {details.properties.type}
          </div>
        </div>
      </div>
    </article>
  )
}
