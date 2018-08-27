// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  const new_array = [...drivers, name];
  return new_array;
}

function prependDriver(name){
  const new_array = [name, ...drivers];
  return new_array;
}

function removeLastDriver(){
  const blah = drivers.slice(0, drivers.length-1);
  return blah;
}

function removeFirstDriver(){
  const blah = drivers.slice(1);
  return blah;
}
