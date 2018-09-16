// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

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

function appendDriver(name) {
  let temp_drivers = drivers.slice()
  temp_drivers.push(name)
  return temp_drivers
}

function prependDriver(name) {
  let temp_drivers = drivers.slice()
  temp_drivers.unshift(name)
  return temp_drivers
}

function removeLastDriver(){
  let t_drivers = drivers.slice()
  t_drivers.pop()
  return t_drivers
}

function removeFirstDriver(){
  let t_drivers = drivers.slice()
  t_drivers.shift()
  return t_drivers
}
