
var data =
[
    'alabama',
    'alaska',
    'arizona',
    'arkansas',
    'california',
    'colorado',
    'connecticut',
    'delaware',
    'florida',
    'georgia',
    'hawaii',
    'idaho',
    'illinois',
    'indiana',
    'iowa',
    'kansas',
    'kentucky',
    'louisiana',
    'maine',
    'maryland',
    'massachusetts',
    'michigan',
    'minnesota',
    'mississippi',
    'missouri',
    'montana',
    'nebraska',
    'nevada',
    'new hampshire',
    'new jersey',
    'new mexico',
    'new york',
    'north carolina',
    'north dakota',
    'ohio',
    'oklahoma',
    'oregon',
    'pennsylvania',
    'rhode island',
    'south carolina',
    'south dakota',
    'tennessee',
    'texas',
    'utah',
    'vermont',
    'virginia',
    'washington',
    'west virginia',
    'wisconsin',
    'wyoming'
]
//set state id names to each card to traget for highlighting
let noID = document.getElementsByClassName("card-title");
let j = 0
for(let i = 0; i<noID.length; i++){
    noID[i].setAttribute("id", data[j]);
    j++;
}

//function to log the info typed into search bar and find in window
function formdata() {
    //grab value of typed in info
    let searchInput = document.getElementById("statesearch").value.toLowerCase();
    
    //check to see where window should move to
    switch(searchInput){
        case "alabama":
        case "alaska":
        case "arkansas":
        case "arizona":
        case "california":
            window.location.href= "#alabama-window";
            break;
        case "colorado":
        case "connecticut":
        case "delaware":
        case "florida":
        case "georgia":
            window.location.href= "#colorado-window";
            break;
        case "hawaii":
        case "idaho":
        case "illinois":
        case "indiana":
        case "iowa":
            window.location.href= "#hawaii-window";
            break;
        case "kansas":
        case "kentucky":
        case "louisiana":
        case "maine":
        case "maryland":
            window.location.href= "#kansas-window";
            break;
        case "massachusetts":
        case "michigan":
        case "minnesota":
        case "mississippi":
        case "missouri":
            window.location.href= "#massachusetts-window";
            break;
        case "montana":
        case "nebraska":
        case "nevada":
        case "new hampshire":
        case "new jersey":
            window.location.href="#montana-window";
            break;
        case "new mexico":
        case "new york":
        case "north carolina":
        case "north dakota":
        case "ohio":
            window.location.href="#newmexico-window";
            break;
        case "oklahoma":
        case "oregon":
        case "pennsylvania":
        case "rhode island":
        case "south carolina":
            window.location.href="#oklahoma-window";
            break;
        case "south dakota":
        case "tennessee":
        case "texas":
        case "utah":
        case "vermont":
            window.location.href="#southdakota-window";
            break;
        case "virginia":
        case "washington":
        case "west virginia":
        case "wisconsin":
        case "wyoming":
            window.location.href="#virginia-window";
            break;
        }
        document.getElementById(searchInput).style.backgroundColor = "yellow";
    }

    // //grab the state names from cards and uppercase them
    // let stateNames = document.getElementsByClassName("card-title");

    // //loop through the state names and grab the HTML
    // for(i=0; i<stateNames.length; i++){
    //     let stateLocation = stateNames[i].id;



//         // if the search matches the HTML, find the location on the page
//         if(searchInput == stateLocation){
//             //find on doc
//             let windowLocal = "#jump";
//             window.location.href= windowLocal;
            
//             //change color of background
//             let newColor = stateLocation;
//             document.getElementById(newColor).style.backgroundColor = "yellow";

//         }
//     }

// }

