// function declaration
/*function add(){

}
calling
*/
function add(){
    console.log(5+2);
}
add()
add()
add()
add()
add()

function friend(){
    let friendName='samuel';
    let age= 23;
    let course = 'javascript';
    console.log(`${friendName} is ${age} and studying ${course} `);
}
friend()

function friend2(firstName,age,course){
    console.log(`${firstName} is ${age} and studying ${course} `);
}
friend2('john',20,'javascript')
friend2('peter',23,'python')

function calculateAverage(num1, num2, num3){
    console.log((num1 + num2 + num3) / 3);    
}
calculateAverage(4,5,6) + 4

//with return
function ageCalc(firstName, birthYear){
    const age = 2023 - birthYear;
    return `${firstName} is ${age} years old`;
    
} 
const result = ageCalc('Samuel', 2004);
console.log (result + ' and lives in wuse');


//function without parametter
function student(){
    let firstName = 'samuel';
    let age =20
    let course = 'javascript'

    console.log(`${firstName} is ${age} years old`);
}

//function with parametter
function friends(num1, num2, num3){
    console.log(num1 + num2 + num3);
}
//function with return
function name(birthyear){
    const age =  2023 - birthyear;
    return age;
}

function all(){
    friends (1, 2, 3);
    student();
    console.log(name(2004));
}
all()

// function Expression
// let add2 = function(a,b){
// }
// console.log(typeof(add2));

let add3 =function(a,b,c){
    return a+b+c
}
console.log(add3(3,4,5));

// function calculateSecondsLived(age) {
//     const SecondsInYear =365 * 24 * 60 * 60;
//     return (age * SecondsInYear);
// }

// const mySecondsLived = calculateSecondsLived(19);
// console.log(`I have lived for ${mySecondsLived} seconds`);

let calculateSecondsLived = function(age) {
    const SecondsInYear =365 * 24 * 60 * 60;
    return (age * SecondsInYear);
}

const mySecondsLived = calculateSecondsLived(19);
console.log(`I have lived for ${mySecondsLived} seconds`);

// Arrow function

const y = function add(){
    return 5 + 2
}
console.log(y());
const x = ()=> 5+2;
console.log(x());

const student2 = (age,course) =>{
    return `this student is ${age} years old and studying ${course}`
}
student2 (19 , 'javascript');
console.log(student2 (19 , 'javascript'));