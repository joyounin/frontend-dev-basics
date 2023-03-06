/**
 *  Arrow Function
 * 
 */

const power = function(x){
    return x * x;   
}

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(n){
    process.stdout.write(`${n} : ${power(n)}\t`);
});

// ex1
console.log("\n-------\n");
numbers.forEach(function(n){
    // let result = (function(x){
    //    return x * x;
    // })(n);

    // 화살표 함수(다시 보기) 한줄이면 {} 생략 가능 return은 생략(항상 return을 하기 때문)
    //let result = ((x) =>  {return x * x})(n);
    let result = ((x) =>  x * x)(n);
    process.stdout.write(`${n} : ${result}\t`);
});

// ex2
console.log("\n-------\n");
numbers.forEach((n) => 
    process.stdout.write(`${n} : ${(x => x*x)(n)}\t`));


// ex3 여러행 함수
console.log("\n-------\n");
[5, 3, 15, 1045, 43, 92].forEach(e => {
    if(e % 5){
        process.stdout.write(`${e} : ${(x => x * x)(e)}\t`);
    }
});