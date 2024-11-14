function longestChar(s) {
    let count = 0;
    let map = {}
    
    if ( !(1 <= s.length && s.length <= 100) ) return 'string length: ' + s.length + ' is out of bound';
      let formatStr = s.replace(/[^a-zA-Z]/g, "");
      
      formatStr.split('').map((char) => {
          if(map[char]){
            count = map[char];
          count++;
          map[char] = count
        }
          if(map[char] === undefined){
            count = 1;
          map[char] = count;
        }
        
    })

      let values = Object.values(map);
      let keys = Object.keys(map);
      let highIndex = Object.values(map).indexOf(Math.max(...values ))
      
      return keys[highIndex]
}

function longestChar2(s) {
  let count = 0;
  let map = {}
  
  if ( !(1 <= s.length && s.length <= 100) ) return 'string length: ' + s.length + ' is out of bound';
    let formatStr = s.replace(/[^a-zA-Z]/g, "");
    
    formatStr.split('').map((char) => {
        if(map[char]){
          count = map[char];
        count++;
        map[char] = count
      }
        if(map[char] === undefined){
          count = 1;
        map[char] = count;
      }
      
  })
    let keys = Object.keys(map);
    let highCount = 0;
    let highest = "";


    keys.map((key) => {
      if(map[key] > highCount) {
        highCount = map[key];
        highest = key
      }
    })
    
    return highest;
}
    
const str = "aakiAKkjkdnjcdvvjvwblnncnJNVNSLBDIHEWUWDCNuhfdnjxmDNEKSKSKNEJDNSJKLSNKDDDDDWLMAKDOWMFCLKSsassyhwyw"
// const str = "AAAihf78fff"
// console.log(str.length)
// console.time("sol 1")
// console.log(longestChar(str))
// console.timeEnd("sol 1")

// console.time("sol 2")
// console.log(longestChar2(str))
// console.timeEnd("sol 2")

/*
Think of a positive number n as a puzzle. your challenge is to keep breaking down into its prime pieces and adding them up. you'll do this repeatedely until it can't be broken down anymore. what you're loooking for is the smallest number that n can become after all these additions.

Example 1:
	input n = 9
	output: 5
Explanation: initially, n = 9.
	9 = 3 * 3, so replace n with 3 + 3 = 6
	6 = 2 * 3, so replace n with 2 + 3 = 5.
	so 5 is the smallest value that can't be broken down.

Example 2:
	Input n = 2
	output: 2
Explanation: initially, n = 2.
so 2 is the smallest value that can't be futher broken down.

Constraints:
2 <= n <= 4*10e6

instructions
*/

 /*  return pieces.reduce( (a, b, idx) => {
    if(a*b === n){
      sum = console.log(pieces.slice(0, idx+1).reduce((c, d) => c + d) )
      console.log(idx)
      console.log("reached 30")
      
    }
    return a*b
  }) */
/* for( let i = n; i >= 2; i-- ){
    if(n % i === 0 ) pieces.push(i)
  } */
 /*  if(pieces !== 0) return unFactorable( pieces + pieces )
  return pieces.filter((a, b)=> { if( (a * b) === n) return [a, b] }) */

 function unFactorable(n) {
  let pieces = [];
  let sum = 0;

  if( !(2 <= n && n <= 4*10e6) ) return "The value of n: " + n + " is out of bound";
  
  for( let i = 2; i <= n; i++ ){
    if(pieces.length > 0){
      if(pieces[pieces.length - 1] * i === n){
        pieces.push(i)
        sum = pieces[pieces.length - 1] + pieces[pieces.length - 2]
        return unFactorable(sum);
      }else if(pieces[pieces.length - 1] * pieces[pieces.length - 1] === n){
        sum = pieces[pieces.length - 1] + pieces[pieces.length - 1]
        return unFactorable(sum);
      }
    }
    if(i === n && pieces.length < 1){
      return n
    }
    if(n % i === 0 ) pieces.push(i)
  }
  return unFactorable(sum);
}

function getPrimeFactors(num) {
  let factors = [];
  let divisor = 2;
  
  while (num >= 2) {
      if (num % divisor === 0) {
          factors.push(divisor);
          num = num / divisor;
      } else {
          divisor++;
      }
  }
  return factors;
}

function smallestValue(n) {
  while (true) {
      let factors = getPrimeFactors(n);
      let sum = factors.reduce((acc, val) => acc + val, 0);
      
      //this is for a numbers with no prime
      if (sum === n) {
          return n;
      } else {
          n = sum;
      }
  }
} 
// console.log(smallestValue(9))
// console.log(primeFactors(15))
// console.log(unFactorable(2))

function primeFactors(num){
  let divisor = 2;
  let factors = [];

  while ( num >= 2){
    if( num % divisor === 0){
      factors.push(divisor)
      num = num / divisor;
    }else {
      divisor++
    }
  }

  return factors

}

// function addPrime(num){
//   let sum = primeFactors(num).reduce((a, b) => a + b, 0);
//   if(sum === n){
//     return n
//   }else {
//     n = sum
//   }

//   return n
// }

function longChar(s) {
  let count = 0;
  let map = {}
  
  if ( !(1 <= s.length && s.length <= 100) ) return 'string length: ' + s.length + ' is out of bound';
    let formatStr = s.replace(/[^a-zA-Z]/g, "");
    
    formatStr.split('').map((char) => {
        if(map[char]){
          count = map[char];
        count++;
        map[char] = count
      }
        if(map[char] === undefined){
          count = 1;
        map[char] = count;
      }
      
  })

    let values = Object.values(map);
    let keys = Object.keys(map);
    let highIndex = Object.values(map).indexOf(Math.max(...values ))
    
    console.log( keys[highIndex] )
    
    return map
}
  
// const str = "aakiAKDNEKSKSKNEJDNSJKLSNKWLMAKDOWMFCLKSsassyhwywjsgagkcdj1678293"
// console.log(longestChar(str))

function longestAlpha(str) {
const map = {};

  for (let i = 0; i < str.length; i++ ){
    if(/a-zA-Z/.test()){
      console.log(str[i])
    }
  }
}


console.log(longestAlpha('HHHty7382LL;;'), 'runinf')