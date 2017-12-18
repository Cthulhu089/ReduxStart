import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

 let mapStateToProps = (state) => {
  return {
    books: state.books
  };
}

/*Anything returned from this function will en up as mapStateToProps
on the Book List Container*/
let mapDispatchToProps = (dispatch) => {
  //Whenever a select book is call, the result should be passed
  //to all of reducers
   return bindActionCreators({selectBook: selectBook}, dispatch);
}

/*Promote BookList from a Component to a container = it needs to know
about this new dispatch method, selectBook. make it available as props*/
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
