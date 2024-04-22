"use strict";
//Task 01.
//Install Node.js, TypeScript and VS Code on your computer.
//Node.js install on your computer.
let Node_js = "node -version 20.11";
console.log(Node_js); //print value
//Typescript install on your computer.
let Type_script = "tsc -version 5.3.3";
console.log(Type_script); //print value
//Vscode install on your computer.
let Vs_code = "Version 1.86..2";
console.log(Vs_code); //print value
//Three software intall on your computer. 
//Task 02.
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let Name = "Eric";
console.log(`Hello ${Name} , would you like to learn some python today?`);
//Task 03.
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//lower case.
let personName = "Hasnain";
console.log("lowercase:", personName.toLowerCase());
//Uppercase.
console.log("uppercase:", personName.toLocaleUpperCase());
//Title case.
console.log("titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
//Task 04.
//Famous Quote: Find a quote from a famous=== person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("Albert Einstein once said,\" A person who never made a mistake never tried anything new.\"");
//Task 05.
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let quote = "A person who never made a mistake never tried anything new ";
let famous_person = "Albert Einstein";
let message = `${famous_person} once said, ${quote}`;
console.log(message);
//Task 06.
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let PersonName = "\t\n hasnain \n\t";
console.log("Name with whitespace:" + personName);
console.log("Name after stripping whitespace:", +personName.trim());
//Task 07.Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//Task 08.You should create four lines that look like this:
console.log(5 + 3);
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log(2 + 6);
console.log(4 + 4);
console.log(1 + 7);
console.log(8 + 0);
//Task 09.Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favourite_number = 56;
console.log(`My favourite number is ${favourite_number}.`);
//Task 10.Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
let person_Name = "hasnainalvi";
console.log(person_Name.toLowerCase());
console.log(person_Name.toUpperCase());
console.log(person_Name.charAt(0).toUpperCase() + person_Name.slice(1).toLowerCase());
//Task 11.Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let names = ["hasnain", "haider", "alvi"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Task 12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
//store the array of exercise 11.
let friendsName = ["hasnain", "haider", "alvi"];
//print the same message to each person.
friendsName.forEach(friendsName => console.log(`Hey ${friendsName},How are you?`));
//Task 13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
//store favourite mode of transportation in an array.
let transportationMode = ["car", "bike", "train", "bus"];
//print a series of statements about these items.
transportationMode.forEach(node => console.log(`i would like to own a ${transportationMode}`));
//Task 14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guests = ["aley", "rohul", "imran", "zain"];
guests.forEach(guests => {
    console.log(`dear ${guests}!you are invited to a birthday extracvaganz a! be a part of the festivities as we celebrate azeem's special day in style.`);
});
//Task 15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let unabletoattend = "zain";
console.log(`${unabletoattend}can't make it to birthday extravaganza.`);
//new invitation
//replace the guest
let newguest = "hassan";
guests[guests.indexOf(unabletoattend)] = newguest;
guests.forEach(guests => {
    console.log(`dear ${guests}!you are invited to a birthday extracvaganz a! be a part of the festivities as we celebrate azeem's special day in style.`);
});
//Task 16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//guest list
let guestlist = ["aley", "rohul", "imran", "zain"];
let dontcome = guestlist[0];
console.log(dontcome, "nhi aasakty hn");
guestlist.splice(0, 1, "hassan");
console.log("good news! we have found a bigger table for dinner");
guestlist.unshift("alvi");
guestlist.push("zain");
let middleindex = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, "hassan");
console.log("updated list of our guests");
guestlist.forEach(oneguest => console.log(`salam ${oneguest},would you like to dinner with me`));
//Task 17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("unfortunately,i can only invite two person for dinner ");
while (guests.length > 2) {
    let removedguest = guests.pop();
    console.log(`sorry,${removedguest},i cant invite you to dinner.`);
}
guests.forEach(guests => {
    console.log(`dear ${guests},youre still invited to dinner.`);
});
guests.splice(0, guests.length);
console.log(guests);
//show an empty list.
//Task 18.Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let places = ["pakistan", "germany", "iran", "france", "egypt"];
console.log("orignal order:", places);
console.log("alphabetical order:", [places].sort());
console.log("orignal order:", places);
console.log("reverse alphabetical order:", [places].sort().reverse());
console.log("orignal order:", places);
places.reverse();
console.log("reverse order :", places);
places.reverse();
console.log("orignal order:", places);
places.sort();
console.log("alphabetical order:", places);
places.reverse();
console.log("reverse alphabetical order :", places);
//Task 19.
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let Guests = ["aley", "rohul", "imran", "zain"];
console.log(`i am inviting${Guests.length}people for dinner.`);
//Task 20.
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let lanuages = ["Arabic", "Urdu", "English", "Hindi", "Balochi", "Sindhi", "Punjabi"];
console.log(lanuages);
let itcourse = {
    coursename: "typescipt and javascript",
    Location: "governor house karachi",
    onsitestudent: "50000",
};
console.log(itcourse);
//Task 22.
//Intentional Error: If you haven’t received an array index error in one of your
//programs yet, try to make one happen. Change an index in one of your programs 
//to produce an index error. Make sure you correct the error before closing the 
//program.
let errorArray = ["a", "b", "c", "d"];
//producing error !by  accessing invalid index of array.
//console.log(errorArray[10]);
//error removed.
console.log(errorArray[1]);
//Task 23.
//Conditional Tests: Write a series of conditional tests. Print a statement 
//describing each test and your prediction for the results of each test. Your
//code should look something like this:
let car = 'civic';
console.log("is car== 'civic'? i predict true");
console.log(car == 'civic');
console.log("is car !='corolla'? i predict true");
console.log(car != 'corolla');
console.log("is car == 'civic'? i predict false");
console.log(car == 'civic');
console.log("is car =='CIVIC'? i predict false");
console.log(car == 'CIVIC');
console.log("is car.length == 5? i predict true");
console.log(car.length == 5);
console.log("is car .length ! == 12? i predict true");
console.log(car.length == 12);
console.log("is 55 >54? i predict false");
console.log(55 > 54);
console.log("is 34<=9? i predict false");
console.log(34 <= 9);
console.log("is 1<=11? i predict false");
console.log(1 <= 11);
console.log("is car =='civic'&& car.length == 5? i predict true");
console.log(car == 'civic' && car.length == 5);
//Task 24.
//More Conditional Tests: You don’t have to limit the number of tests you create 
//to 10. If you want to try more comparisons, write more tests. Have at least one 
//True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
// Tests for equality and inequality with strings
let fruit1 = "Apple";
let fruit2 = "Banana";
console.log("Tests for equality and inequality with strings:");
console.log(fruit1 == fruit2); //is fruit1 is equal to fruit2?  //false
console.log(fruit1 != fruit2); //is fruits1 is not equal to fruit2? //true
//Tests using the lower case function:
let myName = "Zija Yaseen";
console.log("\nTests using the lower case function:");
console.log(myName.toLowerCase() == "zija yaseen"); //true
console.log(myName.toLowerCase() == "Zija Yaseen"); //false
console.log(myName == "Zija Yaseen".toLowerCase()); // false
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let nmb = 10;
console.log("\nNumerical tests:");
console.log(nmb == 10); //true
console.log(nmb === 15); //false
console.log(nmb != 20); //true
console.log(nmb != 10); //false
console.log(nmb > 9); //true
console.log(nmb > 15); //false
console.log(nmb > 10); //false
console.log(nmb < 20); //true
console.log(nmb < 8); //false
console.log(nmb < 10); //false
console.log(nmb <= 10); //true
console.log(nmb <= 2); //false
console.log(nmb >= 9); //true
console.log(nmb >= 11); //false
//Tests using "and" and "or" operators:    && and , || or;
/* LOGICAL OPERATORS:
Logical operators are used to combine multiple conditions in one.

&& : when all conditions are true so it shows true but if any one condition is wrong it shows false.
|| : when any one condition is true in all conditions , it shows true.
*/
let b = 4;
console.log("\nTests using 'and' and 'or' operators:");
console.log(b != 4 && b > 3); // false
console.log(b < 5 && b > 3); // true
console.log(b >= 10 || b < 3); //false
console.log(b <= 10 || b > 10); //true
console.log(!(b > 10)); //its called opposite condition bcz it shows answers in oppsite.(true)
console.log(!(b < 10)); //false
//Test whether an item is in a array:
let stationary = ['Pencil', 'Eraser', 'Ink Pen', 'Sharpner', 'Scale'];
console.log("\nTest whether an item is in a array:");
//console.log(stationary.includes("Eraser")); // true
console.log(stationary.indexOf('Pencil') !== -1); //true
//Test whether an item is not in a array:
console.log("\nTest whether an item is not in a array:");
//console.log(stationary.includes("Marker")); //false
console.log(stationary.indexOf("Ink pen remover") !== -1); //false
//Task 25.
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable
// called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message
// that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The
// version that fails will have no output.)
// version 01.passes the if test (alien_color is 'green')
let alien_color_pass = "green";
if (alien_color_pass === "green") {
    console.log("player just earned 5 points");
}
// version 02.fails the if test (alien_color is 'yellow') 
let alien_color_fail = "yellow";
if (alien_color_fail === "green") {
    console.log("player just earned 5 points");
}
//Task 26.
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an
// if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for
// shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else
// block.
//version 01 runs the if block (alien color is 'green')
let alien_color_if = "green";
if (alien_color_if === "green") {
    console.log("player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 points for shooting the alien");
}
//version 02 runs the else block (alien color is 'red')
let alien_color_else = "red";
if (alien_color_else === 'green') {
    console.log("player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 points for shooting the alien");
}
//Task 27.
//27.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for 
//the appropriate color alien.
//*/
// Version 1: Green alien
let alien_color_1 = 'green';
if (alien_color_1 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color_1 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color_1 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
// Version 2: Yellow alien
let alien_color_2 = 'yellow';
if (alien_color_2 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color_2 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color_2 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
// Version 3: Red alien
let alien_color_3 = 'red';
if (alien_color_3 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color_3 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color_3 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
//Task 28.
//28.Stages of Life: Write an if-else chain that determines a person’s stage of life.
//Set a value for the variable age, and then:
//•If the person is less than 2 years old, print a message that the person is a baby.
//•If the person is at least 2 years old but less than 4, print a message that the
//person is a toddler.
//•If the person is at least 4 years old but less than 13, print a message that the
//person is a kid.
//•If the person is at least 13 years old but less than 20, print a message that 
//the person is a teenager.
//•If the person is at least 20 years old but less than 65, print a message that
//the person is an adult.
//•If the person is age 65 or older, print a message that the person is an elder.
//*/
let age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//Task 29.
// Favorite Fruit: Make a array of your favorite fruits, 
// and then write a series of independent if statements that check for certain fruits in your array.
let favorite_fruits = ["banana", "apple", "orange"];
if (favorite_fruits.indexOf("banana") !== -1) {
    console.log("You really like bananas!");
}
if (favorite_fruits.indexOf("apple") !== -1) {
    console.log("You really like apples!");
}
if (favorite_fruits.indexOf("orange") !== -1) {
    console.log("You really like oranges!");
}
if (favorite_fruits.indexOf("grape") !== -1) {
    console.log("You really like grapes!");
}
if (favorite_fruits.indexOf("kiwi") !== -1) {
    console.log("You really like kiwis!");
}
//Task 30.
//30.Hello Admin: Make a array of five or more usernames, including the name 'admin'.
//Imagine you are writing code that will print a greeting to each user after they 
//log in to a website. Loop through the array, and print a greeting to each user:
//•If the username is 'admin', print a special greeting, such as Hello admin, would 
//you like to see a status report?
//•Otherwise, print a generic greeting, such as Hello Eric, thank you for logging 
//in again.
// Array of usernames
const usernames = ["admin", "Eric", "Alvi", "hassan", "imran"];
for (const username of usernames) {
    if (username.toLowerCase() === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
//Task 31.
//31.No Users: Add an if test to Exercise 30 to make sure the list of users is not 
//empty.
//•If the list is empty, print the message We need to find some users!
//•Remove all of the usernames from your array, and make sure the correct message
//is printed.
const users = ["admin", "Eric", "Ali", "wali", "aley"];
if (users.length > 0) {
    for (const username of users) {
        if (username.toLowerCase() === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
//exercise_31
else {
    console.log("We need to find some users!");
}
users.length = 0;
if (users.length === 0) {
    console.log("The list of users is empty now.");
}
//Task 32.
//32.Checking Usernames: Do the following to create a program that simulates how
//websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of
//the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been
//used. If it has, print a message that the person will need to enter a new username.
//If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' 
//should not be accepted
// List of current users
const current_users = ["Ali", "Wali", "Aley", "Hassan", "Imran"];
// List of new users
const new_users = ["asif", "kazim", "moosa", "Ali", "Imran"];
for (const newUsername of new_users) {
    const isUsernameTaken = current_users.some((currentUsername) => currentUsername.toLowerCase() === newUsername.toLowerCase());
    // Printing a message based on whether the username is taken or available
    if (isUsernameTaken) {
        console.log(`The username '${newUsername}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username '${newUsername}' is available.`);
    }
}
//Task 33.
//33.Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 
//st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each 
//number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each 
//result should be on a separate line.
const _numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of _numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
//Task 34.
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza 
//names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of
//printing just the name of the pizza. For each pizza you should have one line of 
//output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much
//you like pizza. The output should consist of three or more lines about the kinds
//of pizza you like and then an additional sentence, such as I really love pizza
const favoritePizzas = ['beaf', 'Tikka', 'BBQ Chicken'];
for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log('I really love pizza!');
//Task 35.
//Animals: Think of at least three different animals that have a common characteristic.
const commonAnimals = ['Dog', 'Cat', 'Rabbit'];
for (const animal of commonAnimals) {
    console.log(`A ${animal} would make a great pet.`);
}
console.log('Any of these animals would make a great pet.');
;
;
;
//Task 36.
//T-Shirt: Write a function called make_shirt() that accepts a size and the text
//of a message that should be printed on the shirt. The function should print a
//sentence summarizing the size of the shirt and the message printed on it. Call
//the function
function make_shirt(size, message) {
    console.log(`The shirt is ${size} size and has the message: "${message}".`);
}
make_shirt("Large", "Hello, World!");
//Task 37.
//Large Shirts: Modify the make_shirt() function so that shirts are large by
//default with a message that reads I love TypeScript. Make a large shirt and a 
//medium shirt with the default message, and a shirt of any size with a different 
//message.
function Make_shirt(size = "Large", message = "I love TypeScript") {
    console.log(`The shirt is ${size} size and has the message: "${message}".`);
}
Make_shirt();
Make_shirt("Medium");
Make_shirt("Small", "Different message");
//Task 38.
//38.Cities: Write a function called describe_city() that accepts the name of a city 
//and its country. The function should print a simple sentence, such as Karachi is 
//in Pakistan. Give the parameter for the country a default value. Call your function
//for three different cities, at least one of which is not in the default country.
function describe_city(city, country = "Default Country") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi", "Pakistan");
describe_city("Paris", "France");
describe_city("Tokyo");
//Task 39.
//City Names: Write a function called city_country() that takes in the name of a city and its country
// . The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `${city},${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
//Task 40.
//Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a 
// Object containing these two pieces of information. Use the
// function to make three dictionaries representing different albums. 
// Print each return value to show that Objects are storing the album information correctly. 
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
//  If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//  Make at least one new function call that includes the number of tracks on an album.
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Elbert", "Album title 1");
console.log(album1);
let album2 = make_album("Alixa", "Album title 2");
console.log(album2);
let album3 = make_album("Tesla", "album title 3");
console.log(album3);
//Task 41.
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
let magician = ["Ali", "moosa", "don"];
function show_magicians(magician) {
    magician.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magician);
//Task 42.
// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the 
// Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let Magician = ["Ali", "moosa", "don"];
function Show_magicians(magician) {
    magician.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magician);
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] =
            magicians[i] + "the great";
    }
}
make_great(magician);
show_magicians(magician);
//Task 43.
// Unchanged Magicians: Start with your work from Exercise 40.
//  Call the function make_great() with a copy of the array of magicians’ names. 
//  Because the original array will be unchanged, return the new array and store it in a separate array. 
//  Call show_magicians() with each array to show that you have one array of the original names and one array with the Great 
//  added to each magician’s name.
function showmagicians(Magicians) {
    for (const magician of Magicians) {
        console.log(magician.charAt(0).
            toUpperCase() + magician.slice(1));
    }
}
function make_great2(Magicians) {
    const greatMagicians = [];
    for (let i = 0; i < Magicians.length; i++) {
        greatMagicians.push(Magicians[i] + 'the Great');
    }
    return greatMagicians;
}
const Magicians3 = ["Ali", "moosa", "don"];
const greatMagicians2 = make_great2(Magicians3);
show_magicians(Magicians3);
show_magicians(Magicians3);
show_magicians(greatMagicians2);
//Task 44.
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times,
// using a different number of arguments each time.
function sandwich(...items) {
    console.log("Sandwich ingredients:");
    for (let i = 0; i < items.length; i++) {
        console.log(` - ${items[i]}`);
    }
}
console.log("Take your delicious sandwich  Ayesha Nadeem");
sandwich('Tomatoes', 'Ketchup', 'Chicken');
sandwich('Cheese', 'Mayonnise', 'Garlic Chicken');
sandwich('Lettuce', 'Butter', 'Eggs', 'Ketchup');
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const myCar = createCar('', 'BMW', { color: "Black", year: "2024" });
console.log(myCar);
//The End//
