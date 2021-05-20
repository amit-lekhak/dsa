// function reverse(str) {

// const def = str.split("");

// const a = def.reverse();
// const r = a.join("");
// return r;
// }

function reverse(str) {
  const def = str.split('');
  const arr = [];

  for(let i = def.length - 1; i >=0 ; i--){
      arr.push(def[i]);
  }

  return arr.join("");
}

const r = reverse('hello');

console.log(r);
