import { connect } from 'react-redux';
import ColumnsArea from '../components/columns_area';

const mapStateToProps = state => ({
  columns: state.getIn(['settings', 'columns']),
  isModalOpen: !!state.get('modal').modalType,
  ltl_visibility: state.getIn(['compose', 'ltl_visibility']),
});

export default connect(mapStateToProps, null, null, { withRef: true })(ColumnsArea);
