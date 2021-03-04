import React from 'react';
import { useParams } from "react-router-dom";
import earthQuakeData from '../../data/earthquakes.json'

export default function EarthQuakeDetail() {
  const { id } = useParams()
  const details = earthQuakeData.data.features.find(earthquake => earthquake.id === id)
  const fields = [
    { label: "Title", value: "title" },
    { label: "Magnititude", value: "mag" },
    { label: "Time", value: "time" },
    { label: "Status", value: "status" },
    { label: "Tsunami", value: "tsunami" },
    { label: "Type", value: "type" }
  ]

  const detailTemplate = []

  fields.map(field => {
    if (field.value === "time") {
      details.properties[field.value] = new Date(details.properties[field.value]).toUTCString()
    }

    detailTemplate.push(
      <div className='row' key={field.value}>
        <div className='entry title'>
          {field.label}
        </div>
        <div className='entry value'>
          {details.properties[field.value]}
        </div>
      </div>
    )
  });

  return (
    <article className='container'>
      <h1>{details.properties.place}</h1>
      <section>
        {detailTemplate}
      </section>
    </article>
  )
}
