////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {

  if (num1 > num2){
    return num2;
  } else{
    return num1;
  }
};


////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(number) {
 if (number === 0){
    return true;
 } else if (number === 1){
    return false;
   } else if (number < 0){
      return false;
     }
      else {
        return isEven(number -2);
      }
  }

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChar(string, character) {

  
let count = 0;
  for (let i = 0; i < string.length; i++){
    if (string[i] === character){
      count++;
    }
  } return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++){
    if (string[i] === "B"){
      count++;
    }
  } return count;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChar,
  };
};
