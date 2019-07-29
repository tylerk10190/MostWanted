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
    displayPersonInfo(person)
    break;
    case "family":
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


  let results = [0,1]
  while(results.length > 1){
  let userInput = prompt("Enter search criteria from list: Gender, Age, Height, Weight, Eye Color, Occupation.").toLowerCase()
  switch(userInput)
  {
    case "gender":
    results = searchByGender(people);
    alert("Search results that meet your criteria:" + "\n" + displayPeopleReturn(results) + "\n" + "Search by new criteria to narrow results.")    
    break;
    case "age":
    results = searchByAge(people);
    if(results.length === 0)
    {
      alert("No Results Found")
      return searchByAge(people);
    }
    alert("Search results that meet your criteria:" + "\n" + displayPeopleReturn(results) + "\n" + "Search by new criteria to narrow results.")
    break;
    case "height":
    results = searchByHeight(people)
    alert("Search results that meet your criteria:" + "\n" + displayPeopleReturn(results) + "\n" + "Search by new criteria to narrow results.")
    break;
    case "weight":
     results = searchByWeight(people)
    alert("Search results that meet your criteria:" + "\n" + displayPeopleReturn(results) + "\n" + "Search by new criteria to narrow results.")
    break;
    case "eye color":
    results = searchByEyeColor(people)
    alert("Search results that meet your criteria:" + "\n" + displayPeopleReturn(results) + "\n" + "Search by new criteria to narrow results.")
    break;
    case "occupation":
    results = searchByOccupation(people)
    alert("Search results that meet your criteria:" + "\n" + displayPeopleReturn(results) + "\n" + "Search by new criteria to narrow results.")
    break;
    case "flamingo":
    alert("Fuck off Nevin!")
    return otherMainMenu()
    case "banana":
    alert("Fuck off Nevin!")
    return otherMainMenu()
    default:
    alert("Please choose an criteria from the list")
    return otherMainMenu(); // ask again
  }
  people = results;
    if(people.length == 1)
      {
        userInput = prompt("Found " + displayPeopleReturn(people) + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'")
        if(userInput = "info"){
          displayPersonInfo(people[0]);
        }
      }

  }
}

function followUpQuestions(people, results){
  switch(people)
  {
    case "age":
    results = searchByAge(people)
    if(results.length === 0)
    {
      alert("No Results Found")
      return searchByAge(people);
    }
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
  let searchResult = []
  let userInput = prompt("Enter: Male or Female").toLowerCase()
        if(userInput == "male")
        {
         searchResult = people.filter(function (el)
         {
            if(el.gender == "male"){
              // console.log(el.firstName + " " + el.lastName)
            searchResult += el.firstName + " " + el.lastName + "\n";
            // alert("Search results that meet your criteria:" + "\n" + searchResult + "\n" + "Search by new criteria to narrow results.")
            return true;
          }
          else{
            return false;
          }

         })
        }
        else if(userInput == "female")
        {
          searchResult = people.filter(function (el)
          {
            if(el.gender == "female"){
              // console.log(el.firstName + " " + el.lastName)
              displayPeople(people);
            
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
    // alert("Search results that meet your criteria:" + "\n" + searchResult + "\n" + "Search by new criteria to narrow results.")    
    return searchResult;
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
// searchByAge(people);
        // let elAge = dobToAge(el.dob);

function dobToAge(dob)
{
  let today = new Date()
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let year =  today.getFullYear();
  let todayDate = month + "/" + date + "/" + year
  let dobArray = dob.split("/");
  let dateArray = todayDate.split("/");
  let dateMonthbig = parseInt(dobArray[0]) < parseInt(dateArray[0]); 
  let monthsEqual = parseInt(dobArray[0]) === parseInt(dateArray[0]);
  let dayEqualish = parseInt(dobArray[1]) <= parseInt(dateArray[1]);
  
    if (dateMonthbig || (monthsEqual && dayEqualish))
  {
    let actualAge = parseInt(dateArray[2]) - parseInt(dobArray[2]);
    return(actualAge);
  }
  else{
    let actualAge = (parseInt(dateArray[2]) - parseInt(dobArray[2])) - 1;
    return(actualAge);
  }  

}
// dobToAge(prompt("Please enter a date of birth. Format: mm/dd/yyyy"))


function searchByAge(people)
{
  let userInput = (prompt("Please enter the age you would like to search for"))
  let filterResults = people.filter(function(el)
  {
    let elAge = dobToAge(el.dob)
    let ageResults = elAge - userInput
    if(ageResults == 0)
    {
      // console.log(el.firstName + " " + el.lastName)
      return true;
  }
    else 
    {
      return false;
    }
  })

  return filterResults;
}

// function searchByMultiple(people)
// {
//   let userInput = "Please enter all the criteria you would like to search for.";
//   let multipleFinds = people.filter(function(el)
//   {
//     for(let i = 0, i = el.length, i++;)
//       if(i === userInput)
//       {
//         console.log(el.fistName + " " + el.lastName)
//         return true;
//       }
//       else{
//         return false;
//       }
//   })

// }

function findParents(people){
let parentResults = []
let filterResults = people.filter(function(el){
  if(el.parents /= [])
    {
      return false;
    }
  else
    {
      el.parents += parentResults
      return true;
    }
})
console.log(parentResults)
return parentResults;
}


// alerts a list of people


function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));

}

function displayPeopleReturn(people){
  return people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n");
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


// function that prompts and validates user input

function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
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





