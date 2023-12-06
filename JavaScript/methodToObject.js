let primitiveNumber = 273
Number.prototype.method = function() {
  return 'Primitive Method'
}
console.log(primitiveNumber.method())