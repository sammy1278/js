const student ={
    firstName: 'John',
    lastName: 'Doe',
    age: '20',
    job: 'Developer',
    friends: ['john','samuel','michael','emmanuela','daniel']
};

// dot(.) notation
console.log(student.firstName);

/*
john has 5 friends and his bestfriend is samuel
*/
console.log(`${student.firstName} has ${student.friends.length} friends and his bestfriend is ${student.friends[2]}`);

// bracket notation
console.log(student['lastName']);

// adding more data to the object
student['location'] = 'Abuja';
console.log(student);
student.siblings = 4;
console.log(student);


// accesing multiple values from an object
const newName = 'Name'
console.log(student['first'+ newName]);
console.log(student['last'+ newName]);

// to get information from an object
const findinfo = prompt('what are you interested about this student(name,job,friends,location,,no of siblings) ');
console.log(findinfo);
//console.log(student.findinfo);

//console.log(student[findinfo]);
if(student[findinfo]){
    console.log(student[findinfo]);
}else{
    prompt('what are you interested about this student: Try again(name,job,friends,location,,no of siblings): ');
}

let firstName = 'john'
let age = 23;
let career = 'developer';
const person ={
    myName: firstName,
    myAge: age,
    myJob: career,
}
console.log(person);

//looping through an object using values


const personinfo = Object.values(student)
console.log(personinfo);
//

personinfo.forEach((info)=>console.log(info));

console.log('testing the keys');
const personKeys = Object.keys(student);
personKeys.forEach((info)=> console.log(info));

console.log('**testing the keys**');
const personEntry = Object.entries(student);
personEntry.forEach((info)=> console.log(info));


const studentinfo = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: '2000',
    job: 'Developer',
    friends: ['john','samuel','michael','emmanuela','daniel'],
    /*ageCal: function(birthYear){
        return 2023 - birthYear;
    }*/
    /*ageCal: function(){
        console.log(this);
        console.log('.....................');
        console.log(studentinfo);
        return 2023 - this.birthYear;
    }*/
    // ageCal: function(){
    //     this.age = 2023 -this.birthYear
    //     return this.age
    // }

    johninfo: function (){
        return `${this.firstName} was born ${this.birthYear}, his last name is  ${this.lastName} and he works as ${this.job}`+
       ` and his number of friends is ${this.friends.length}`  
    }
};

/* console.log(studentinfo.ageCal(2000));
console.log(studentinfo['ageCal'](2000)) */

/*console.log(studentinfo.ageCal(studentinfo.yearofBirth));

console.log(studentinfo['ageCal'](studentinfo['yearofBirth']))*/

// console.log(studentinfo.age);


// console.log(studentinfo.age);
// console.log(studentinfo.age);
// console.log(studentinfo.age);
// console.log(studentinfo.age);
//console.log(studentinfo['ageCal'](2000))

