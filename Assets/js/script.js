// get my location (lat, long)
// let myLocation = document.getElementById("demo");

// function getLocation() {
//    if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//    } else {
//       myLocation.innerHTML = "Geolocation is not supported by this browser.";
//    }
// }

// function showPosition(position) {
//    x.innerHTML = "Latitude: " + position.coords.latitude +
//       "<br>Longitude: " + position.coords.longitude;
// }
const APIKey = "762a9cd39fe01efc58fd07631e2f3dfa";
console.log(APIKey);


https://api.openweathermap.org / data / 2.5 / forecast ? q = { city } & appid={ APIKey }
console.log("calling 5 day forecast API...");



// api.openweathermap.org / data / 2.5 / forecast ? lat = { lat } & lon={ lon }& appid={ APIKey }
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}










/*
  - Everyone in the group shares the same codebase 
  - The main branch is untouchable 
  - For every specific work you are doing, you create a branch 
     git checkout -b html-start

  - If you accidentally start putting new code in your main branch:
      git switch name-of-new-branch

  - Do git add and git commit as often as you want in that branch 
  
  - When the branch is ready:
      git push origin html-start

  - This creates a pull request, which you will see on the Github repo itself
  - The maintainer of the repo then approves the pull request
  - This merges the new branch with main

  WHENEVER THE MAIN BRANCH IS UPDATED, EACH TEAM MEMBER:

  1. git add/commit on any branch you're working on
  2. git checkout main 
  3. git pull origin main ( now your main branch is up to date)
  4. go back to whatever branch you were working on:
       git checkout existing-branch
  5. git merge main

     When you do a merge, the terminal's text editor may ask you to provide a comment. Just type 
     the following:

     :wq!

     and then hit return.

  IF GIT TELLS YOU THAT YOU HAVE A MERGE CONFLICT:

  1. You'll have these options:

     a. Keep the existing code 
     b. Keep the incoming code 
     c. Keep both sets of code 
     d. Keep none 

  2. Choose an option
  3. Do a git add/commit (fixed merge conflict)

*/