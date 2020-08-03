import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';

import './styles.scss';

const StackedRow = props => {

  const [state, setState] = useState({
    expanded: false
  })

  const cname = 'stacked-row';

  return <React.Fragment>
    <TableRow className={`${cname} primary`} onClick={()=>{
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
      state.expanded && <TableRow className={`${cname} secondary`}>
        {
          props.secondaryRenderer(props,state)
        }
      </TableRow>
    }
  </React.Fragment>
}

StackedRow.propTypes = {
  secondaryRenderer: PropTypes.func.isRequired
}

export default StackedRow;