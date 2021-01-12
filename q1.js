//Problem 0 : Part A
var cat = {

 name: "Fluffy",
 activities: ["play", "eat cat food"],
 catFriends: [
 {
 name: "bar",
 activities: ["be grumpy", "eat bread omblet"],
 weight: 8,
 furcolor: "white"
 }, 
 {
 name: "foo",
 activities: ["sleep", "pre-sleep naps"],
 weight: 3
 }
 ]
};
//console.log(cat);

//Basic Tasks to play with JSON
console.log("Problem 0 : Part A");
console.log("Basic Tasks to play with JSON");
//1. Add height and weight to Fluffy
cat.height = 1;
cat.weight = 3;

//2. Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = "Fluffyy";
console.log(cat);

//3.List all the activities of Fluffyy’s catFriends.
//4.Print the catFriends names.
//5.Print the total weight of catFriends
let totalWeightOfCatFriends = 0;
for (let i in cat.catFriends)
{
    totalWeightOfCatFriends += cat.catFriends[i].weight;
    console.log("Activities of CatFriend", cat.catFriends[i].name,":", cat.catFriends[i].activities.join());
    
}
console.log("Total weight of Cat Friends", totalWeightOfCatFriends);

//6.Print the total activities of all cats


console.log("All cat activities");
console.log(cat.activities.join());

for (let i in cat.catFriends)    
    console.log(cat.catFriends[i].activities.join());

//7.Add 2 more activities to bar & foo cats
cat.catFriends[0].activities.push("Playing", "Fighting with mouse");
cat.catFriends[1].activities.push("Meowing", "Disturbing Bar");

//8.Update the fur color of bar
cat.catFriends[0].furcolor = "brown";

//-------------------------------------------------------------------------------------------------------------
//Problem 0 : Part B (15 mins):

var myCar = {
 make: "Bugatti",
 model: "Bugatti La Voiture Noire",
 year: 2019,
 accidents: [
 {
 date: "3/15/2019",
 damage_points: "5000",
 atFaultForAccident: true
 },
 {
 date: "7/4/2022",
 damage_points: "2200",
 atFaultForAccident: true
 },
 {
 date: "6/22/2021",
 damage_points: "7900",
 atFaultForAccident: true
 }
 ]
}

console.log("Problem 0 : Part B (15 mins)");
//1. Loop over the accidents array. Change atFaultForAccident from true to false.
//2. Print the dated of my accidents

let allAccidents = myCar.accidents;
console.log("Dates of Accidents:");

for (let ele of allAccidents)
{
    ele.atFaultForAccident = false;
    console.log(ele.date);
}

console.log("Problem 0 : Part B (15 mins)");
/********************************************************************************************************** */
//PROBLEM 1

console.log("Problem 1");
let obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllValues(obj) {
 // your code here
    console.log(Object.values(obj));
}

printAllValues(obj);

/*********************************************************************************************************** */
//Problem 2

console.log("Problem 2");
let obj2 = { name: "RajiniKanth", age: 25, hasPets: true };
function printAllKeys(obj) {
 // your code here
    console.log(Object.keys(obj));
}

printAllKeys(obj2);

//***************************************************************************************************** */

//Problem 3
console.log("Problem 3");
let obj3 = { name: 'ISRO', age: 35, role: 'Scientist' };

function convertListToObject(obj) {
 // your code here
    let allKeys = Object.keys(obj);
    let allValues = Object.values(obj);
    let finalArray = [];
    for (let i in allKeys)
    {
        let eachArray = [];
        eachArray.push(allKeys[i]);
        eachArray.push(allValues[i]);
        finalArray.push(eachArray);
    }
    console.log(finalArray);

}
convertListToObject(obj3);

/********************************************************************************************* */
//PROBLEM 4
console.log("PROBLEM 4");
var arr4 = ['GUVI', 'I', 'am', 'a geek'];
function transformFirstAndLast(arr) {
 
    let newObject = {};
    newObject[arr[0]] = arr[arr.length - 1];
 return newObject;
}

console.log(transformFirstAndLast(arr4));

/***********************************************************************************************************/
/********************************************************************************************************** */
//PROBLEM 5
console.log("PROBLEM 5");
var arr5 = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

function fromListToObject(arr) {
 var newObject = {};
    for (let i in arr)
    {
        let eachArray2 = arr[i];
        let toBeAdded = {};
        toBeAdded[eachArray2[0]] = eachArray2[1];
        newObject = Object.assign(newObject, toBeAdded);

     }
 return newObject;
}

console.log(fromListToObject(arr5));

/********************************************************************************************************/
/******************************************************************************************************* */
//PROBLEM 6
console.log("PROBLEM 6");
var arr6= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];

function transformEmployeeData(arr) {

let transformEmployeeList = [];
 
    for (i = 0; i < arr.length; i ++)

    {
        
        let employee = arr[i];
        let newEmployee = {};

        for (j = 0; j < employee.length; j++)
        {
            let eachDetail = employee[j];
            let toBeAdded = {};
            toBeAdded[eachDetail[0]] = eachDetail[1];
            newEmployee = Object.assign(newEmployee, toBeAdded);

        }
        transformEmployeeList.push(newEmployee);

     }
 return transformEmployeeList;
}



console.log(transformEmployeeData(arr6));

    
/**************************************************************************************************** */
/**************************************************************************************************** */
//PROBLEM 7
console.log("Problem 7")
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
 // your code here
    if (JSON.stringify(expected) == JSON.stringify(actual))
        console.log("Passed");
    
    else
        console.log("FAILED", testName, "Expected", expected, ",but got", actual);
}

assertObjectsEqual(actual, expected, 'detects that two objects are equal');

/***************************************************************************************************** */
/***************************************************************************************************** */
//PROBLEM 8
console.log("Problem 8");
var securityQuestions = [
 {
 question: 'What was your first pet’s name?',
 expectedAnswer: 'FlufferNutter'
 },
 {
 question: 'What was the model year of your first car?',
 expectedAnswer: '1985'
 },
 {
 question: 'What city were you born in?',
 expectedAnswer: 'NYC'
 }
]
function chksecurityQuestions(securityQuestions,question,answer) {

    for (i = 0; i < securityQuestions.length; i++)
    {
        if (securityQuestions[i].question == question) {
            if (securityQuestions[i].expectedAnswer == answer)
                return true;
        }

        else
            return false;
    }
 
}
var ques = 'What was your first pet’s name?';
var ans  =  'FlufferNutter';

console.log(chksecurityQuestions(securityQuestions, ques, ans));

/******************************************************************************************************** */
/******************************************************************************************************** */
//PROBLEM 9

console.log("Problem 9");
var students = [
 {
 name: 'Siddharth Abhimanyu', age: 21}, { name: 'Malar', age: 25},
 {name: 'Maari',age: 18},{name: 'Bhallala Deva',age: 17},
 {name: 'Baahubali',age: 16},{name: 'AAK chandran',age: 23},   {name:'Gabbar Singh',age: 33},{name: 'Mogambo',age: 53},
 {name: 'Munnabhai',age: 40},{name: 'Sher Khan',age: 20},
 {name: 'Chulbul Pandey',age: 19},{name: 'Anthony',age: 28},
 {name: 'Devdas',age: 56} 
 ];
function returnMinors(arr)
{
    let minors = [];
    for (i = 0; i < arr.length; i++)
    {
        if (arr[i].age < 20)
        minors.push(arr[i]);       
    }
    return minors;
}
console.log(returnMinors(students));







