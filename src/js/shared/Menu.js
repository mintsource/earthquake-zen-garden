import React from 'react';

export default function Menu(props) {
  const renderedMenu = []
  console.log('props:' + JSON.stringify(props))

  for (let i = 0; props.menuItems.length > i; i++) {
    console.log('props.menuItems[i].label:' + props.menuItems[i].label)
    renderedMenu.push(<li><a href={props.menuItems[i].link}>{props.menuItems[i].label}</a></li>)
  }

  return (
    <ul>
      {renderedMenu}
    </ul>
  )
}
