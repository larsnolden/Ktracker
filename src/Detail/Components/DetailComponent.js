import React from 'react';
import DetailChartContainer from '../Container/DetailChartContainer';

import '../styles/detail.css'

const DetailComponent = ({ name, totalVisits, uptime }) => (
  <div className={'detail'}>
    <h1>{name}<small>Total Visits:{totalVisits}<br />Online for:{uptime}</small></h1>
    <DetailChartContainer />
  </div>
);

export default DetailComponent;