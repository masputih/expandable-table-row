import React from 'react';
import { render } from 'react-dom'
import EnhancedTable from './EnhancedTable';
import {TableRow, TableCell} from '@material-ui/core';
import ExpandableRow from './ExpandableRow';


function renderRows(tbProps){
  const data = [
    [
      'AA', 'BB'
    ],
    [
      'CC', 'DD'
    ]
  ]


  function renderContent(rowprops, rowstate){
    console.log('[renderContent renderContent] rowprops', rowprops);
    return <TableCell colSpan={rowprops.children.length}>
      {`SECONDARY, colspan: ${rowprops.children.length}`}
    </TableCell>
  }

  return data.map((row,i)=>{
    console.log('[renderRows row] ', row);
    return <ExpandableRow key={`row-${i}`}
                          rowIndex={i}
                          secondaryRenderer={(rowprops, rowstate)=>{
                            return renderContent(rowprops, rowstate)
                          }}>
      {
        row.map( (cell,j)=>{

          console.log('[renderRows cell] ', cell);

          return <TableCell key={`cell-${j}`}>
            { cell }
          </TableCell>
        })
      }
    </ExpandableRow>
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