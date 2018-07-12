const googleDataBase = [
  'cats.com',
  'soups.com',
  'animals.com',
  'flowers.com',
  'catpictures.com',
  'myfavouritescats.com',
  'myfavouritescats2.com'
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter(website => website.includes(searchInput));

  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(googleSearch('cat', googleDataBase));

module.exports = googleSearch;