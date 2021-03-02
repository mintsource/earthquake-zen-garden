import React from 'react';
import Menu from './Menu'

export default function Header(props) {
  return <div><Menu menuItems={props.menuItems}/></div>
}
