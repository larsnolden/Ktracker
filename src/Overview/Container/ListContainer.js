import ListComponent from '../Components/ListComponent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleAdSelect } from '../Actions';

let mapStateToProps = (state) => (
  {
    advertisements: state.overview.advertisements
  }
)

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    handleAdSelect
  }, dispatch)
)

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListComponent);

export default ListContainer;