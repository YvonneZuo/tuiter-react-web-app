// alert('Hello World!');
console.log('Hello again');

console.log("Variables and contants");
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped - blockScoped;

console.log(global1);
console.log(functionScoped);
console.log(blockScoped);
console.log(constant1);

console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;

console.log('Boolean Variables');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;
let sortaTrue = '1' == 1
let notTrue   = '1' === 1


console.log('If else');
if(true1) {
   console.log(true);
}

if(!false1) {
   console.log('!false1');
} else {
   console.log('false1');
}

console.log('Ternary conditional operator');
let loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting)

console.log('Legacy ES5 function')
function add (a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

console.log('New ES6 arrow functions');
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

const multiple = (a, b) => a * b;
const fourTimesFive = multiple(4, 5);
console.log(fourTimesFive);


const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
   functionScoped,
   blockScoped,
   constant1,
   numberArray1,
   stringArray1
];

const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);

// adding new items
numberArray1.push(6);
stringArray1.push('string3');

// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);

for (var i=0; i<stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);

const myArray1 = [1, 2, 3];
const myMapArray1 = myArray1.map(square);
const myMapArray2 = myArray1.map(a => a * a);
console.log(myMapArray1);
console.log(myMapArray2);

const four = numberArray1.find(a => a === 4);
const string3 = stringArray1.find(a => a === 'string3');

const fourIndex = numberArray1
   .findIndex(a => a === 4);
const string3Index = stringArray1
   .findIndex(a => a === 'string3');

const numbersGreaterThan2 = numberArray1
   .filter(a => a > 2);
const evenNumbers = numberArray1
   .filter(a => a % 2 === 0);
const oddNumbers = numberArray1
   .filter(a => a % 2 !== 0);

const five = 2 + 3;
const result1 = "2 + 3 =" + five;
console.log(result1);
const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greetings = `Welcome home ${username}`;
console.log(greetings);

LoggedIn = false;
const greetings2 = `Logged in: ${LoggedIn? "Yes": "No"}`;
console.log(greetings2);

const init = () => {
    console.log('Hello world from jQuery');
    /* do the rest of the lab work here */
 }
 $(init);

 const bindById = $(`#bind-by-id`);
 const bindByClass = $(`.bind-by-class`);
 console.log('Binding to DOM');
 console.log(bindById);
 console.log(bindByClass);

  const changeStyle = $('#change-style');
  const changeStyle2 = $('.change-style');

  console.log(changeStyle);
  changeStyle.css('color', 'red');
  changeStyle2.css('color', 'blue');

const getIdAttr = $('#get-id-attr');
const id = getIdAttr.attr('id');
console.log(id);

const setClassAttr = $("#set-class-attr");
const id2 = setClassAttr.attr('id')
console.log(id2)
setClassAttr.attr('class', 'class-0');

const addClass1Example = $("#add-class-1");
addClass1Example.addClass('class-1');

const removeClass1Example = $("#remove-class-1");
removeClass1Example.removeClass('class-2');


const hideMe = $('#hide-me');
hideMe.hide()

const showMe = $('#show-me');
showMe.show();

// const newLineItem = $("<li>Line item1</li>");
// const anotherLineItem = $('<li>Line item 2</li>');

const newLineItem = $("<li>Line item 1</li>");
const anotherLineItem = $("<li>Line item 2</li>");

const ul = $('#append-new-elements');
ul.append(newLineItem);
ul.append(anotherLineItem);

const removeLi = $('#remove-this');
removeLi.remove();

const emptyUl = $('#empty-this');
emptyUl.empty();

const changeThisText = $('#change-this-text');
const changeThisHtml  = $('#change-this-html');

changeThisText.html('New Text');
changeThisHtml.html(`
   <li>Line item A</li>
   <li>Line item B</li>
   <li>Line item C</li>
   `)

   const child2 = $("#child-2");
   const parent1 =
      child2.parents("#parent");
   parent1
      .css('background-color', 'red')
      .css('color', 'white');
      const parent = $("#parent");
      const child = parent.find("#child-2");
      child.css('background-color', 'blue')

   const handleClick =
() => console.log('Handle click');
const clickable = $('.clickable');
clickable.click(handleClick);

const handleEventTarget = (event) => {
   const target = event.target;
   console.log(target);
   $(target)
       .css('background-color', 'blue')
       .css('color', 'white');
}
const eventTarget = $("#event-target");
eventTarget.click(handleEventTarget);

let hideBtn, showBtn, hideShowHeader;
hideBtn = $('#hide');
showBtn = $('#show');
hideShowHeader = $('#hide-show');
const hideHandler = () => {
   hideShowHeader.hide();
}
const showHandler = () => {
   hideShowHeader.show();
}
hideBtn.click(hideHandler);
showBtn.click(showHandler);