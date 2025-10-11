const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else {
    let letters = [];
    let nameOfTheGroup = [];
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === 'string') {
            letters.push(members[i].trim());
        }
    }
    for (let j = 0; j < letters.length; j++) {
        nameOfTheGroup.push(letters[j][0].toUpperCase());
    }
    let finaleName = nameOfTheGroup.sort().join('');
    return finaleName;
  }
}

module.exports = {
  createDreamTeam
};
