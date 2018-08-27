// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(value){
  drivers.push(value);
}

function destructivelyPrependDriver(value){
  drivers.unshift(value)

}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(value){
  let new_array = drivers.slice(0);
  new_array.push(value);
  return new_array;
}

function prependDriver(value){
  let new_array = drivers.slice(0);
  new_array.unshift(value);
  return new_array;
}

function removeLastDriver(){
  let new_array = drivers.slice(0);
  new_array.pop();
  return new_array;
}

function removeFirstDriver(){
  let new_array = drivers.slice(0);
  new_array.shift();
  return new_array;
}
