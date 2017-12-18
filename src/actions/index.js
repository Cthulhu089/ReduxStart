export let selectBook = (book) => {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
