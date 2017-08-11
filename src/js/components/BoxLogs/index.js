'use strict'

import React from 'react'
import Paper from 'material-ui/Paper';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

const TableExampleSimple = () => (
  <Table>
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
    >
      <TableRow>
        <TableHeaderColumn>Date</TableHeaderColumn>
        <TableHeaderColumn>Description</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={false}
    >
      <TableRow>
        <TableRowColumn>2017-2-20 10:25:56</TableRowColumn>
        <TableRowColumn>File not found</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2017-2-20 10:25:56</TableRowColumn>
        <TableRowColumn>File not found</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2017-2-20 10:25:56</TableRowColumn>
        <TableRowColumn>File not found</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2017-2-20 10:25:56</TableRowColumn>
        <TableRowColumn>File not found</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2017-2-20 10:25:56</TableRowColumn>
        <TableRowColumn>File not found</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
)

class BoxLogs extends React.Component {
  render () {
    const style = {
      height: '100%',
      width: '100%',
      marginTop: 130,
      textAlign: 'center',
      display: 'inline-block',
    };

    return (
      <Paper style={style} zDepth={1} children={<TableExampleSimple />} />
    )
  }
}

export default BoxLogs
