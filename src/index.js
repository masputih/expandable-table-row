import React from 'react';
import { render } from 'react-dom'
import EnhancedTable from './EnhancedTable';
import {TableRow, TableCell} from '@material-ui/core';


function renderRows(tbProps){
  const data = [
    [
      'AA', 'BB'
    ],
    [
      'CC', 'DD'
    ]
  ]

  return data.map((row,i)=>{
    console.log('[renderRows row] ', row);
    return <TableRow key={`row-${i}`}>
      {
        row.map( (cell,j)=>{

          console.log('[renderRows cell] ', cell);

          return <TableCell key={`cell-${j}`}>
            { cell }
          </TableCell>
        })
      }
    </TableRow>
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