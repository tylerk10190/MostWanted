"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
let people = data

function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      var foundPerson = searchByName(people);
      mainMenu(foundPerson, people);
      break;
    case 'no':
      // TODO: search by traits
      otherMainMenu()
      // promptFor(, userInput).toLowerCase();
      break;
      default:
    app(people); // restart app
      break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function otherMainMenu(poeple){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  // if(!person){
  //   alert("Could not find that individual.");
  //   return app(people); // restart
  //   }

  let userInput = prompt("Enter search criteria from list: Gender, Age, Height, Weight, Eye Color, Occupation").toLowerCase()
  switch(userInput){
     case "gender":
    // TODO: get person's info
      userInput = prompt("Enter: Male or Female").toLowerCase()
        if(userInput == "male")
        {
         let males = people.filter(function (el)
         {
            if(el.gender == "male")
              console.log(el.firstName + " " + el.lastName)
            return males;

         })
         // console.log("male")
        }
        else if(userInput == "female")
        {
          let females = people.filter(function (el)
          {
            if(el.gender == "female")
              console.log(el.firstName + " " + el.lastName)
            return females;
          })
          // console.log("female")
        }
        else
        {
         alert("Please enter an option from the list")
        }
      break;
    case "age":
    // TODO: get person's family
    prompt("Enter a numerical value for Age")
    console.log(people[1].dob)
    break;
    case "height":
    // TODO: get person's descendants
    userInput = prompt("Please enter the height in inches")
      let height = people.filter(function(el)
      {
        if(el.height == userInput){
          console.log(el.firstName + " " + el.lastName)
        }
      })
    // console.log("height")
    break;
    case "weight":
      prompt()
    console.log("weight")
    break;
    case "eye color":
    console.log("eye color")
    break; // stop execution
    case "occupation":
    console.log("occupation")
    break;
    case "flamingo":
    alert("Fuck off Nevin!")
    return otherMainMenu()
    case "bannana":
    alert("Fuck off Nevin!")
    return otherMainMenu()
    default:
    alert("Please choose an criteria from the list")
    return otherMainMenu(); // ask again
  }
  }


function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  var foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}



