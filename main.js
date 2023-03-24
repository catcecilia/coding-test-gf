// object of objects where key indicates household size and value is the AMI threshold
// design choice reasoning: object stores relations between data (household) <-> AMI threshold
let amiByState = {
    "texas": {
      1: 59710,
      2: 68240,
      3: 76770,
      4: 85300,
      5: 92124,
      6: 98948,
      7: 105772,
      8: 112596,
    },
    "rhode-island": {
      1: 69510,
      2: 79440,
      3: 89370,
      4: 99300,
      5: 107244,
      6: 115188,
      7: 123132,
      8: 131076,
    },
    "massachusetts": {
      1: 84280,
      2: 96320,
      3: 108360,
      4: 120400,
      5: 130032,
      6: 139664,
      7: 149296,
      8: 158928,
    }
  };

  //Function to check eligibility based on state residence, house hold size, annual income
  //boolean is used to dictate that true = eligible, false = ineligible. also to use with the form interface created
  const checkEligibility =(state, houseHoldSize,annualIncome) =>{
    const amiThreshold = amiByState[state][houseHoldSize];
    if(annualIncome <= amiThreshold){
        return true;
    } else{  //returns false if passed unsupported state or household size
        return false;
    }
  }
  
  //Event Listener for form
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    //grab values from form
    const state = document.getElementById("stateSelect").value;
    const houseHoldSize = document.getElementById("householdSize").value;
    const annualIncome = document.getElementById("annualIncome").value;

    //call function
    resultsOnWeb(state, houseHoldSize,annualIncome);
  });


  //calls checkEligibility to populate results on webpage
  const resultsOnWeb = (state,houseHoldSize,annualIncome) =>{
    const eligibility = document.getElementById("eligibility");

    //checks to see if eligibility is true 
    if (checkEligibility(state, houseHoldSize, annualIncome)){
        eligibility.innerText = "Eligible";  
        eligibility.style.color = "green";
    } else {
        eligibility.innerText = "Ineligible";
        eligibility.style.color = "red";
    }
  }