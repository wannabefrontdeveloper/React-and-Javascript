let arrayA = ['고구마','감자','바나나']
let arrayB = [{
  name:'고구마',
  price: 1000
},{
  name:'감자',
  price: 500
},
{
  name:'바나나',
  price: 400
}]

arrayA.sort()
console.log('-문자열로 정렬')
console.log(arrayA)
console.log()
console.log('- 문자열로 정렬(역순)')
console.log(arrayA.reverse())
console.log()

arrayB.sort((itemA, itemB) => {
  return itemA.price - itemB.price
})
console.log('- 객체 내부의 숫자로 정렬')
console.log(arrayB)
console.log()

arrayB.sort((itemA,itemB) => {
  if (itemA.name < itemB.name){
    return -1;
  }

  else if (itemA.name > itemB.name) {
    return 1;
  } else{
    return 0;
  }
})

console.log('-객체 내부의 문자열로 정렬')
console.log(arrayB)

//객체 내부에 있는 특정한 값으로 정렬하고 싶을때는 매개변수에 함수를 넣고, 대소 비교해서 -1(앞의 것이 더 작다),0(같다),1(앞의것이 더 크다)를 리턴
