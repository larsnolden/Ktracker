import React from 'react';

import './app.css'

//import Components/Views
import AddDealerContainer from './Overview/Container/AddDealerContainer';
import ListContainer from './Overview/Container/ListContainer';
import DetailContainer from './Detail/Container/DetailContainer';

const App = () => (
  <div className={'app'}>
    <h1>VAIO</h1>
    <AddDealerContainer />
    <div className={'results'}>
      <ListContainer />
      <DetailContainer />
    </div>
  </div>
)

export default App;