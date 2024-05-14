// Your code here
/**A book object representation.
 * @typedef {Object} Book
 * @property {String} title - The title of the book.
 * @property {String} author - The author of the book.
 * @property {String} genre - The genre of the book.
 */

function filterByGenre(genre, books) {
  return books.filter((book) => book.genre === genre);
}

module.exports = filterByGenre;
/**returns a list of books with the given genre.
 * @param {String} genre - The genre of books required.
 * @param {Book[]} books - An array of Book objects.
 * @returns {Book[]} An Array of Book objects matching the specified genre.
 */