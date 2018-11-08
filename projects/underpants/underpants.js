// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity()
* Arguments:
*   1) Anything
* Objectives:
*   1) Returns <anything> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(param){
    return param;
};

/** _.typeOf()
* Arguments:
*   1) Anything
* Objectives:
*   1) Return the type of <anything> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(param){
    if (param === null){
        return "null";
    } else if(Array.isArray(param)){
        return "array";
    } else{
        return typeof param;
    }
    
}

/** _.first()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number){
    let hold = [];
    if (!Array.isArray(array) || number < 0){
        return hold;
    } else if(number === undefined || typeof number !== "number"){
        return array[0];
    } else if (number > array.length){
        return array;
    } else {
        for (let i = 0; i < number; i++){
            hold.push(array[i]);
        }
    } return hold;
}

/** _.last()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number){
    let hold = [];
    if (!Array.isArray(array) || number < 0){
        return hold;
    } else if(number === undefined || typeof number !== "number"){
        return array[array.length - 1];
    } else if (number > array.length){
        return array;
    } else{
        return array.slice(-number);
    }
     //console.log(hold);
    
}

/** _.each()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function (collection, func){
    if (_.typeOf(collection) === "array"){
        for (let i = 0; i < collection.length; i++){
          func(collection[i], i, collection);
                
            
        }
    } else {
        for (let key in collection){
            func(collection[key], key, collection);
        }
    }
};


/** _.indexOf()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Gotchas:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        } 
    } return -1;
}

/** _.filter()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Gotchas:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

// _.each = function (collection, func){
//     if (_.typeOf(collection) === "array"){
//         for (let i = 0; i < collection.length; i++){
//           func(collection[i], i, collection);
                
            
//         }
//     } else {
//         for (let key in collection){
//             func(collection[key], key, collection);
//         }
//     }
// };

_.filter = function(array, func){
    //declare a storage array
    let hold = [];
    // use each to loop through the (array parameter)
    _.each(array, function(element, index, collection){ //what is the function being passed into this call back function?
        if (func(element, index, collection)){
    // if the the element passes the test push value into storage array
            hold.push(element);
        // console.log(hold);
        } 
        
    });
    //return the array that contains elements that are true
    return hold;
    

};

/** _.reject()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func){
    //declare an array to hold values which are false
    // let hold = [];
    // //loop through (array parameter)
    // //call function for each element in the aray
    // hold = _.filter(array, function(element, index, collection){
    //     return func(element, index, collection);
        
    // });
     

    //     return hold;

    return _.filter(array, function(element, index, collection){
        if(!func(element, index, collection)){
            return element;
        }
    })
    
    // _.filter(array, function(element, index, collection){
    // //if values are false push them into hold array
    //     if (!func(element, index, collection)){
    //         console.log(hold);
    //         hold.push(element);
    //     }
    // });
    //return hold array;
    // return hold;
    
    

    
// //declare an array to hold values which are false
//     let hold = [];
// //loop through the (array parameter)
// _.each(array, function(element, index, collection){
//     if (!_.filter(array, func).includes(element)){
//         hold.push(element);
//     }
// }); return hold;

// //if the elements pass the test, push value into storage array
// //return storage array with passed answers
};



/** _.partition()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Gotchas:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func){
    
    
    return [_.filter(array, func), _.reject(array, func)];
    
    
    // //need storage array that will have two sub arrays
    // let hold = [_.filter(array, func), _.reject(array, func)];
    // // // loop through the (array parameter)
    // // _.each(array, function(element, index, collection){
    // //     if (_.filter(array, func)){
    // //         hold[0].push(element);
    // //     })
    // // })
    
    // return hold;
    // //call function on each element in the array
    // //push truthy values into one sub array and falsy values into other sub array;
};



/** _.unique()
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

// _.indexOf = function(array, value){
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === value){
//             return i;
//         } 
//     } return -1;
// }

_.unique = function(array){
    let hold = [];
    _.each(array, function(element, index, collection){
        if (_.indexOf(hold, element) < 0){
            hold.push(element);
        }
    });
    return hold;
};

/** _.map()
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
    //have storage array
    let hold = [];
    
    
    _.each(collection, function(element, index, collection){
      hold.push(func(element, index, collection));
    });
    return hold;
    
    
    //make new array to hold values
    // call func for each element in the array
    //save the return value of each action to a new array
    //return new array
   
    
};


/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, property){
    //make new array
    //let result = [];
    //loop through array to access every element
    //for (let i = 0; i < array.length; i++){
    //result.push(array[i][property])
    //} return result;
    //push values 
    
  return _.map(array, function(element, index, collection){
        return element[property];
    })
    
    
    
//   return _.map(array, function(element, index, collection){
//     for (let key in element){
//         if(key === property){
//             return element[property];
    //     }
    // }
    // }); 
    // console.log(hold);
//  return hold; 
};


/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/


_.contains = function(array, value){
// takes an array and value as arguments 
// loop through the array
//check to see if value is contained in array
// if it does return true
//if it does not return false
//must use ternary operator
return _.indexOf(array, value) === -1 ? false : true;

// _.indexOf = function(array, value){
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === value){
//             return i;
//         } 
//     } return -1;
// }




// _.filter = function(array, func){
//     //declare a storage array
//     let hold = [];
//     // use each to loop through the (array parameter)
//     _.each(array, function(element, index, collection){ //what is the function being passed into this call back function?
//         if (func(element, index, collection)){
//     // if the the element passes the test push value into storage array
//             hold.push(element);
//         // console.log(hold);
//         } 
        
//     });
//     //return the array that contains elements that are true
//     return hold;
    

// };


// return _.each(array, function(element, index, collection){
//     element === value ? true : false
    
}
//         // array[i] === value ? true : array[i] !== value ? false
    
    
// // _.each(array, function(element, index, collection){
// //   return element === value ? true : false;
// // });
// };

/** _.every()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func){
    let hold = [];
//     _.each = function (collection, func){
//     if (_.typeOf(collection) === "array"){
//         for (let i = 0; i < collection.length; i++){
//           func(collection[i], i, collection);
                
            
//         }
//     } else {
//         for (let key in collection){
//             func(collection[key], key, collection);
//         }
//     }
// };

if (!func){
    _.each(collection, function(element, index, collection) {
        if (element){
            hold.push(element);
        }
    });
} else {
    _.each(collection, function(element, index, collection){
        if (func(element, index, collection)){
            hold.push(element);
        }
    });
  
} 
return hold.length === collection.length || hold.length === Object.keys(collection).length ? true : false;

// if (hold.length === collection.length || hold.length === Object.keys(collection).length){
//     return true;
// } else {
//     return false;
// }
};

/** _.some()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function (collection, func) {
    //need hold array to store values that pass test
    let hold = [];
    //if function is not provided push truthy elements/value into hold array
    if (!func){
        _.each(collection, function(element, index, collection){
            if(!element){
                hold.push(element);
            }
        });
    //if collection is array call function on each element, index, collection
    //if collection is object, call function on each value , key, collection
    } else {
        _.each(collection, function(element, index, collection){
            if(!func(element, index, collection)){
                hold.push(element);
            }
        });
    }
    
    //compare length of hold array to collection array to return true or false;
    return hold.length === collection.length || hold.length === Object.keys(collection).length ? false : true;
    
    
    
};


/** _.reduce()
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed>
*   5) After the last iteration, return the return value of the final <function> call
* Gotchas:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed){
    //loop through given array
    // if seed does not exist, update it to first element in array
    
    //call function on each element, index, and previous result
    //use the return value of function call as the previous result for next cal
    //return final return value of the final call
    _.each(array, function(element, index){
        if (seed === undefined){
            seed = array[0];
            
    } else { 
        seed = func(seed, element, index);
        
    }
    });
    
    // if (!seed){
    //     seed = array[0];
    //     let hold = array.slice(1);
    //     _.each(hold, function(element, index){
    //         seed = func(seed, element, index);
    //     });
    // }
    return seed;
    
//     console.log(seed);
//     if (!seed){
//         seed = array[0];
//       let hold = array.slice(1);
//       // console.log(hold);
//   _.each(hold, function(element, index){
//       seed = func(seed, element, index);
//       //console.log(seed);
//   }) }
//          else{  _.each(array, function(element, index){
//       seed = func(seed, element, index);
//   }) 
//          }    
//     return seed;

}
/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function (obj1, ...args){
    return Object.assign(obj1, ...args);
    
    
};

//have multiple objects as parameters
// copy properties from object 2 to object 1
// if more objects are passed in copy their properties to object 1 in the order they are passed in
//return updated object 1

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
