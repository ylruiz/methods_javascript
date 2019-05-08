/*
 * Declare the variables in javascript involves creating a variable 
 * and giving it a name.
 * 
 * (the same that in the rest of the programming languagues)
 * 
 * The syntax is the following: VARIABLE KEYWORD + VARIABLE NAME;
 * 
 * The VARIABLE KEYWORD can be var, const or let.
 * 
 * The VARIABLE NAME is sometimes called an indentifier.
 * 
 * If a variable name is more that one word, it is usually written 
 * in camelCase. This means that the first word is all lowercase and 
 * any subsequent words have their first letter capitalized.
 */

/*
 * Once you have created a variable, you can assign a value 
 * to the variable. This means that you can tell it what 
 * information you would like it to store for you. 
 * 
 * The syntax to do it is: VARIABLE NAME + ASSIGNMENT OPERATOR(=) + VARIABLE VALUE;
 * 
 * Until you have asigned a value to a variable, the value is undefined.
 * 
 * The scope of a variable depends where the variable is declared.
 * 
 * JavaScript distinguishes between numbers, strings, and true or false values 
 * knows as booleans. It also has others(arrays, objects, undefined, and null).
 */

const today = new Date();
const hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

/*
 * The document object represents the entire webpage.
 * 
 * All web browsers implement this object and you can
 * use it just by giving its name. 
 * 
 */

/*
 * The document object has several methods and properties.
 * They are knows as members of that object.
 * 
 * You can access a member of an object using a dot between
 * the object name and the member you want to access. 
 * 
 * It is called a member operator.
 */

/*
 * The write() method of a document object allows new content 
 * to be written into the page where <script> element sits.
 */

/*
 * Whenever a method requires some information in order to work,
 * the data is given inside the parentheses.
 * 
 * Each piece of information is called a paramether of the method.
 * In this case, the write() method needs to know what to write 
 * into the page.
 */

document.write('<h3>' + greeting + '</h3>');