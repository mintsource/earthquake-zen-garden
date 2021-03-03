import React from 'react';
import { Link } from 'react-router-dom'
import earthQuakeData from '../../data/earthquakes.json'

export default function EarthQuakeList() {


  const tableData = earthQuakeData.data.features.map((earthquake) => {
    return (
      <tr key={earthquake.id}>
        <td data-label="Title">
          <Link to={`/detail/${earthquake.id}`}>
            {earthquake.properties.place}</Link>
        </td>
        <td data-label="Magnitude">{earthquake.properties.mag}</td>
        <td data-label="Time">{earthquake.properties.time}</td>
      </tr>
    )
  });
  return (<>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Magnitude</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {tableData}
      </tbody>
    </table>
  </>)
}
