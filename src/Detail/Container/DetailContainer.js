import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DetailComponent from '../Components/DetailComponent';

let mapStateToProps = (state) => (
  {
    name: state.detail.name,
    totalVisits: state.detail.totalVisits,
    uptime: state.detail.uptime
  }
)

let mapDispatchToProps = (dispatch) => (
  bindActionCreators({
  }, dispatch)
)

const DetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailComponent);

export default DetailContainer;