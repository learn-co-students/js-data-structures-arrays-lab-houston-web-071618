// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function members() {
	return drivers;
}

function destructivelyAppendDriver(name) {
	members().push(name);
}

function destructivelyPrependDriver(name) {
	members().unshift(name);
}

function destructivelyRemoveLastDriver() {
	members().pop(-1);
}

function destructivelyRemoveFirstDriver() {
	members().shift(0);
}

function appendDriver(name) {
	return [...drivers, name];
}

function prependDriver(name) {
	return [name, ...drivers];
}

function removeLastDriver() {
	return members().slice(0,members().length-1);
}

function removeFirstDriver() {
	return members().slice(1,members().length);
}