import httpism from 'httpism';

//not needed right now
export const onRemove = (id) => (
  {
    type: 'REMOVE_AD',
    id
  }
)

export const handleDealerInputChange = (evt) => (
  {
    type: 'DEALER_INPUT_CHANGE',
    value: evt.target.value
  }
)

const getAds = (dealerId, baseEndpoint) => (
  httpism.post(baseEndpoint + '/api/v1',
    JSON.stringify({
      method: 'get_ad_ids_by_dealer_id',
      params: {
        dealer_id: dealerId
      }
    })
  )
)

//pull all ad from dealer page and populate state
export const handleDealerSubmit = () => (dispatch, getState, baseEndpoint) => (
  getAds(getState().dealerId, baseEndpoint).then((response) => {
    addMultipleAdvertisements(response)
  }).catch((error) => console.log(error))
)

const addMultipleAdvertisements = (advertisements) => (dispatch, getState) => {
  for (let ad in advertisements) {
    dispatch(addAdvertisement(ad))
  }
}

//push advertisement to list to select from
const addAdvertisement = (ad) => (
  {
    type: 'ADD_ADVERTISEMENT',
    ad
  }
)

const pullAdDetails = (id, baseEndpoint) => (
  httpism.post(baseEndpoint + '/api/v1',
    JSON.stringify({
      method: 'get_all_visits_data_by_ad_id',
      params: {
        ad_id: id
      }
    })
  )
)

//fetch detail data and send action to change detail data
export const handleAdSelect = (id) => (
  (dispatch, getState, baseEndpoint) => (
    pullAdDetails(id, baseEndpoint).then((response) => {
      changeDetailData(response)
    }).catch((error) => {
      console.log(error)
    })
  )
)

const changeDetailData = (adDetail) => (
  {
    type: 'DETAIL_DATA',
    adDetail
  }
)