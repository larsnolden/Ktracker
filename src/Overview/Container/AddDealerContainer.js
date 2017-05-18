import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleDealerInputChange, handleDealerSubmit } from '../Actions';
import AddDealerComponent from '../Components/AddDealerComponent';

let mapStateToProps = (state) => (
  {
    dealerId: state.overview.dealerId
  }
)

let mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    handleDealerInputChange,
    handleDealerSubmit
  }, dispatch)
)

const AddDealerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDealerComponent)

export default AddDealerContainer;