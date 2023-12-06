const javascriptObject = [{
  name:'윤인성',
  region: '서울'
}, {
  name:'윤명월',
  region:'도쿄'
}]

const outputA = JSON.stringify(javascriptObject)
const outputB = JSON.stringify(javascriptObject,null,2) //2는 공백 개수, null은 변환함수
console.log(typeof(outputA))
console.log(outputA)
console.log(outputB)
console.log('---------------------')

const outputC = JSON.parse(outputB)
console.log(typeof(outputC))
console.log(outputC)