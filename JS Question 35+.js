// JavaScript Questions
//1. Create a variable.js file and declare variables and assign string, boolean, undefined 
//and null data types, Display all the value with there type.
// let user = {
// 	name: "krishna",
// 	isgoogleLogin: true,
// 	mobNo: 76772630,
// 	experience: ""
// }
// console.log(user);
// console.log(user.name);
// console.log(`Hi my name is ${user.name} and mob no: ${user.mobNo}`);


//2. Declare variables to store your first name, last name, marital status, 
//country and age and display them using interploation method.

// var user = {
//     firstName: "Krishna",
//     lastName: "Kumar",
//     maritialStatus: "unmarried",
//     country: "India",
//     age: 23
// }
// console.log(`My name is: ${user.firstName} ${user.lastName} ${user.age} years old ${user.maritialStatus} living in ${user.country}`);



//3. Decalre a varibale and assign value to it and change all the string characters to 
//capital letters using toUpperCase() method.

// var user = {
//     firstName: "My name is krishna",
// }
// console.log(user.firstName.toUpperCase());




//4. Check if the string contains a word Script using includes() method.

// var check = "JavaScript is asynchronous language" ;
// console.log(check.includes("Script"));


//5. Split the string into an array using split() method

// const string = "I am a web developer";
// const see = string.split(" ");
// console.log(see);



//6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and 
//change it to an array.

// const string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// const string2 = string.split(", ");
// console.log(string2);


//7. Use lastIndexOf to determine the position of the last occurrence of a script.
// const string = "I am a web developer and a student";
// console.log(string.lastIndexOf("a"));

//8. Use search to find the position of the first occurrence of the word because in the following sentence:
//'You cannot end a sentence with because because because is a conjunction'.

// const sent = 'You cannot end a sentence with because because because is a conjunction';
// console.log(sent.search("because"));

//9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.

// const sent = '     You cannot end a sentence with because because because is a conjunction         ';
// console.log(sent.trim());
// console.log(sent.trimEnd());



// 10. Boolean value is either true or false.
//     - Write three JavaScript statement which provide truthy value.
//     - Write three JavaScript statement which provide falsy value.
// var ans = [2, 4, 7, "krishna"];

// var a = ans[0];
// var b = a + 5;
// console.log(a>b);
// console.log(a<b);
// console.log(ans[2]=1);
// console.log(ans[2]);
// console.log(ans>15);

// const ans2 = 4;
// console.log(ans2>2);

// 11. Figure out the result of the following comparison expression first without using console.log().
// After you decide the result confirm it using console.log()
//     - 4 > 3
// console.log(4>3);
//     - 4 >= 3
// console.log(4>=3);
//     - 4 < 3
// console.log(4<3);
//     - 4 <= 3
// console.log(4<=3);
//     - 4 == 4
// console.log(4==4);
//     - 4 === 4
// console.log(4===4);

//     - 4 != 4
// console.log(4 != 4); f
//     - 4 !== 4
// console.log(4 !== 4); f

//     - 4 != '4'
// console.log(4 != '4'); f
//     - 4 == '4'
// console.log(4 == '4'); t
//     - 4 === '4'
// console.log(4 === '4'); f

//     - Find the length of python and jargon and make a falsy comparison statement.

// const python = "python";
// console.log(python.length);
// const jargon = "jargon";
// console.log(jargon.length);
// if (python.length == jargon.length) {
// 	console.log("Have Same length");
// }else{
// 	console.log("Length not maching");
// }

// 12. Use the Date object to do the following activities
//     - What is the year today?
// let today = new Date;
// console.log(today.getFullYear());

//     - What is the month today as a number?
// console.log(today.getMonth());

//     - What is the date today?
// console.log(today.toLocaleDateString());

//     - What is the day today as a number?
// console.log(today.getDay());

//     - What is the hours now?
// console.log(today.getHours());

//     - What is the minutes now?
// console.log(today.getMinutes());

//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
// let today = new Date;
// let tSeconds = Math.round(today.getTime() / 1000);
// console.log(tSeconds);


// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area
// of a triangle (area = 0.5 x b x h).

// function areaOfTriangle(base, height){
// 	var area = 0.5 * base * height;
// 	console.log(area);
// }
// areaOfTriangle(5,4);

// 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)


// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2

// x-axis slop  = y/2 + 1;
// y-axis slop = 2 * x - 2;

// X-axis Slope
// function xAxis(y){
// 	let formula = y/2 + 1;
// 	console.log(formula);
// };
// xAxis(40);

// Y-axis Slope
// function xAxis(x){
// 	let formula = 2*x + 2;
// 	console.log(formula);
// };
// xAxis(40);


// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// function areaofcircle(r){
//     area = Math.PI * r * r;
// 	console.log(area);
// }
// areaofcircle("10");

// JavaScript Program To Calculate The Area of a Triangle
// var s = (a + b + c) / 2;
// var area = (Math.sqrt(s*(s-a)*(s-b)*(s-c)));

// function areaOfScaleneTriangle(a,b,c) {
// 	var s = (a + b + c) / 2;
// 	console.log(s);
// 	var area = (Math.sqrt(s*(s-a)(s-b)(s-c)));
// 	console.log(area);
// 	// return area;
// }
// consol.log(areaOfScaleneTriangle(2,4,6));
// areaOfScaleneTriangle(2,4,6);

// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

// let date = new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toGMTString());

// 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:
//'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of
// years he needs to turn 18.

// const age = 17;
// const check = age >= 18 ? "You are old enough to drive" : "wait for"+ " " + (18 - (age)) + " "+ "years";
// console.log(check);


// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even
// or not using JavaScript?

// function isEven(elem){
//     if(elem % 2 === 0){
// 		console.log("Even");
//     }else{
// 		console.log("Odd");
//     };
// };
// isEven(2);

// OR

// let numb = 5;
// let check = numb % 2 == 0 ? "Even Number" : "Odd number";
// console.log(check);


// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

// let marks = 39;

// if (marks >= 80){
//     console.log("Grade A");
// } else if (marks >= 70) {
//     console.log("Grade B");
// } else if (marks >= 60) {
//     console.log("Grade c");
// } else if (marks >= 50) {
//     console.log("Grade d");
// } else{
//     console.log("Grade f");
// }



// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

// function checkSeason(month){
// 	if(month === "sept"){
// 		console.log("This is Autumn Season");
// 	}else{
// 		console.log("This is Winter Season");
// 	};
// 	console.log(checkSeason("sept"));
// };
// checkSeason(sept);

// 22. Write a program which tells the number of days in a month.
// var date = new Date();
// var month = date.getMonth() + 1;
// var year = date.getFullYear();
// daysInMonth = new Date(year, month, 0).getDate();
// console.log(daysInMonth);


// 23. Write a program which tells the number of days in a month, now consider leap year.

// 24. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// 25. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// function checkCart(){
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// 	for(let i = 0; i < shoppingCart.length; i++){
// 		if(shoppingCart.includes("tea")){
// 			console.log("MATCH meat");
// 		}else{
// 			shoppingCart.unshift("Meat");
// 			console.log(shoppingCart);
// 		}
// 	}
// }
// checkCart();

// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// let countries = ["india", "japan", "usa", "china",];
// if(countries.includes("ethiopia")){
// 	console.log("ethiopia already exist");
// }else{
// 	countries.push("ethiopia")
// 	console.log("ethiopia added successfully");

// }
// console.log(countries);





// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

function sort(x, y){
  return x - y;
}
console.log(ages.sort(sort));
console.log(ages[0]);
let max = ages[ages.length -1];
console.log(max);

// console.log(Math.max(...ages));
// console.log(Math.min(...ages));

// const max = Math.max(...ages);
// const min = Math.min(...ages);
// const total = max + min;
// console.log(total);


//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
// 
let median = ages[Math.round(ages.length/2)];
console.log(median);

//     - Find the range of the ages(max minus min)
// var max = Math.max(...ages);
// var min = Math.min(...ages);
// var range = max - min;
// console.log(range);

//     - Compare the value of (min - average) and (max - average), use abs() method

// var min = Math.min(...ages);
// // console.log(min);
// var max = Math.max(...ages);
// // console.log(max);

// let sum = 0;
// for(let i = 0; i < ages.length; i++) {
//     sum += ages[i];
// }

// console.log(sum);
// var avg = sum/2;

// console.log(avg);

// var minavg = min - avg;
// console.log(minavg);

// var maxavg = max - avg;
// console.log(maxavg);



// 28. Use for loop to iterate from 0 to 100 and print only prime numbers
// let primeNumb = [];
// for(let i = 0; i <= 100; i++){
// if(i % 2 !== 0){
//   primeNumb.push(i);
// }
// }
// console.log(primeNumb);


// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let evenNumb = [];
// let oddTotal = 0;
// let evenTotal = 0;
// evenNumb = [];
// oddNumb = [];

// for(let i = 0; i <=100; i++){
//   if(i % 2 == 0){
//     evenNumb.push(i);
//     evenTotal = evenTotal + i;
//   }else{
//     oddNumb.push(i);
//     oddTotal = oddTotal + i;
//   }
// };
// let evenTotals = evenNumb.reduce((arr, elem) =>elem+arr);
// let oddTotals = evenNumb.reduce((arr, elem) =>elem+arr);


// console.log(evenTotal);
// console.log(oddTotal);
// console.log(evenTotals);
// console.log(oddTotals);



// 30. Write a script which generates a random hexadecimal number.

// let x = 1000;
// console.log(Math.floor(Math.random() * x).toString(16));


// 31. Sort the webTechs array and mernStack array
// // countries Array : https://gist.github.com/incredimike/1469814

// 32. Array Questions
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Find the country containing the hightest number of characters in the countries array
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Extract all the countries containing only four characters from the countries array and print it as array
//     - Extract all the countries containing two or more words from the countries array and print it as array
//     - Reverse the countries array and capitalize each country and stored it as an array
// const countryList = [
// 	"Afghanistan",
// 	"Albania",
// 	"Algeria",
// 	"American Samoa",
// 	"Andorra",
// 	"Angola",
// 	"Anguilla",
// 	"Antarctica",
// 	"Antigua and Barbuda",
// 	"Argentina",
// 	"Armenia",
// 	"Aruba",
// 	"Australia",
// 	"Austria",
// 	"Azerbaijan",
// 	"Bahamas (the)",
// 	"Bahrain",
// 	"Bangladesh",
// 	"Barbados",
// 	"Belarus",
// 	"Belgium",
// 	"Belize",
// 	"Benin",
// 	"Bermuda",
// 	"Bhutan",
// 	"Bolivia (Plurinational State of)",
// 	"Bonaire, Sint Eustatius and Saba",
// 	"Bosnia and Herzegovina",
// 	"Botswana",
// 	"Bouvet Island",
// 	"Brazil",
// 	"British Indian Ocean Territory (the)",
// 	"Brunei Darussalam",
// 	"Bulgaria",
// 	"Burkina Faso",
// 	"Burundi",
// 	"Cabo Verde",
// 	"Cambodia",
// 	"Cameroon",
// 	"Canada",
// 	"Cayman Islands (the)",
// 	"Central African Republic (the)",
// 	"Chad",
// 	"Chile",
// 	"China",
// 	"Christmas Island",
// 	"Cocos (Keeling) Islands (the)",
// 	"Colombia",
// 	"Comoros (the)",
// 	"Congo (the Democratic Republic of the)",
// 	"Congo (the)",
// 	"Cook Islands (the)",
// 	"Costa Rica",
// 	"Croatia",
// 	"Cuba",
// 	"Curaçao",
// 	"Cyprus",
// 	"Czechia",
// 	"Côte d'Ivoire",
// 	"Denmark",
// 	"Djibouti",
// 	"Dominica",
// 	"Dominican Republic (the)",
// 	"Ecuador",
// 	"Egypt",
// 	"El Salvador",
// 	"Equatorial Guinea",
// 	"Eritrea",
// 	"Estonia",
// 	"Eswatini",
// 	"Ethiopia",
// 	"Falkland Islands (the) [Malvinas]",
// 	"Faroe Islands (the)",
// 	"Fiji",
// 	"Finland",
// 	"France",
// 	"French Guiana",
// 	"French Polynesia",
// 	"French Southern Territories (the)",
// 	"Gabon",
// 	"Gambia (the)",
// 	"Georgia",
// 	"Germany",
// 	"Ghana",
// 	"Gibraltar",
// 	"Greece",
// 	"Greenland",
// 	"Grenada",
// 	"Guadeloupe",
// 	"Guam",
// 	"Guatemala",
// 	"Guernsey",
// 	"Guinea",
// 	"Guinea-Bissau",
// 	"Guyana",
// 	"Haiti",
// 	"Heard Island and McDonald Islands",
// 	"Holy See (the)",
// 	"Honduras",
// 	"Hong Kong",
// 	"Hungary",
// 	"Iceland",
// 	"India",
// 	"Indonesia",
// 	"Iran (Islamic Republic of)",
// 	"Iraq",
// 	"Ireland",
// 	"Isle of Man",
// 	"Israel",
// 	"Italy",
// 	"Jamaica",
// 	"Japan",
// 	"Jersey",
// 	"Jordan",
// 	"Kazakhstan",
// 	"Kenya",
// 	"Kiribati",
// 	"Korea (the Democratic People's Republic of)",
// 	"Korea (the Republic of)",
// 	"Kuwait",
// 	"Kyrgyzstan",
// 	"Lao People's Democratic Republic (the)",
// 	"Latvia",
// 	"Lebanon",
// 	"Lesotho",
// 	"Liberia",
// 	"Libya",
// 	"Liechtenstein",
// 	"Lithuania",
// 	"Luxembourg",
// 	"Macao",
// 	"Madagascar",
// 	"Malawi",
// 	"Malaysia",
// 	"Maldives",
// 	"Mali",
// 	"Malta",
// 	"Marshall Islands (the)",
// 	"Martinique",
// 	"Mauritania",
// 	"Mauritius",
// 	"Mayotte",
// 	"Mexico",
// 	"Micronesia (Federated States of)",
// 	"Moldova (the Republic of)",
// 	"Monaco",
// 	"Mongolia",
// 	"Montenegro",
// 	"Montserrat",
// 	"Morocco",
// 	"Mozambique",
// 	"Myanmar",
// 	"Namibia",
// 	"Nauru",
// 	"Nepal",
// 	"Netherlands (the)",
// 	"New Caledonia",
// 	"New Zealand",
// 	"Nicaragua",
// 	"Niger (the)",
// 	"Nigeria",
// 	"Niue",
// 	"Norfolk Island",
// 	"Northern Mariana Islands (the)",
// 	"Norway",
// 	"Oman",
// 	"Pakistan",
// 	"Palau",
// 	"Palestine, State of",
// 	"Panama",
// 	"Papua New Guinea",
// 	"Paraguay",
// 	"Peru",
// 	"Philippines (the)",
// 	"Pitcairn",
// 	"Poland",
// 	"Portugal",
// 	"Puerto Rico",
// 	"Qatar",
// 	"Republic of North Macedonia",
// 	"Romania",
// 	"Russian Federation (the)",
// 	"Rwanda",
// 	"Réunion",
// 	"Saint Barthélemy",
// 	"Saint Helena, Ascension and Tristan da Cunha",
// 	"Saint Kitts and Nevis",
// 	"Saint Lucia",
// 	"Saint Martin (French part)",
// 	"Saint Pierre and Miquelon",
// 	"Saint Vincent and the Grenadines",
// 	"Samoa",
// 	"San Marino",
// 	"Sao Tome and Principe",
// 	"Saudi Arabia",
// 	"Senegal",
// 	"Serbia",
// 	"Seychelles",
// 	"Sierra Leone",
// 	"Singapore",
// 	"Sint Maarten (Dutch part)",
// 	"Slovakia",
// 	"Slovenia",
// 	"Solomon Islands",
// 	"Somalia",
// 	"South Africa",
// 	"South Georgia and the South Sandwich Islands",
// 	"South Sudan",
// 	"Spain",
// 	"Sri Lanka",
// 	"Sudan (the)",
// 	"Suriname",
// 	"Svalbard and Jan Mayen",
// 	"Sweden",
// 	"Switzerland",
// 	"Syrian Arab Republic",
// 	"Taiwan",
// 	"Tajikistan",
// 	"Tanzania, United Republic of",
// 	"Thailand",
// 	"Timor-Leste",
// 	"Togo",
// 	"Tokelau",
// 	"Tonga",
// 	"Trinidad and Tobago",
// 	"Tunisia",
// 	"Turkey",
// 	"Turkmenistan",
// 	"Turks and Caicos Islands (the)",
// 	"Tuvalu",
// 	"Uganda",
// 	"Ukraine",
// 	"United Arab Emirates (the)",
// 	"United Kingdom of Great Britain and Northern Ireland (the)",
// 	"United States Minor Outlying Islands (the)",
// 	"United States of America (the)",
// 	"Uruguay",
// 	"Uzbekistan",
// 	"Vanuatu",
// 	"Venezuela (Bolivarian Republic of)",
// 	"Viet Nam",
// 	"Virgin Islands (British)",
// 	"Virgin Islands (U.S.)",
// 	"Wallis and Futuna",
// 	"Western Sahara",
// 	"Yemen",
// 	"Zambia",
// 	"Zimbabwe",
// 	"Åland Islands"
// ];

// let countryContaingLand = [];

// countryList.forEach(e => {
//   if(e.includes("land")){
//   countryContaingLand.push(e);
//   }
// });
// console.log(countryContaingLand);



// let h = 0;
// let Hindex;
// countryList.forEach(e => {
//   if(e.length > h){
//     Hindex = countryList.indexOf(e);
//     h = e.length;
//   }
// });
// console.log(h);


// let countryHaving4Char = [];
// countryList.forEach((e) => {
//   if(e.length == 4){
//     countryHaving4Char.push(e);
//   }
// })

// console.log(countryHaving4Char);



// let countryHaving2words = [];

// countryList.forEach((e) => {
//   if(e. includes(" ")){
//     countryHaving2words.push(e);
//   }
// })

// console.log(countryHaving2words);




// countryList.reverse()
// let reverseCountry = [];

// countryList.forEach((e) => {
//   reverseCountry.push(e.toUpperCase());
// })
//   console.log(reverseCountry);







// 33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
// Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20
// years old or older.Check if a person is underweight, normal, overweight or obese based the information given
// below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more
//
// function checkBmi(w,h){
// 	let formula = w / (h * h);
// 	let bmi = Math.round(formula);
// 	if(bmi > 18.5 && bmi < 24.9){
// 	    console.log("Normal");
// 	}else if (bmi > 25 && bmi < 29.9) {
// 	    console.log("Over Weight");
// 	}else if (bmi > 0 && bmi < 18.5) {
// 	    console.log("Under Weight");
// 	}else{
// 	    console.log("obese");
// 	};
// }
// checkBmi(60, 1.65);



// 34. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a
// linear equation, solveLinEquation.



// 35. Write a functions which checks if all items are unique in the array.

// let array = [1,3,25,6,8,3,16,15];
// let unique = arr.filter((curr, i, ar) => ar.indexOf(curr) === i);
// console.log(unique);









// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome,

//  totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is 
// a set of incomes and its description.

// const personAccount = {
// 	firstName: "Krishna",
// 	lastName: "Kumar",
// 	income: 60000,
// 	expense: 22000,

// 	function totalIncome(){
// 		return personAccount.(income + expense);
// 	};

// }
// ---
    // const users = [
    // {
    //     _id: 'ab12ex',
    //     username: 'Alex',
    //     email: 'alex@alex.com',
    //     password: '123123',
    //     createdAt:'08/01/2020 9:00 AM',
    //     isLoggedIn: false
    // },
    // {
    //     _id: 'fg12cy',
    //     username: 'Asab',
    //     email: 'asab@asab.com',
    //     password: '123456',
    //     createdAt:'08/01/2020 9:30 AM',
    //     isLoggedIn: true
    // },
    // {
    //     _id: 'zwf8md',
    //     username: 'Brook',
    //     email: 'brook@brook.com',
    //     password: '123111',
    //     createdAt:'08/01/2020 9:45 AM',
    //     isLoggedIn: true
    // },
    // {
    //     _id: 'eefamr',
    //     username: 'Martha',
    //     email: 'martha@martha.com',
    //     password: '123222',
    //     createdAt:'08/01/2020 9:50 AM',
    //     isLoggedIn: false
    // },
    // {
    //     _id: 'ghderc',
    //     username: 'Thomas',
    //     email: 'thomas@thomas.com',
    //     password: '123333',
    //     createdAt:'08/01/2020 10:00 AM',
    //     isLoggedIn: false
    // }
    // ];

// 

// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

// const userDetails = {
// 	firstName: [],
// 	lastName: "kumar",
// 	isLoggedIn: false,

// 	signup: function(firstName){
// 		if(this.isLoggedIn == true){
// 		this.firstName.push(firstName);
// 			console.log(`${userDetails.firstName} You have already an account`);
// 		}else{
// 		this.firstName.push(firstName);
// 		console.log(`Account created: ${userDetails.firstName}`);
// 		}
// 	}
// }
// userDetails.signup("krishna");



// b. Create a function called signIn which allows user to sign in to the application


// 3. The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b.
//  Create a function called averageRating which calculate the average rating of a product

	// const products = [
	// 	{
	// 		_id: 'eedfcf',
	// 		name: 'mobile phone',
	// 		description: 'Huawei Honor',
	// 		price: 200,
	// 		ratings: [
	// 		{ userId: 'fg12cy', rate: 5 },
	// 		{ userId: 'zwf8md', rate: 4.5 }
	// 		],
	// 		likes: []
	// 	},
	// 	{
	// 		_id: 'aegfal',
	// 		name: 'Laptop',
	// 		description: 'MacPro: System Darwin',
	// 		price: 2500,
	// 		ratings: [],
	// 		likes: ['fg12cy']
	// 	},
	// 	{
	// 		_id: 'hedfcg',
	// 		name: 'TV',
	// 		description: 'Smart TV:Procaster',
	// 		price: 400,
	// 		ratings: [{ userId: 'fg12cy', rate: 5 }],
	// 		likes: ['fg12cy']
	// 	}
	// 	]
	// -----
	// function rating(userId, rate) {
	// 	this.products[1].push;
		
	// }
	// rating("eftshb", 4);
	// console.log(products[1]);
	// console.log(products);

// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
// let isLiked = false;
// for(let i = 0; i < products.length; i++){
// 	if(isLiked == true){
// 				console.log("Already liked");
// 			}else{
// 				products.push(isLiked);
// 				console.log("you Pressed like");
// 			}
// products.push(isLiked);
// console.log(products);
// }

// function likeProduct(){
// 	if(isLiked == true){
// 		console.log("Already liked");
// 	}else{
// 		console.log("you Pressed like");
// 	}
// }
// likeProduct();

// ---
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]
// ---
// - Explain the difference between forEach, map, filter, and reduce.
// - Define a callback function before you use it in forEach, map, filter or reduce.
// - Use forEach to console.log each name in the names array.

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// names.forEach((elem,index,arr) => {
// 		console.log(elem);
// 	})


// - Use forEach to console.log each country in the countries array.
// countries.forEach((elem,index,arr) => {
// 			console.log(elem);
// 		})

// - Use forEach to console.log each number in the numbers array.
// number.forEach((elem,index,arr) => {
	// 		console.log(elem);
	// 	})

// - Use map to create a new array by changing each country to uppercase in the countries array.
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
// let newCountry = [];
// countries.map((elem) => {
// 	newCountry.push(elem.toUpperCase());
// })
// console.log(newCountry);

// - Use map to create an array of countries length from countries array.
// let countriesLength = [];
// countries.map((i) => {
//   countriesLength.push(i.length);
// 	console.log(i.length);
	// console.log(countriesLength);
// })

// - Use map to create a new array by changing each number to square in the numbers array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNumber = [];

// numbers.map((elem) => {
// 	newNumber.push(elem*elem)
// })
// console.log(newNumber);

// - Use map to change to each name to uppercase in the names array
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// names.map((e)=> {
// 	console.log(e.toUpperCase());
// })
// console.log(names);

// - Use map to map the products array to its corresponding prices.

// - Use filter to filter out countries containing land.


// })
// - Use filter to filter out countries having six character.
// - Use filter to filter out countries containing six letters and more in the country array.
// - Use filter to filter out country start with 'E';
// - Use filter to filter out only prices with values.
// - Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

// - Use reduce to sum all the numbers in the numbers array.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = numbers.reduce((arr, elem) => arr + elem, 0);
// console.log(sum);

// - Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
// let newCountry = countries.reduce((arr, elem) => arr + elem);
// console.log(`Estonia, ${newCountry} are north European countries`);

// - Explain the difference between some and every
// every() method in JavaScript is used to check whether all the elements of the array satisfy the given condition or not.
// Where as some() method in JavaScript is used to check whether at least one of the elements of the array satisfies the given condition or not.

// - Use some to check if some names' length greater than seven in names array
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// names.map((i) => {
// 	console.log(i.length);
// 	console.log(names);
// })

// - Use every to check if all the countries contain the word land


// - Explain the difference between find and findIndex.
// Find() will return the value of the first element based on the provided condition and returns undefined if none of the elements passed the condition.
// FindIndex() will return the index of the first element based on the condition and returns -1 if none of the elements passed the condition.

// - Use find to find the first country containing only six letters in the countries array
// - Use findIndex to find the position of the first country containing only six letters in the countries array
// - Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// - Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

// ---
// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]
// const countries = ['Finland', 'Sweden', 'Norway']
// ---
// - create an empty set
// - Create a set containing 0 to 10 using loop
// let numb = [];
// for(i = 0; i<= 10; i++){
// 	numb.push(i)
// }
// console.log(numb);

// - Remove an element from a set
// numb.pop();
// console.log(numb);

// - Clear a set
// - Create a set of 5 string elements from array
// - Create a map of countries and number of characters of a country

// ---
// const constants = [2.72, 3.14, 9.81, 37, 100]
// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60
// }
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
// ---

// - Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
// let arr = [2.14, 3.14, 9.8, 37, 100];
// let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = arr;

// console.log(gravity);

// - Destructure and, assign the elements of countries array to fin, est, sw, den, nor
// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
// let [fin, est, sw, den, nor] = countries;
// console.log(fin);

// - Destructure the rectangle object by its properties or keys.
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60
// }
// 

// - Iterate through the users array and get all the keys of the object using destructuring
// console.log(`key of ${users}`);

// - Find the persons who have less than two skills
// users.filter((i) => {
//   for(let i = 0; i < users.length; i++){
//   console.log(users[i].skills.length);
//     }
// });


// ---

// - Create a closure which has one inner function
// function outer(){
//   console.log("I am Outer Function");
//   function inner(){
//     console.log("I am Inside Outer Function (Inner Function)");
//   }
// inner();
// }
// outer();

// - Create a closure which has three inner functions
// function outer(){
//   console.log("I am Outer Function");
//   function first(){
//     console.log("I am First Function");
//   }
//   function second(){
//     console.log("I am Second Function");
//   }
//   function third(){
//     console.log("I am Third Function");
//   }

// first();
// second();
// third();
// }
// outer();






