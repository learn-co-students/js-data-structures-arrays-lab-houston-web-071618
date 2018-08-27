// Write your solution in this file!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(name){
  let newArray = [...drivers]
  newArray.push(name)
  return newArray
}

function prependDriver(name){
  let newArray = [...drivers]
  newArray.unshift(name)
  return newArray
}

function removeLastDriver(){
  let newArray = [...drivers]
  newArray.pop()
  return newArray
}

function removeFirstDriver(){
  let newArray = [...drivers]
  newArray.shift()
  return newArray
}
