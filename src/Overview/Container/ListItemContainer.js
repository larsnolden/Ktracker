import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onRemove, handleAdSelect } from '../Actions';
import ListItemComponent from '../Components/ListItemComponent';

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    onRemove,
    handleAdSelect
  }, dispatch)
)

const ListItemContainer = connect(
  null,
  mapDispatchToProps
)(ListItemComponent)

export default ListItemContainer;