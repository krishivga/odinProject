const getAge = function (person) {
    // The nullish coalescing assignment operator
    // only does the assignment if the left side is "nullish" (evaluates to undefined or null)
    // if the left side has any other value, no assignment happens
    // here, we use ??= to set the current year for our subtraction below only if there is no year of death
    person.yearOfDeath ??= new Date().getFullYear();
  
    return person.yearOfDeath - person.yearOfBirth;
  };
  
const findTheOldest = function (people) {
    const peopleOldestToYoungest = people.toSorted(
        (person, nextPerson) => getAge(nextPerson) - getAge(person),
    );

    const oldestPerson = peopleOldestToYoungest[0];
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;