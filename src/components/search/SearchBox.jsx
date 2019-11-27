import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'

export default class SearchBox extends Component {

  render() {
    return (
      <div>
        <input type="text" className="input-search" placeholder="Procurar ou começar uma nova conversa"/>
      </div>
    )
  }
}