/*
console.log(1+2);
console.log(1-2);
console.log(1*2);
console.log(1/2);
console.log(1%2);

console.log(4%3);
console.log(-4%3);
console.log(4%-3);
console.log(-4%-3);

console.log(5.0%2.2);

console.log(!true);
console.log(!false);

console.log("This is \"String\"")
console.log('This is \'String\'')
console.log("동해물과 백두산이\n마르고 닳도록")

console.log("이름 \t나이")
console.log("안녕\n하세요")
console.log("\\\\")

let hours = (new Date()).getHours();  
console.log(hours < 3 || 8 < hours);
console.log(3 <= hours && hours <= 8);

let pi = 3.14169265;
let radius = 10;

console.log(`둘레: ${2 * pi * radius}`);
console.log(`넓이: ${pi * radius * radius}`);


let a = 'test';
    a = 'test2';
    a = 'test3';
    console.log(a);



let a = 10;
console.log(a);
console.log(typeof(a));
a = "문자열";
console.log(a);
console.log(typeof(a));
a=true;
console.log(a);
console.log(typeof(a));
a={};
console.log(a);
console.log(typeof(a));
let c;
console.log(typeof(c));


let number = 10;
console.log(number);
console.log(++number);
console.log(--number);
console.log(number);

let number = 10;

console.log(number);
console.log(number++);
console.log(number--);
console.log(number);

let nan = Number("안녕하세요");
let undefinedVariable;

console.log(Boolean(0));
console.log(Boolean(nan));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefinedVariable));


let nan = Number("안녕하세요");
let undefinedVariable;

console.log(!!0);
console.log(!!nan);
console.log(!!"");
console.log(!!null);
console.log(!!undefinedVariable);


console.log(`52 == "52": ${52 == "52"}`);
console.log(`52 === "52": ${52 === "52"}`);
console.log();
console.log(`0 == "" : ${0 == ""}`);
console.log(`0 === "": ${0 === ""}`);

const constant = "변경할 수 없어요";
constant = "";
console.log(constant);

/*

let 함수 = function () {
  console.log("함수의 첫 번째 줄");
  console.log("함수의 두 번째 줄");
};

함수();
console.log(함수);


function 함수() {
  console.log("함수의 첫 번째 줄");
  console.log("함수의 두 번째 줄");
};

함수();
console.log(함수);

let 함수 = () => {
  console.log("함수의 첫 번째 줄");
  console.log("함수의 두 번째 줄");
};

함수();
console.log(함수);

function power(x) {
  return x = x;
}

console.log(power(10));
console.log(power(20));

function print(message) {
  console.log(`"${message}"(이)라고 말했습니다!`);
}
print("안녕하세요");
print("뿌잉뿌잉");


function sum(min,max) {
  let output = 0;
  for (let i = min; i <= max; i++) {
    output += i;
  }
  return output;
}

console.log(sum(1,100));

function print(name, count) {
  if (!count) {
    count = 1;
  }

  console.log(`${name}이/가 ${count}개 있습니다.`)
}
print("사과");

function print(name, count) {
  count = count || 1;

  

  console.log(`${name}이/가 ${count}개 있습니다.`)
}
print("사과");

function callTenTimes(callback) {
  for (let i =0; i < 10; i++) {
    callback();
  }
}
callTenTimes(function() {
  console.log('함수 호출');
});

let inputA = "52";
let inputB = "52.273";
let inputC = "1401동"

console.log(parseInt(inputA))

console.log(parseInt(inputB))
console.log(parseFloat(inputB))

console.log(parseInt(inputC));

setTimeout(function () {
  console.log("1초가 지났습니다.");
},1000);

setInterval(function () {
  console.log("1초마다 호출됩니다.");
},1000);

let id = setInterval(function () {
  console.log("출력합니다");
},1000);

setTimeout(function () {
  clearInterval(id);
},3000)

let 변수;
변수 = 10;
변수 = 20;

console.log(변수)

*/

함수 = function () {console.log("첫 번째 함수");};
함수 = function() {console.log("두 번째 함수");};
함수();   //두번째함수

함수 = function () {console.log("첫 번째 함수");};
function 함수() { console.log("두 번째 함수");};
함수(); //첫번째함수

함수 = function () {console.log("1");};
함수 = function () {console.log("2");};
함수(); //2

함수 = function () {console.log("1");};
function 함수() { console.log("2");};
함수(); //1

function 함수() { console.log("1");};
함수 = function () {console.log("2");};
함수(); //2

function 함수() { console.log("1");};
function 함수() { console.log("2");};
함수(); //2

/*

(function () {
  console.log(this);
})();

(() => {
  console.log(this);
})();

let product = {
  제품명: '7D 건조 망고',
  유형: '당절임',
  성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
  원산지:'필리핀'
};

console.log(product);

let object = {
  name: '바나나',
  price: 1200
};

console.log(object.name);
console.log(object.price);
*/