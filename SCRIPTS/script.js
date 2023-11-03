const records = [
  {
    artist: 'Miles Davis',
    album: 'Kind of Blue',
    label: 'Columbia',
    year: 1959,
    genre: 'Jazz'
  },
  {
    artist: 'Ralph Stanley',
    album: 'Old Home Place',
    label: 'Rebel',
    year: 1976,
    genre: 'Bluegrass'    
  },
  {
    artist: 'Bad Religion',
    album: 'No Control',
    label: 'Epitaph',
    year: 1989,
    genre: 'Punk'
  },
  {
    artist: 'John Coltrane',
    album: 'A Love Supreme',
    label: 'Impulse!',
    year: 1965,
    genre: 'Jazz'
  },
  {
    artist: 'Descendants',
    album: 'Milo Goes to College',
    label: 'New Alliance',
    year: 1982,
    genre: 'Punk'
  },
  {
    artist: 'Charles Mingus',
    album: 'Town Hall Concert',
    label: 'Jazz Workshop',
    year: 1959,
    genre: 'Jazz'
  },
  {
    artist: 'Tony Rice',
    album: 'Manzanita',
    label: 'Rounder',
    year: 1979,
    genre: 'Bluegrass'
  },
  {
    artist: 'Ornette Coleman',
    album: 'The Shape of Jazz to Come',
    label: 'Atlantic',
    year: 1959,
    genre: 'Jazz'
  },
  {
    artist: 'Joni Mitchell',
    album: 'Blue',
    label: 'Reprise',
    year: 1971,
    genre: 'Rock'
  },
  {
    artist: 'Pat Martino',
    album: 'El Hombre',
    label: 'Prestige',
    year: 1967,
    genre: 'Jazz'
  },
  {
    artist: 'Roy Haynes',
    album: 'Out of the Afternoon',
    label: 'Impulse!',
    year: 1962,
    genre: 'Jazz'
  },
  {
    artist: 'Neil Young',
    album: 'Harvest',
    label: 'Reprise',
    year: 1972,
    genre: 'Rock'
  },
];

const jazzAlbums = records.filter(record => record.genre === 'Jazz');
const rockAlbums = records.filter(record => record.genre === 'Rock');
const bluegrassAlbums = records.filter(record => record.genre === 'Bluegrass');
const punkAlbums = records.filter(record => record.genre === 'Punk');
