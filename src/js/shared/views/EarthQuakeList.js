import React from 'react';
import { Link } from 'react-router-dom'

export default function EarthQuakeList(props) {
    const listItems = props.earthquakes.map((earthquake) => {
        console.log(JSON.stringify(earthquake))
        return (
            <li key={earthquake.id}>
                <Link to={"/detail?id=" + earthquake.id}>
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
