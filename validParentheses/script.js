var isValid = function(str) {
  var arr = [];
  let charMap = { '{': '}', '[': ']', '(': ')' };
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      arr.push(str[i]);
    } else if (charMap[arr[arr.length - 1]] === str[i]) {
      arr.pop();
    } else {
      return false;
    }
  }
  return arr.length === 0;
};