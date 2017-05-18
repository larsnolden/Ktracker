import React from 'react';
import ListItemComponent from './ListItemComponent';
import '../styles/list.css'

const ListComponent = ({ advertisements, handleAdSelect }) => (
  <div>
    <h1 className={"heading"}> Ads Online:</h1>
    <ul className={"list"}>
      {
        advertisements.map((ad) =>
          <ListItemComponent handleAdSelect={handleAdSelect} name={ad.name} uptime={ad.uptime} adId={ad.id} totalViews={ad.totalViews} key={ad.id} />
        )
      }
    </ul>
  </div>
)

export default ListComponent;