module.exports = (fullName) => {
  if(!fullName) return 'Error';
  if(typeof fullName !== 'string') return 'Error';
  if(checkIfCorrectFormat(fullName).length != 1) return 'Error';
  const [ firstName, lastName ] = fullName.split(' ');
  if(!firstName || !lastName) return false;
  return firstName[0].toUpperCase + firstName.slice(1).toLowerCase() + lastName[0].toUpperCase + lastName.slice(1).toLowerCase() ;
};


function checkIfCorrectFormat(fullName) {
  let indices = [];
  for(let i=0; i<fullName.length; i++) {
      if (fullName[i] === " ") indices.push(i);
  }
  return indices;
}