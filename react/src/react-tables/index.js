import React from 'react'

function Columns (props) {
  return (
    <thead>
      <tr>
        {props.items.map((item, index) => <th key={index}>{item}</th>)}
      </tr>
    </thead>
  )
}

function Row (props) {
  return (
    <tr>
      {props.items.map((item, index) => <td key={index}>{item}</td>)}
    </tr>
  )
}

function Rows (props) {
  return (
    <tbody>
      {props.items.map((row, index) => <Row key={index} items={row} />)}
    </tbody>
  )
}

function TableComponent (props) {
  return (
    <table>
      <Columns items={props.columns} />
      <Rows items={props.rows} />
    </table>
  )
}

export default class MyTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      columns: ['name', 'main jutsu'],
      rows: [['naruto', 'kage bunshin'], ['sasuke', 'chidori']]
    }
  }

  render () {
    return <TableComponent columns={this.state.columns} rows={this.state.rows} />
  }
}
