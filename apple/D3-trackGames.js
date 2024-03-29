// I want you to write a function which returns an object, which behaves in a certain way.
// What the object is going to do is track how many times it's told you won and lost a game.
// So the object you return will have two methods on it: won() and lost()
// I want the function which makes the object to have three parameters: windowSize, successRate, and callback
// windowSize is a number which is how many recent games you should pay attention to.
// If windowSize is 5, you should only consider the 5 most recent games, you should ignore any older games.
// successRate is a number between 0 and 1. If, in the windowSize most recent games, you have lost too many,
//  you should call the function callback. So, for instance, if sucecssRate is 0.9 and windowSize is 5,
// if the last 5 games were all won, you shouldn't call callback,
//but if 4 were won  and 1 was lost (80%) you should call callback, because 80% is less than 0.9 (which is 90%).

// return object
// the object you return will have two methods on it: won() and lost();
// windowSize is a number which is how many recent games you should pay attention to.

// const loggingCallback = () => console.log("You lost too many games");
// const tracker = makeGameTacker(1, 0.9, loggingCallback());
// tracker.won();
// should not log anything, but then if you called tracker.lost(); it should log "You lost too many games"

// In fact, specifically:
// const loggingCallback = () => console.log("You lost too many games");
// const tracker = makeGameTacker(1, 0.9, loggingCallback());
// tracker.won();
// tracker.lost();
// should log nothing after the call to won() and then should log "You lost too many games" after the call to lost()

// I want for every time you call won or lost, for it to re-calculate the result based on your most recent games
const loggingCallback = () => console.log("You lost too many games");

// Improvement :
// If you make it be a method on the results object,
//I think you will avoid your number copying problem, and also only need one argument instead of those 4
// You could access the won and lost variables from there, though, without copying them
// One method can call another method

// Again, about efficiency: Right now when you call won or lost you only need to look at one element,
//which is fast -
//if you start using map or filter you're going to look at every element in the array, which is slower

//  If you're asked about efficiency, for your current code, you'd say something like "I need to do 3 comparisons, which are fast, remove one item from an array, and add an item to an array, all of which are fast"
// If you had a map, you'd say something like "I need to look through every element in the array"

function makeGameTacker(windowSize, successRate, loggingCallback) {
  let arrayResults = [];
  let won = 0;
  const results = {
    // You could access the won and lost variables from there, though, without copying them
    // One method can call another method
    won: () => {
      results.call("won");
    },
    lost: () => {
      results.call("lost");
    },
    call: (string) => {
      if (arrayResults.length < windowSize) {
        if (string === "won") {
          won = won + 1;
        } 
        arrayResults.push(string);
      } 
      else if (arrayResults.length === windowSize) {
        if (arrayResults[0] === "lost" && string === "won") {
          won = won + 1;
        } 
        else if (arrayResults[0] === "won" && string === "lost") {
          won = won - 1;
        }
        arrayResults.splice(0, 1);
        arrayResults.push(string);
      }
      if (
        arrayResults.length === windowSize &&
         (won/windowSize) <  successRate
      ) {
        console.log("----");
        console.log("for this result of array", arrayResults);
        loggingCallback();
        console.log("your Rate is :", won / windowSize, ":(");
        console.log("successRate is :", successRate);
        console.log("----");
      }
      // if(arrayResults.length === windowSize &&
      //   (won/windowSize) >  successRate){
      //   console.log("----");
      //   console.log("for this result of array", arrayResults);
      //   console.log("WellDone -your Rate is :", won / windowSize, ":D");
      //   console.log("successRate is :", successRate);
      //   console.log("----");
      //   }
    },
  };
  return results;
}

const tracker = makeGameTacker(2, 0.9, loggingCallback);
tracker.won();
tracker.lost();
tracker.won();
tracker.won();
tracker.won();
tracker.lost();
tracker.lost();
tracker.lost();
tracker.lost();
tracker.won();
