import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={ book.title }
          onClick={ () => selectBook(book) }
          className="list-group-item"
        >
        { book.title }
      </li>
      )
    })
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books
})

export default connect(mapStateToProps)(BookList)
