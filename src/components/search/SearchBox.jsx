import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'

export default class SearchBox extends Component {

  render() {
    return (
      <ReactSearchBox
        placeholder="Procurar ou começar uma nova conversa"
        callback={record => console.log(record)}
      />
    )
  }
}