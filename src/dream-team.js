const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let team = members.filter(a => typeof a == 'string').map(a => a.trim()[0].toUpperCase());
    return team.sort((a,b) => a.charCodeAt(0)-b.charCodeAt(0)).join('');
  }
  return false;
};
