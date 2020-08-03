import React from 'react';
import { render } from 'react-dom'
import EnhancedTable from './EnhancedTable';
import {TableRow, TableCell} from '@material-ui/core';
import StackedRow from './StackedRow';


function renderRows(tbProps){
  const data = [
    [
      'AA', 'BB'
    ],
    [
      'CC', 'DD'
    ]
  ]


  function renderSecondaryRow(rowprops, rowstate){
    console.log('[renderContent renderContent] rowprops', rowprops);
    return <TableCell colSpan={rowprops.children.length}>
      {`${rowprops.name} SECONDARY, colspan: ${rowprops.children.length}`}
    </TableCell>
  }

  return data.map((row,i)=>{
    console.log('[renderRows row] ', row);
    return <StackedRow key={`row-${i}`}
                          rowIndex={i}
                          name={`ROW-${i+1}`}
                          secondaryRenderer={(rowprops, rowstate)=>{
                            return renderSecondaryRow(rowprops, rowstate)
                          }}>
      {
        row.map( (cell,j)=>{

          console.log('[renderRows cell] ', cell);

          return <TableCell key={`cell-${j}`}>
            { cell }
          </TableCell>
        })
      }
    </StackedRow>
  })

};

function App(){

  const headerCells = [
    {
      id: 'col-1',
      label: 'Column 1'
    },
    {
      id: 'col-2',
      label: 'Column 2'
    }
  ]


  return <div>
    <EnhancedTable headerCells={headerCells}
                   bodyRenderer={({tbProps})=>{
                     return renderRows(tbProps)
                   }} />
  </div>
}

render(<App />, document.getElementById('app'))