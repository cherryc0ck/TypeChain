const name = "HongUnTaek",
age = 27,
gender = 'male';

const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
}
const sayHi: (name:any, age: any, gender?: any) => void
sayHi(name, age);

export {};