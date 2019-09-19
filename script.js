// Lecture = Variables
/*
var name = 'greig';
console.log(name);

var lastName = 'hearne';
console.log(lastName);

var age = 46;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/
//
// Lecture = Variables 2
/*
var name     = 'Greig';
var lastName = 'hearne';
var age      = 46;
//
console.log(name + ' ' + lastName + ' ' + age + ' that"s all folks');
//
//var lastName = prompt('Last name please ?');
//console.log(lastName);
//
alert(name + ' ' + lastName + ' ' + age);
*/
//
/* Lecture = Operators

     =       to assign a value to something, like name = 'Greig'
     ==      this does type coercion ie 23 the number is the same as '23' so they match, try not to use this operator, bugs are harder to spot, not as safe as using ===
             if (23 == '23') {
                console.log('print something out...')
             }
     ===     strict equality, no type coercion, its a comparison operator, like 
                   if  (isMarried === 'yes') { 
*/
//
// Lecture - if/else statements
//
//
/*var firstName   = 'Greig';
var age         = 46;
var civilStatus = 'single';
//
if (civilStatus === 'married') {
    console.log(firstName + ' is already married');
} else {
    console.log(firstName + ' may get married one day');
}
//
var isMarried = true;
//
if (isMarried) {
    console.log(firstName + ' is already married');
} else {
    console.log(firstName + ' may get married one day');
}
//
var markMass   = 90;
var markHeight = 2.10; 
var johnMass   = 88;
var johnHeight = 1.66;
//
var markBmi = markMass / (markHeight * markHeight);
var johnBmi = johnMass / (johnHeight * johnHeight);
//
if (markBmi > johnBmi) {
   console.log('Mark\'s BMI iS higher than John\'s BMI. Mark\s bmi = ' + markBmi + '. John\s bmi = ' + johnBmi + '.');
} else {
   console.log('John\'S BMI is higher than Mark\'s BMI. John\s bmi = ' + johnBmi + '. Mark\s bmi = ' + markBmi + '.'); 
}
*/
//
//console.log('Marks BMI = ' + markBmi + '.');
//console.log('Johns BMI = ' + johnBmi + '.');
//console.log('Is Mark\'s BMI higher than John\'s BMI? Answer = ' + bmiFlag + '.');
//
//
//
// Operator Precedence.....
//x = y = (3 + 5) * 4 - 6;   // 8 * 4 - 6    // 32 - 6 //  26
// so both x and y will equal 26
//
//
// These are all the same, they add 1 to whatever value is in x....
// x = x + 1;
// x += 1;
// x++
//
//
// Lecture - boolean logic...
//
/*  
        and (&&)    => true if ALL are true
        or (||)     => true if ONE is true
        NOT (!)     => inverts true/false value
        
        var age = 16;
        
        age >= 20;      // => false
        age <= 30;      // => true
        ! (age <30);    // => false
        
        age >= 20 && age < 30;  // => false
        age >= 20 || age < 30;  // => true
//
//
var firstName = 'Greig';
var age = 20;
//
if (age < 13) {
    console.log(firstName + 'is a boy');
} else if (age >= 13 && age < 20) {
    console.log('Greig is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('Greig is a young man');
} else {
    console.log('Greig is a man');
}
//
*/
//
//
//
// The Ternary operator and switch statements....
//
/*var firstName = 'Greig';
var age = 16;
//
// Ternary operator....
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.')
//
var drink = age >= 18 ? 'beer' : 'juice';
console.log(firstName + ' will drink ' + drink)
//
*/
//
/*
// Switch statement.....
var job = 'teacher';
//
// or you can prompt the user to enter a job description....
//
//job = prompt('what does greig do ?');
// 
// Can have multiple 'cases' without a break, bit like an OR condition....teacher OR instructor.
switch(job) {
    case 'teacher' :
    case 'instructor' :
        console.log(firstName + ' is a teacher');
        break;
    case 'doctor' :
        console.log(firstName + ' is a doctor');
        break;
    case 'developer' :
        console.log(firstName + ' writes code');
        break;
    default:
        console.log('not a scooby what he does');
}
//
var firstName = 'Greig';
var age = 22;
//
// same as from above else if statement but as a switch statement....
switch (true) {
    case age < 13 :
        console.log(firstName + 'is a boy');
        break;
    case age >= 13 && age < 20 :
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30 :
        console.log(firstName + ' is a young man');
        break;
    default :
        console.log(firstName + ' is a man');       
        
}
*/
//
// Truthy and falsy values and equality operators....
//
// falsy values are : undefinded, null, 0, '', NaN (NaN = Not a Number)
//
// truthy valurs are : NOT falsy values.
/*
var height;
//
height = 23;
//
//if (height) {   // see above 0 is a false value so, variable would be undefined, so use OR condition (||).....as shown below....
if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}
//
// comparing the NUMBER 23 contained in 'height' with the string '23'....
if (height == '23') {
    console.log('The operator == does type coercion !!!' );    
}
*/
//
//
//
// Lecture - coding challenge # 1 
//
//var markMass   = 90;
//var markHeight = 2.10; 
//var johnMass   = 88;
//var johnHeight = 1.66;
//
//var markBmi = markMass / (markHeight * markHeight);
//var johnBmi = johnMass / (johnHeight * johnHeight);
//
//var bmiFlag = markBmi > johnBmi;
//
//console.log('Marks BMI = ' + markBmi + '.');
//console.log('Johns BMI = ' + johnBmi + '.');
//console.log('Is Mark\'s BMI higher than John\'s BMI? Answer = ' + bmiFlag + '.');
//
//
//
// Coding Challenge #2 
//
/*
var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
//
//console.log('john = ' + scoreJohn + '   mike = ' + scoreMike + ', mary = ' + scoreMary + '.');
//
if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s score ' + scoreJohn + ' is more than Mike\s score of ' + scoreMike + ' and Mary\'s score of ' + scoreMary + '.');
    }
else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s score ' + scoreMike + ' is more than John\s score of ' + scoreJohn + ' and Mary\'s score of ' + scoreMary + '.');
    }
else if (scoreMary > scoreJohn && scoreMary > scoreMike ) {
    console.log('Mary\'s score ' + scoreMary + ' is more than John\s score of ' + scoreJohn + ' and Mike\'s score of ' + scoreMike + '.');         
     }
else {
    console.log('Equal scores, John\'s score is ' + scoreJohn + ', Mike\'s score is ' + scoreMike + ', Mary\'s score is ' + scoreMary + '.');
}
*/
//
// Lecture - coding challenge # 
/*
var greigAge     = 46;
var greigHeight  = 170;
var greigScore   = greigHeight + 5 * greigAge;
//
var simonAge     = 47;
var simonHeight  = 175;
var simonScore   = simonHeight + 5 * simonAge;
//
var andrewAge    = 60;
var andrewHeight = 110;
var andrewScore  = andrewHeight + 5 * andrewAge;
//
console.log('greig acore = ' + greigScore + ', simons score = ' + simonScore + ' ' + simonHeight + ', andrew score = ' + andrewScore + '.'); 
//
// Logic below is for part 3.
//
if (greigScore > simonScore) {
    console.log('Greig is higher than simon, greig = ' + greigScore + ', simon = ' + simonScore + '.');
} else if (greigScore < simonScore) {
    console.log('Simon is higher then greig, simom = ' + simonScore + ', greig = ' + greigScore + '.');
} else {
    console.log('Draw, greig = ' + greigScore + ' simon = ' + simonScore + '.');
}    
//
// Logic below is for point 4. 
//
if (greigScore > simonScore && greigScore > andrewScore) {
    console.log('Greig wins the game with ' + greigScore + ' points, simon = ' + simonScore + ', andrew = ' + andrewScore + '.');
} else if (simonScore > greigScore && simonScore > andrewScore) {
    console.log('Simon wins the game with = ' + simonScore + ' points, greig = ' + greigScore + ', andrew = ' + andrewScore + '.');
} else if (andrewScore > greigScore && andrewScore > simonScore) {
    console.log('Andrew wins the game with = ' + andrewScore + ' points, greig = ' + greigScore + ', simon = ' + simonScore + '.');
} else {
//  console.log('It is a Draw, greig = ' + greigScore + ', simon = ' + simonScore + ', andrew = //' + andrewScore + '.');    
//                the same but with an escape key (\) to ignore the apostrophe....
  console.log('It\'s a Draw, greig = ' + greigScore + ', simon = ' + simonScore + ', andrew = ' + andrewScore + '.');  
//
}
*/
//
//
//
//
//
//
// Lecture - Functions......
//
/*function calculateAge(birthYear) {
    var age = 2018 - birthYear;
    return age;
}
//
var ageGreig = calculateAge(1972);
var ageSimon = calculateAge(1971);
var ageAndrew = calculateAge(1961);
//
console.log('Greigs age = ' + ageGreig + ', Simons age = ' + ageSimon + ', Andrews age = ' + ageAndrew + '.');
//
//
function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(name + ' will retire in ' + retirement + ' years');
    } else if (retirement < 0) {
               console.log(name + ' has already retired.');       
    } else {
    console.log(name + ' will retire this year.');
            }
}
//
yearsUntilRetirement('Greig', 1972);
yearsUntilRetirement('Simon', 1971);
yearsUntilRetirement('Andrew', 1961);
*/
//
//
//
//
//
//
// Lecture - Function Statements and expresssions.....
//
// Expression - is something which produces something immediately....like 
//3 + 4;
//var x = 5;
//
// Statement - produces no output, nothing is stored....like 
//if (x ===5) {
// do some code....
//}
//
// Function declaration..,,,nothing returned....
//function whatDoYouDo(job, firstName) {}
//
// Function expresion...something is returned...
/*var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher' :
            return firstName + ' is a teacher.';
        case 'driver' :
            return firstName + ' is a driver.';
        case 'designer' :
            return firstName + 'writes code.';
        default :
            return firstName + ' no idea what they do.';
    }
}
greig = whatDoYouDo;
//
console.log(greig('doctor','andrew'));
//            
console.log(whatDoYouDo('teacher', 'Greig'));
console.log(whatDoYouDo('driver', 'Simon'));
console.log(whatDoYouDo('whatEver', 'Andrew'));
*/
//
//
//
//
//
// Lecture - Arrays.............
//
// Arrays are defined by using square brackets when defining the variable....such as....
// 
// Elements also start at 0 (and not at 1 like pro4).
// Initialise new array....
/*var names = ['Greig', ' Simon', ' Andrew'];
var years = new Array('1972', '1971', '1961');
//
console.log('names are = ' + names + '.');
//
//How to find out how many elements an array has...
console.log(names.length);
console.log('First name is = ' + names[0] + '.');
//
// Arrays can hold mixed data types, strings, numbers as well as boolean values....
var everything = ['Greig', 'Hearne', 1972, 'Developer', true];
console.log(everything);
//
// Change the value of an element in an array, ie mutate it !
names[2] = ' Andy'
console.log('names are = ' + names + '.');
//
// Can add an element, and leave spaces (not sure why though)
names[7] = 'Bob'
console.log('names are = ' + names + '.');
//
// Can add an element after the last element so there's no spaces, using the method used above...
names[names.length] = 'Fred'
console.log('names are = ' + names + '.');
//
// Can add an element at the END of an array....
//everything.push('Red');
//console.log(everything);
// Can add an element and START of an array....
//everything.unshift('Mr.');
//console.log(everything);
//
// Remove the last element in an array....means 'Red' would get removed from the array...
//everything.pop();
//console.log(everything);
// Remove the first element in an array...means 'Mr' would get removed from the array....
//everything.shift();
//console.log(everything);
//
// How to find out which element contains the parameter being sent to the array...will use alert (a pop up window instead of console.log)....will be element #1 as they start at 0...
// NOTE - if the element value is not found in the array then -1 is returned.
//alert(everything.indexOf('Hearne'));
//
// Checking an element in an array is equal to a specific value...
if (everything.indexOf('Developer') === -1) {
    console.log('Greig is NOT a developer');
}
//or
var isDeveloper = everything.indexOf('Developer') === -1 ? 'Greig is NOT a developer' : 'Greig IS a developer';
console.log(isDeveloper);
*/
//
//
//
//
//
//
// Coding challenge #3 
/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill <= 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}
//
var bill = [124, 48, 268];
//
var tips = [tipCalculator(bill[0]),
            tipCalculator(bill[1]),
            tipCalculator(bill[2])];
//
var finalValues = [bill[0] + tips[0],
                   bill[1] + tips[1],
                   bill[2] + tips[2]];
//
console.log('Bill £' + bill[0] + ' gives a tip of £' + tips[0] + ' and a final bill of £' + finalValues[0] + '.');
console.log('Bill £' + bill[1] + ' gives a tip of £' + tips[1] + ' and a final bill of £' + finalValues[1] + '.');
console.log('Bill £' + bill[2] + ' gives a tip of £' + tips[2] + ' and a final bill of £' + finalValues[2] + '.');
*/
//
//
//
//
//
//
// Lecture - Objects and Properties.........Defining an object....
/*
var everything = {
    firstName: 'Greig',
    lastName: 'Hearne',
    yearOfBirth: 1972,
    family: ['Julie', 'Jody', 'Ethan'],
    job: 'Developer',
    isMarried: true
};
//
// Accessing a specific named element in an array...
console.log(everything);
console.log(everything.lastName);
console.log(everything['lastName']);
//
// another way is to define and set a variable to the named element of the array to be able to reference it.....
var abc = 'job';
console.log(everything[abc]);
//
// changing values of elements in an object...
everything.lastName = 'Smith';
// or 
everything['job'] = 'Programmer';
//
console.log(everything);
//
// OR another way to define an object.......
var stuff = new Object();
//
stuff.firstName = 'Simon';
stuff.lastName = 'Claker';
stuff['yearOfBirth'] = 1971;
stuff['job'] = 'Developer';
stuff['isMarried'] = false;
//
console.log(stuff);
*/
//
//
//
//
//
//
//
//
// Lecture - Object and Methods...........
/*
var everything = {
    name: 'Greig',
    lastName: 'Hearne',
    yearOfBirth: 1972,
    job: 'Developer',
    isMarried: true,
    // add an array into the obect....
    family: ['Jody', 'Ethan', 'Millie'],
    // add a 'function expression' into the object....
    //calculateAge: function(yearOfBirth) {
    //    return 2018 - yearOfBirth;
    //now use the yearOfBirth in 'this' object (currently on line 297)....
    calculateAge: function() {
        this.age = 2018 - this.yearOfBirth;
        this.job = this.job + ' hello';
        return {age: this.age, job: this.job};
    }
};
//
console.log(JSON.stringify(everything));
console.log(everything);
console.log(JSON.stringify(everything));
//console.log(everything.family);
//console.log(everything.family[1]);
//console.log(everything.calculateAge(1972));
//however to use the yearOfBirth as defined inside the object, use 'this.' with no parameters...
//console.log(everything.calculateAge());
//
// Create and set a new property of 'everything'....
console.log(everything.calculateAge());
//
console.log(JSON.stringify(everything));
*/
//
//
//
//
//
//
//
//
// Coding Challenge #4...........
/*
var mark = {
    firstName : 'Mark',
    lastName  : 'Smith',
    mass      : 90,
    height    : 2.10,
    calcBmi   : function() {
                this.bmi = this.mass / (this.height * this.height);
                return this.bmi;
    }
};
//
var john = {
    firstName : 'John',
    lastName  : 'Jones',
    mass      : 88,
    height    : 1.66,
    calcBmi   : function() {
                this.bmi = this.mass / (this.height * this.height);
                return this.bmi;
    }

};
//
console.log(mark);
console.log(john);
//
if (mark.calcBmi() > john.calcBmi()) {
    console.log(mark.firstName + ' ' + mark.lastName + ' has the greatest BMI with ' + mark.Bmi + '.');
    } else if (mark.Bmi < john.Bmi) {
        console.log(john.firstName + ' ' + john.lastName + ' has the greatest BMI with ' + john.Bmi + '.');               
    } else {
        console.log(mark.firstName + ' ' + mark.lastName + ' has the same BMI as ' + john.firstName + ' ' + john.lastName + ' with a BMI of ' + john.Bmi + '.');
};
*/
//
//
//
//
//
//
// Lecture - Loops and Iteration.........these are control structures....
/*
// A For loop has 3 parameters to it :- 
//     1 - initial value.................i 0 is the start of the loop
//     2 - condition to be evaluated before each loop....ie go from 0 to 9 - loop round 10 times.
//     3 - increment the counter.
//
//for (var i = 0; i < 10; i ++) {
//    console.log('Counter = ' + i + '.');
//}
//
//for (var i = 1; i <= 20; i += 2) {
//    console.log('Counter = ' + i + '.');
//}
//
//var everything = ['Greig', 'Hearne', 1972, 'Developer', true];
//
//for (var i = 0; i < everything.length; i++){
//     console.log(everything[i]);
//}
//
//
// While loop....
//var i = 0;
//
//while ( i < everything.length) {
//    console.log(everything[i]);
//    i++;
//}
//
//
//Continue and break statements.......
//
// !=     - different operator
// !==    - strict different operator (should always try and use this one).
// 
var everything = ['Greig', 'Hearne', 1972, 'Developer', true, 'Red'];
//
// Continue - means go to the next element in the array if the condition is/is NOT met....
for (var i = 0; i < everything.length; i++){
    if (typeof everything[i] !== 'string') continue;
     console.log(everything[i]);
}
//
// Break - means exit the loop when a condition is/is NOT met....
for (var i = 0; i < everything.length; i++){
    if (typeof everything[i] !== 'string') break;
     console.log(everything[i]);
}
//
// Start at the last elemement of an array, and work back wards.....
for (var i = everything.length - 1; i >= 0; i--) {
     console.log(everything[i]);
}
*/
//
//
//
//
//
//
//
//
//
//
//
// Coding challenge # 5..........part 1
/*
var john = {
    firstName : 'John',
    lastName  : 'Jones',
    bills     : [124, 48, 268, 180, 42],
    calcTips  : function () {
                    this.tips = [];
                    this.finalBill = [];
                    //
                    for (i= 0; i < this.bills.length; i++) 
                    {
                        var percentage;
                        var bill = this.bills[i];
                        if (bill < 50) 
                        {
                          percentage = .2;
                        } else if (bill >= 50 && bill <= 200) 
                        {
                          percentage = .15;
                        } else 
                        {
                          percentage = .1;
                        }
                        this.tips[i] = bill * percentage;
                        this.finalBill[i] = bill + this.tips[i];
                    }
             }   
}
// 
// // Coding challenge # 5..........part 2
//
var mark = {
    firstName : 'Mark',
    lastName  : 'Smith',
    bills     : [77, 475, 110, 45],
    calcTips  : function () {
                    this.tips = [];
                    this.finalBill = [];
                    //
                    for (var i= 0; i < this.bills.length; i++) 
                    {
                        var percentage;
                        var bill = this.bills[i];
                        if (bill < 100) 
                        {
                          percentage = .2;
                        } else if (bill >= 100 && bill < 300) 
                        {
                          percentage = .1;
                        } else 
                        {
                          percentage = .25;
                        }
                        this.tips[i] = bill * percentage;
                        this.finalBill[i] = bill + this.tips[i];
                    }
             }   
}
// 
function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    return sum / tips.length;
}
john.calcTips();
mark.calcTips();
//
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
//
console.log(john, mark);
//
if (john.average > mark.average) {
       console.log(john.firstName + ' ' + john.lastName + '\'s family pays higher tips, with an average of £' + john.average + '.');
    } else if (john.average < mark.average) {
       console.log(mark.firstName + ' ' + mark.lastName + '\'s family pays higher tips, with an average of £' + mark.average + '.');
    } else {
       console.log(mark.firstName + ' ' + mark.lastName + '\'s family pays the same tips as ' + john.firstName + ' ' + john.lastName + '\'s family, with an average of £' + mark.average + '.');
}
*/
//
//
//
//
//
//
//
//
//
//
//
//
