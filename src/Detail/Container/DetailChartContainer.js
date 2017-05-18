import { connect } from 'react-redux';
import DetailChartComponent from '../Components/DetailChartComponent';

const mapStateToProps = (state) => (
  {
    xLabels: state.detail.xLabels,
    yValues: state.detail.yValues
  }
)

const DetailChartContainer = connect(
  mapStateToProps,
  null
)(DetailChartComponent);

export default DetailChartContainer;