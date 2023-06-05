'use strict';

/*
// Coding Challenge #1
function checkDogs(dogsJulia, dogsKate) {
  let correctDogsJulia = dogsJulia.slice(1, -2);
  const dogs = correctDogsJulia.concat(dogsKate);

  dogs.forEach(function (dog, i) {
    console.log(
      dog >= 3
        ? `Dog number ${i + 1} is an adult and is ${dog} years old`
        : `Dog number ${i + 1} is still a puppy🐕`
    );
  });
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// Coding Challenge #2
function calcAverageHumanAge(dogAges) {
  const dogAge = dogAges.map(age =>
    age > 2 ? (age = 16 + age * 4) : (age *= 2)
  );
  const adultDog = dogAge.filter(dogAge => dogAge >= 18);
  const averageDogAges = adultDog.reduce(
    (sum, dogAge, i, arr) => sum + dogAge / arr.length,
    0
  );
  return averageDogAges;
}
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4, 8, 9, 4, 6, 12]));

// Coding Challenge #3
const calcAverageHumanAgeArrow = dogAges =>
  dogAges
    .map(age => (age > 2 ? (age = 16 + age * 4) : age * 2))
    .filter(age => age >= 18)
    .reduce((sum, age, i, arr) => sum + age / arr.length, 0);
console.log(calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAgeArrow([16, 6, 10, 5, 6, 1, 4]));
console.log(calcAverageHumanAgeArrow([16, 6, 10, 5, 6, 1, 4, 8, 9, 4, 6, 12]));
*/

// Coding Challenge #4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
function createRecommendedFood(dogs) {
  dogs.forEach(dog => {
    dog.recommendedPortion = Math.round(dog.weight ** 0.75 * 28);
  });
}
createRecommendedFood(dogs);
console.log(dogs);

// 2.
// Simple way
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);

console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recommendedPortion ? 'much' : 'little'
  }`
);

// My way
dogs.forEach(dog => {
  if (dog.owners.includes('Sarah')) {
    if (
      dog.curFood > dog.recommendedPortion * 0.9 &&
      dog.curFood < dog.recommendedPortion * 1.1
    ) {
      console.log('Pass');
    } else if (dog.curFood < dog.recommendedPortion * 0.9) {
      console.log('Too Little');
    } else {
      console.log('Too Much');
    }
  }
});

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedPortion)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedPortion)
  .flatMap(dog => dog.owners);

// My way
// dogs.forEach(dog => {
//   if (dog.curFood > dog.recommendedPortion * 1.1) {
//     ownersEatTooMuch.push(dog.owners);
//   } else if (dog.curFood < dog.recommendedPortion * 0.9) {
//     ownersEatTooLittle.push(dog.owners);
//   }
// });
console.log(ownersEatTooLittle);
console.log(ownersEatTooMuch);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

// 5.
const eatingExactly = dogs.reduce(
  (x, dog) => dog.curFood === dog.recommendedPortion,
  true
);
const eatingExactly2 = dogs.some(dog => dog.curFood === dog.recommendedPortion);
console.log(eatingExactly);
console.log(eatingExactly2);

// 6.
const eatingOkay = dogs.reduce(
  (x, dog) =>
    dog.curFood > dog.recommendedPortion * 0.9 &&
    dog.curFood < dog.recommendedPortion * 1,
  false
);
const eatingOkay2 = dogs.some(checkEatingOkay);
console.log(eatingOkay);
console.log(eatingOkay2);

// 7.
const dogsEatingOkay = dogs.filter(checkEatingOkay);
console.log(dogsEatingOkay);

// 8.
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedPortion - b.recommendedPortion);
console.log(dogsSorted);
console.log(dogs);

function checkEatingOkay(dog) {
  return (
    dog.curFood > dog.recommendedPortion * 0.9 &&
    dog.curFood < dog.recommendedPortion * 1
  );
}
