module.exports = function reverse (n) {
    if(n < 0) {
       n =  n * -1
    }
  let numToStr = n.toString();
  let strToArray = numToStr.split("");
  let arrayRev = strToArray.reverse().join("");
return arrayRev
}
