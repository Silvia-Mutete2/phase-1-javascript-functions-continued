//defines saturdayFun function declaration
//default activity 'roller-skate'
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }

  //defines mondayWork function expression
  //default activity 'go to the office'
  const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  }
  
  //defines wrapAdjective function
  //when initialized with '*' creates a function that, when called, wraps an adjective in a highlight", 
  const wrapAdjective = function(string="*") {
    return function(adjective="special") {
      return `You are ${string}${adjective}${string}!`
    }
  }

