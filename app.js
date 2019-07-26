"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
// let people = data;

function app(people){
  let searchType = prompt("Do you know the name of the person you are looking for? Enter 'yes' or 'no'").toLowerCase();
  switch(searchType){
    case 'yes':
      var foundPerson = searchByName(people);
      mainMenu(foundPerson, people);
      break;
    case 'no':
      otherMainMenu(people)
      break;
      default:
    app(people); // restart app
      break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person)
  {
    alert("Could not find that individual.");
    return app(people); // restart
  }
  // let displayOption = searchResult
  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    displayPersonInfo(person)
    break;
    case "family":
    // TODO: get person's family
    displayPersonFamily(person)
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

function otherMainMenu(people)
{

  let userInput = prompt("Enter search criteria from list: Gender, Age, Height, Weight, Eye Color, Occupation").toLowerCase()
  switch(userInput)
  {
    case "gender":
    searchByGender(people)
    break;
    case "age":
    // dobToAge(people)
    break;
    case "height":
    searchByHeight(people)
    break;
    case "weight":
     searchByWeight(people)
    break;
    case "eye color":
    searchByEyeColor(people)
    break;
    case "occupation":
    searchByOccupation(people)
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

function searchByGender(people)
{
  let userInput = prompt("Enter: Male or Female").toLowerCase()
        if(userInput == "male")
        {
         let males = people.filter(function (el)
         {
            if(el.gender == "male"){
              console.log(el.firstName + " " + el.lastName)
            
            return true;
          }
          else{
            return false;
          }

         })
        }
        else if(userInput == "female")
        {
          let females = people.filter(function (el)
          {
            if(el.gender == "female"){
              console.log(el.firstName + " " + el.lastName)
            
               return true;
          }
          else{
            return false;
          }
          })
          
        }
        else
        {
         alert("Please enter an option from the list")
        }
}

function searchByHeight(people)
{
  let userInput = prompt("Please enter the height in inches")
      let height = people.filter(function(el)
      {
        if(el.height == userInput)
          {
          console.log(el.firstName + " " + el.lastName)
          return true;
          }
        else
          {
            return false;
          }
      })
}

function searchByWeight(people)
{
  let userInput = prompt("Please enter the weight")
      let weight = people.filter(function(el)
      {
        if(el.weight == userInput)
        {
          console.log(el.firstName + " " + el.lastName)
          return true;
        }
        else
        {
          return false;
        }
      })
}

function searchByEyeColor(people)
{
   let userInput = prompt("Please enter eye color").toLowerCase()
      let eyeColor = people.filter(function(el)
      {
        if(el.eyeColor == userInput)
        {
          console.log(el.firstName + " " + el.lastName)
          return true;
        }
        else
        {
          return false;
        }
      })
}

function searchByOccupation(people)
{
  let userInput = prompt("Please enter occupation").toLowerCase()
      let occupation = people.filter(function(el)
      {

        if(el.occupation == userInput)
        {
          console.log(el.firstName + " " + el.lastName)
          return true;
        }
        else
        {
          return false;
        }
      })
}

function searchByName(people){
  var firstName = prompt("What is the person's first name?");
  var lastName = prompt("What is the person's last name?");
  let foundPeoples = people.filter(function(el){
    if(el.firstName.toLowerCase() === firstName && el.lastName.toLowerCase() === lastName){
      return true;
    }
    else
    {
      return false;
    }
  });
 
if (foundPeoples.length > 1) {


  return null;
}

 return foundPeoples[0];


}
// searchByName(people);
        // let elAge = dobToAge(el.dob);

function dobToAge(people)
{

  let testDate = new Date();

let userInput = prompt("Please enter D.O.B (format mmddyyyy)")
  // let today = people.parse(dob) 
  // let minutes = 1000 * 60;
  // let hours = minutes * 60;
  // let days = hours * 24;
  // let years = days * 365;
  let years = userInput
  let ageInYears = Math.round(testDate - years);
  console.log(ageInYears);

  // return the actual age
}
// dobToAge(data)



// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));

}

function displayPersonInfo(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "Name: " + person.firstName + " " + person.lastName + "\n";
  personInfo += "ID Number: " + person.id + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "D.O.B: " + person.dob + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  // personInfo += "Parents: " + person.parents + "\n";
  // personInfo += "Curent Spouse: " + person.currentSpouse + "\n";
  // TODO: finish getting the rest of the information to display
  console.log("SEARCH RESULTS:" + "\n" + "\n" + personInfo);
}

function displayPersonFamily(person){
  var familyInfo = "Name: " + person.firstName + " " + person.lastName + "\n";
  familyInfo += "Parents: " + person.parents + "\n";
  familyInfo += "Curent Spouse: " + person.currentSpouse + "\n";
  console.log("SEARCH RESULTS:" + "\n" + familyInfo);
}

// function displayPersonDescendants(person){
//   var desInfo = "Name: " + person.firstName + " " + person.lastName + "\n";
//   desInfo += "Descendants: " + person.

// }

// function that prompts and validates user input
// function promptFor(question, valid){
//   do{
//     var response = prompt(question).trim();
//   } while(!response || !valid(response));
//   return response;
// }

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}



