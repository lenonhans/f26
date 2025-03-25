function maxOf(a,b,c) {
    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max;
  }

console.log(maxOf(12, 34, 56));

function reverseString(str) {
    let result = ""; 
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }
    return result;
}

console.log(reverseString("hello"));