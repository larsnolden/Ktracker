let initalState = {
  name: 'Mercedes 300E',
  uptime: '3 weeks',
  totalVisits: 141,
  xLabels: ["1", "February", "March", "April", "May", "June", "July"],
  yValues: [500, 552, 622, 788, 799, 824, 844]
}

//data format: [{timestamp, views}]

export const detail = (state = initalState, action) => {
  switch (action.type) {
    case 'DETAIL_DATA':
      return action.adDetail
    default:
      return state
  }
}