import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';

import './styles.scss';

const ExpandableRow = props => {

  const [state, setState] = useState({
    expanded: false
  })

  const cname = 'expandable-row';

  return <React.Fragment>
    <TableRow className={cname + ' primary'} onClick={()=>{
      setState(curr =>{
        return {
          ...curr,
          expanded: !curr.expanded
        }
      })
    }}>
      { props.children }
    </TableRow>
    {
      state.expanded && <TableRow className={cname +' secondary'}>
        {
          props.secondaryRenderer(props,state)
        }
      </TableRow>
    }
  </React.Fragment>
}

ExpandableRow.propTypes = {
  secondaryRenderer: PropTypes.func.isRequired
}

export default ExpandableRow;