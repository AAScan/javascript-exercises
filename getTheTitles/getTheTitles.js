const getTheTitles = function(list) {
  const titleArray = list.map(book=>book.title);
  return titleArray;
}

module.exports = getTheTitles;
