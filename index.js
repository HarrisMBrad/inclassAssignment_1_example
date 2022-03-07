/*
1. Declaring variables with let, const
- [Y] Declaring variables with let, const
- [Y] Scope differences between let, const, var
- [Q] Why you shouldn’t use var keyword?
b/c ES6 changed an allows for let and const as key words. */
// var -> function
// let -> block
// const -> block scopped... *these can not change. 
const x = 1;
function sayHello() {

  //

  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  // 
  console.log(i + 1);
}

sayHello(1);

