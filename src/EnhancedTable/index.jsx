import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';

import './styles.scss';

const EnhancedTable = (props) => {
  const cname = clsx([
    'enhanced-table',
    props.className
  ]);

  const sortDirection = props.sortDirection.toLowerCase();

  return (
    <TableContainer className={cname}>
      <Table>
        <TableHead>
          <TableRow>
            {
              props.headerCells.map( (o,i)=>{
                return (
                  <TableCell
                    key={o.id}
                    align={o.align}
                    className={o.className}
                    sortDirection={props.sortBy === o.id ? sortDirection : null}
                  >
                    {
                      o.sortable ? <TableSortLabel
                        style={{
                          minWidth: 100
                        }}
                        active={props.sortBy === o.id}
                        direction={sortDirection}
                        onClick={()=>{
                          if(props.sortHandler){
                            props.sortHandler(o.id, sortDirection === 'asc' ? 'DESC' : 'ASC')
                          }
                        }}
                      >
                        <label>{
                          o.label
                        }</label>
                      </TableSortLabel> : o.label
                    }
                  </TableCell>
                )
              })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          { props.bodyRenderer(props) }
        </TableBody>
      </Table>
    </TableContainer>
  )
};

EnhancedTable.defaultProps = {
  sortDirection: 'DESC'
};

EnhancedTable.propTypes = {
  sortHandler: PropTypes.func,
  sortBy: PropTypes.string,
  sortDirection: PropTypes.oneOf(['ASC','DESC']),
  bodyRenderer: PropTypes.func.isRequired,
  headerCells: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    sortable: PropTypes.bool,
    align: PropTypes.string,
    className: PropTypes.string
  })).isRequired
};

export default EnhancedTable;
