const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// MAP
// Array of names
const map_names = characters.map((character) => character.name)
// console.log(map_names);

// Array of heights
const map_heights = characters.map((character) => character.height);
//console.log(map_heights);

// Array of just names and heights
const map_heights_and_names = characters.map((character) => {
    return {
        name: character.name,
        height: character.height,
    }
});
//console.log(map_heights_and_names);

// Array of just first names
const map_first_names = characters.map((character) => (character.name).split(" ")[0]);
// console.log(map_first_names);