/*
변수와 자료형(Data Type)

[기본타입(Primitive Type)]
- undefined
- null
- string
- boolean
[객체]
- object
    1. new 생성자함수() 사용해서 생성
        Number()    => object 타입의 객체
        String()    => object 타입의 객체
        Boolean()   => object 타입의 객체
        Object()    => object 타입의 객체 / 빈 객체
        Array()     Object와 Array는 차이가 없다. Array는 Object이다.
        Date()      => object 타입의 객체
        RegExp()    => object 타입의 객체
        Function()  => function 타입의 객체 / 함수 만들때 사용
    2. {}
    3. []
    4. null == 객체
- function
*/

console.log("=== 기본타입(undefined, number, string, boolean) ===");
var u = undefined;  // var u; 와 동일, 선언과 정의를 구분하지 않는다.
var i = 10;
var s = 'Hello World';
var b = true;

console.log(u + ":" + typeof(u));
console.log(i + ":" + typeof(i));
console.log(s + ":" + typeof(s));
console.log(b + ":" + typeof(b));


console.log("=== 객체타입(object) ===");
// Number, String 등 자바스크립트에 내장되어있다.
var i2 = new Number(10);    // Number = 생성자 함수(대문자로 시작)
var s2 = new String("Hello World");
var b2 = new Boolean(true);
var o = new Object();
var a = new Array();
var d = new Date();


console.log(i2 + ":" + typeof(i2));
console.log(s2 + ":" + typeof(s2));
console.log(b2 + ":" + typeof(b2));
console.log(o + ":" + typeof(o));
console.log(a + ":" + typeof(a));
console.log(d + ":" + typeof(d));

// [객체] object 1. new 생성자함수() 사용해서 생성
// object type
// function Studenet(name){
//     this.name = name;
// }

// var o = new Studenet("둘리");
// console.log(typeof(o));
