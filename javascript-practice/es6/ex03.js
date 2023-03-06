/**
 *  template literal
 * 
 */

let no = 10;
let name = "둘리";
let email = "dooly@gmail.com";

// ex01
console.log("no: " + no + ", name: " + name + ", email: " + email);
console.log(`no: ${no}, name: ${name}, email: ${email}`);

// ex02: 다중행
console.log(`
no: ${no},
name: ${name},
email: ${email}`);
/** 결과 자동 개행이 된다.
 no: 10,
name: 둘리,
email: dooly@gmail.com
 */