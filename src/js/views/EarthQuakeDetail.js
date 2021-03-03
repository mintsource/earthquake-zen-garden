import React from 'react';
import { useParams } from "react-router-dom";
import earthQuakeData from '../../data/earthquakes.json'


export default function EarthQuakeDetail() {
  const { id } = useParams()
  const details = earthQuakeData.data.features.find(earthquake => earthquake.id === id)

  return (
    <article className='detail-container'>
      <h1>{details.properties.place}</h1>
      <section>
        <div className='row'>
          <div className='category'>
            Title
            </div>
          <div className='details'>
            {details.properties.place}
          </div>
        </div>
        <div className='row'>
          <div className='category'>
            Magnititude
            </div>
          <div className='details'>
            {details.properties.mag}
          </div>
        </div>
        <div className='row'>
          <div className='category'>
            Time
            </div>
          <div className='details'>
            {details.properties.time}
          </div>
        </div>
        <div className='row'>
          <div className='category'>
            Status
            </div>
          <div className='details'>
            {details.properties.status}
          </div>
        </div>
        <div className='row'>
          <div className='category'>
            Tsunami
            </div>
          <div className='details'>
            {details.properties.tsunami}
          </div>
        </div>
        <div className='row'>
          <div className='category'>
            Type
            </div>
          <div className='details'>
            {details.properties.type}
          </div>
        </div>
      </section>
    </article>
  )
}
