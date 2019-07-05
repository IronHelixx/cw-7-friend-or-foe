function friend(friends){
  return friends.filter(function(x){return x.length==4;});
}

/* **
  //Simplified Version:

function friend(friends){
  return friends.filter(n => n.length === 4)
}

** */
