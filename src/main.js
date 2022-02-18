/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks, state) {
  const result = parks.filter((park) => park.location.state === state)
  return result
  
}




function getWishlistParksForUser(parks, users, userName) {

//let {id} = parks
  
let empty =[]
  let result = parks.filter((park) => {
    if(parks[value].id.includes(users[userName].wishlist)) {
    empty.push(parks[park])
      onsole.log("==================================================================")
      console.log(parks[park])
  }
  })
 console.log("==================================================================")
  console.log(empty)
  
  return empty
}

function userHasVisitedAllParksInState() {
  
}

function userHasVisitedParkOnWishlist() {
  
}

function getUsersForUserWishlist() {}


module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
