// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs (42-someValue)
  }
  distanceFromHqInBlocks();

  //function distanceFromHqInFeet (someValue) {
   // distanceFromHqInBlocks (42-someValue);
   // return (42-someValue)
  //}
  function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue)*264
    return distanceFromHqInBlocks (someValue)*264
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs (destination-start)*264
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance = distanceTravelledInFeet (start, destination)
    if (distance <= 400) {
        return 0        
    } if (distance > 400 && distance <= 2000 ){
    return (distance - 400)*0.02 }
    if (distance > 2000 && distance < 2500){
        return (25)
    }
    if (distance > 2500){
        return ('cannot travel that far')
    }
  }
  