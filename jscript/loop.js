for(let i=0; i<=20; i++){
    console.log(i);
}


friends=['john','samuel','issac','john','peter','nonso','daniel','destiny','grace','ifeoma'];
console.log(typeof(friends));
for (let i=0; i<friends.length; i++) {
    console.log(`${friends[i]} is my friend`);
}

const friendTypes =['john','samuel','issac','john','peter'];
for(let i=0; i<friendTypes.length; i++){
    console.log(`${i}. ${friends[i]} is my friend`);
}

courses=['html','javascript','css','python','bootstrap'];
console.log(courses[4]);







const ageCalculator = function (birthYear) {
    return 2023 - birthYear;
}

const yearArr = [1990,1991,1992,1993,1994,1995];


const age1 =ageCalculator(yearArr[0]);
const age2 =ageCalculator(yearArr[1]);
const age3 =ageCalculator(yearArr[yearArr.length-1]);

const ages = [age1, age2, age3];
console.log(ages);

yearArr[0] = 2000
console.log(yearArr);

yearArr.push(2001)
console.log(yearArr);
yearArr.unshift(2010)
console.log(yearArr);
yearArr.pop()
console.log(yearArr);