import React from 'react';
import { Link } from 'react-router-dom'
import earthQuakeData from '../../data/earthquakes.json'

export default function EarthQuakeList() {
    const listItems = earthQuakeData.data.features.map((earthquake) => {
        return (
            <li key={earthquake.id}>
                <Link to={`/detail/${earthquake.id}`}>
                    {earthquake.properties.place}</Link>
            </li>
        )
    });

    console.log(`listItems ${listItems}`)
    return (<>
        <ul>
            {listItems}
        </ul>
    </>)
}
