let products = [{
  name: '바나나',
  price: 1200,
  print: function () {
    console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
  }
}, {
  name: '사과',
  price: 2000,
  print: function () {
    console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
  }
}, {
  name: '배',
  price: 3000,
  print: function () {
    console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
  }
}, {
  name: '고구마',
  price: 3000,
  print: function () {
    console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
  }
},{
  name:'감자',
  price: 3000,
  print: function () {
    console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
  }
},{
  name: '수박',
  price: 3000,
  print: function () {
    console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
  }
}];

for(let product of products) {
  product.print();
}