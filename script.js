// take in a single number and store it

console.log("Connected!");

let user_input = []; // array to store result and user input

let input_field_val; // variable to store last user input

// Function which will save the user inputed number
function takeInNumber(e){

console.log(user_input);


  // getting user input
 clicked_btn = document.getElementById(e.id).value;

 // getting user digts user alread troed in
 input_field_val =  document.getElementById("input_field").value;

 // adding digits to user input
 document.getElementById("input_field").value = input_field_val + clicked_btn;

 // Saving all in the input_field_val
 input_field_val =  document.getElementById("input_field").value;

}


// varibale to store the operator
let operator_input;

// counter to check if result needs to be found
let count = 0;

// take in an oprator (+ - / *) for the operation
function operator(e){

  // if counter is one then find the result
  if(count == 1){
    findResult();
    count++;
  }


  // gets user input (operator)
  operator_input = document.getElementById(e.id).value;

  // adds previous user input to the array
  user_input.push(input_field_val);

  console.log(user_input);


  console.log(operator_input);


  // if count is 1 then it finds the result
  if(count == 1){
    findResult(); //calling function find result
  }
  else{
    count++; // increasing count
  }

  //clearing input field
  cleary()

}

let result;

// take the first stored value and the second number in the display field and perform the math operation
function findResult(){

// adding user input to the array
user_input.push(input_field_val);

console.log("User input findResult 1 - " + user_input);
console.log("Operator1 - " + operator_input);


// parsing string to float
let first = parseFloat(user_input[0]);
let second = parseInt(user_input[1]);

switch (operator_input) {
  case "+":
    result = first + second;
    break;
  case "-":
    result = first - second;
    break;
  case "*":
    result = first * second;
    break;
  case "/":
    result = first / second;
    break;

}

  //Setting input field with result
  document.getElementById("input_field").value = result;

  console.log("Result - " + result);
  console.log("First - " + first);
  console.log("Operator - " + operator_input);
  console.log("Second - " + user_input[1]);

  user_input = [];
  
  user_input.push(result);
  count = 0;

  console.log("Result2 - " + user_input);

result = 0;

}

// clear the display field
function cleary(){
  document.getElementById("input_field").value = "";
}
