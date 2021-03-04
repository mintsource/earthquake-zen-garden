import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import earthQuakeData from '../../data/earthquakes.json'

export default function EarthQuakeList() {

  const [sortedField, setSortedField] = useState()
  const [sortAscending, setSortAscending] = useState()
  const [sortedData, setSortedData] = useState(earthQuakeData.data.features)

  console.log(`sortedField: ${sortedField}`)

  if (sortedField === undefined) {
    sortField("place")
  }

  const tableData = sortedData.map((earthquake) => {
    return (
      <tr key={earthquake.id}>
        <td data-label="Title" className="primary">
          <Link to={`/detail/${earthquake.id}`}>
            {earthquake.properties.place}</Link>
        </td>
        <td data-label="Magnitude">{earthquake.properties.mag}</td>
        <td data-label="Time">{new Date(earthquake.properties.time).toUTCString()}</td>
      </tr>
    )
  });

  function sortField(name) {
    console.log("sortField:" + JSON.stringify(name))

    if (name === sortedField) {
      setSortAscending(!sortAscending)
    } else {
      setSortAscending(true)
    }

    sortedData.sort((a, b) => {
      if (a.properties[name] < b.properties[name]) {
        return sortAscending ? 1 : -1
      }
      if (a.properties[name] > b.properties[name]) {
        return sortAscending ? -1 : 1
      }
      return 0
    })

    setSortedField(name)
    setSortedData(sortedData)
  }

  function sortIndicator(fieldName) {
    if (sortedField === fieldName) {
      if (sortAscending) {
        return "asc"
      }
      return "desc"
    }
  }

  return (

    <article className="container">
      <h1>USGS All Earthquakes, Past Hour</h1>
      <table className="earthquake-list">
        <thead>
          <tr>
            <th onClick={() => sortField('place')} className={sortIndicator('place')}>Title</th>
            <th onClick={() => sortField('mag')} className={sortIndicator('mag')}>Magnitude</th>
            <th onClick={() => sortField('time')} className={sortIndicator('time')}>Time</th>
          </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
    </article>)
}
