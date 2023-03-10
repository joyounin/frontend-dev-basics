/**
 *  자바스크립트 함수 : function 타입의 객체
 * 
 */

console.log("=== 함수를 생성하는 방법1: 함수 리터럴 ======");
function f1(a, b){
    return a + b;
}
console.log(typeof(f1), f1 instanceof Function, f1(10, 20));

console.log("=== 함수를 생성하는 방법2: 함수 리터럴 ======");
var f2 = function(a, b){
    return a + b;
}

console.log(typeof(f2), f2 instanceof Function, f2(10, 20));

console.log("=== 함수를 생성하는 방법3: new  연산자와 함께 Function() 생성자 함수를 사용 ======");
var f3 = new Function("a", "b", "return a + b");
console.log(typeof(f3), f3 instanceof Function, f3(10, 20));

console.log("=== 함수를 생성하는 방법4: 익명(anonymous) 함수 ======");
setTimeout(function(){
    console.log("time out");
}, 10);

console.log("=== 익명(anonymous) 함수의 또 다른 예: 한번 만(즉시) 실행하는 함수 ======");
var s =(function(a, b){
    var m = 10;
    return a/m + b/m;
})(10, 20);

console.log(s);

// 가변 파라미터
// 1. 자바스크립트는 기본적으로 가변 파라미터를 지원한다.
//    파라미터는 고정되어 있지 않다.
var f4 = function(a, b, c){
    console.log(a, b, c);
}
f4(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

// 2. 예
console.log("=== 가변 파라미터 함수 sum() ==============");

var sum = function(){
    //console.log(arguments instanceof Array, arguments instanceof Object, arguments.length);
    var sum = 0;
    // for(var i = 0; i < arguments.length; i++){
    //     sum += arguments[i];
    // }
    // return sum;
    
    // Error
    // arguments의 _proto_는 objcet Prototype에 chain이 되어 있기 때문에...(arguments는 object의 인스턴스이다.)
    // arguments.forEach(function(e) {
    //     sum += e;
    // });

    // arguments는 전역 변수가 아닌 this가 된다.
    Array.prototype.forEach.call(arguments, function(e){
        sum += e;
    });

    return sum;
}

console.log(sum(10));
console.log(sum(10, 20));
console.log(sum(10, 20, 30));
console.log(sum(10, 20, 30, 40, 50));

