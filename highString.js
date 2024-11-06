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
// const str = "AAAihf78"
console.log(str.length)
console.time("sol 1")
console.log(longestChar(str))
console.timeEnd("sol 1")

console.time("sol 2")
console.log(longestChar2(str))
console.timeEnd("sol 2")