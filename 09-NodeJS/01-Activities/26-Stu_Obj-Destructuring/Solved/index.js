// 1. Object
const arya = {
  first: 'Arya',
  last: 'Stark',
  origin: 'Winterfell',
  allegiance: 'House Stark',
};

const { first, last, origin, allegiance } = arya;
console.log(first); // <= Arya
console.log(last); // <= Stark

// 2. Nested Object
const jon = {
  first: 'Jon',
  last: 'Snow',
  title: 'Prince',
  family: {
    brothers: {
      brother1: 'Rob Stark',
      brother2: 'Rickon Stark',
    },
    sisters: {
      sister1: 'Arya Stark',
      sister2: 'Sansa Stark',
    },
  },
};

const { brother1, brother2 } = jon.family.brothers;
console.log(brother1); // <= Rob Stark
console.log(brother2); // <= Rickon Stark

// 3. Arrays
const characters = ['Ned Stark', 'The Quiet Wolf', 'House Stark'];

const [name, alias, house] = characters;
console.log(name, alias, house); // <= Ned Stark The Quiet Wolf House Stark

// 4. Strings
const skills = 'The Usurper, Baratheon, Cersei'; // string of data

const [nickName, family, spouse] = skills.split(','); // set variables and split
console.log(nickName, family, spouse); // print them by variable name
