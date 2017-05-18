let initalState = {
  dealerId: '',
  advertisements: [
    {
      name: 'Ford Taunus 5L',
      uptime: '4 weeks',
      totalViews: 545,
      id: 1262905915
      //will get unix timestamp and calcute days
    },
    {
      name: 'Mercedes C class',
      uptime: '6 weeks',
      totalViews: 2213,
      id: 1262885760
    }
  ]
}

export const overview = (state = initalState, action) => {
  switch (action.type) {
    case 'ADD_ADVERTISEMENT':
      return Object.assign({}, state, { advertisements: state.advertisements.push(action.ad) })

    case 'DEALER_INPUT_CHANGE':
      return Object.assign({}, state, { dealerId: action.value })
    default:
      return state
  }
}