import React from 'react';
import '../styles/listItem.css'

const ListItemComponent = ({ name, uptime, totalViews, adId, handleAdSelect }) => (
  <li className={"listItem"}>
    <div className={"card"}>
      <span className={"title"}>{name}</span>
      <span>Uptime: {uptime}</span>
      <span>Total: {totalViews}</span>
      <input type={"button"} className={"Primary button"} value={"view"} onClick={() => handleAdSelect(adId)} />
    </div>
  </li>
)

export default ListItemComponent;