//basic function practice

// 1. Create a function that console logs the string "FUNctions are fun!"
const logString = (string) => {
    console.log(string)
}

// logString("FUNctions are fun!");


// 2. Create a function that adds two numbers (just like in the content document) and returns the sum. Optional: check the data type before adding.

const addTwoNumbers = (num1, num2) => {
    if (typeof(num1) === "number" && typeof(num2) === "number") {
        let sum = num1 + num2;
        return sum;
    } else {
        return "not a Number Dummy!"
    }
    
}

// 3. Invoke the function with two numbers of your choice.
// console.log(addTwoNumbers(3, 5));


// 4. Create another function that multiplies two numbers and returns the product.  Invoke this function.


const multiplyTwoNumbers = (num1, num2) => {
    if (typeof(num1) === "number" && typeof(num2) === "number") {
        let product = num1 * num2;
        return product;
    } else {
        return "not a Number Dummy!"
    }
    
}

// console.log(multiplyTwoNumbers(3, 5));


// 5. Create another function that adds two numbers and then multiplies the sum by a third number.  Complete this task by invoking the other two math functions within your new function.  Test this function by invoking it and console logging the output.

const addAndMultiply = (num1, num2, num3)  => {
    let sum = addTwoNumbers(num1, num2)
    let result = multiplyTwoNumbers(sum, num3);
    return result;
}

// console.log(addAndMultiply(2, 3, 4));

// practice for array methods

/* For each of the sections, consider the array and the method.  What would you expect the output to be? */
let letters = ['l', 's', 'a', 'r', 'd', 'f']

// letters.sort()
//sorts by pre-difined rules, and sorts IN Place, mutating the array.

// letters.pop()
//mutates array, poping the last item from the array.



// letters.push('q')
// pushes one item to the array

// letters.shift()
//removes first element from array



// letters.unshift('y')
//adds element to start of array.



// console.log(letters.slice(1,3));
//extracts elements from array, index start and index end(up to but not included)!

// console.log(letters);

let names = ['John', 'Mandeep', 'Ruby', 'Rose', 'Jackson'];

// console.log(names.concat(letters));
//creates a new array with two combined together.


// console.log(names.join(''))
//string concatenates an array, the argument for this is what will be placed IN BETWEEN each element when stringifying.




names.reverse()
//mutates original array and reverses the indexes.

console.log(names)


let superheroes = ['Wonder Woman', 'Captain America', 'Spiderman', 'Batman', 'The Flash']
// iterate over superheroes and console log the superhero's name in the following sentance "<NAME> is a superhero!".

// superheroes.forEach(element => console.log(element));
//with for each, you have to have a function, because there is no pre-defined syntax like a for... of.



let superheroesDetails = [
    {
        id: 1,
        name:'Wonder Woman',
        isDC : true
      },
      {
        id: 1,
        name:'Captain America',
        isDC : true
      },
      {
        id: 1,
        name:'Batman',
        isDC : true
      },
      {
        id: 1,
        name:'The Flash',
        isDC : true
      },
      {
        id: 1,
        name:'Spiderman',
        isDC : false
      }
    ]


    
    
    // iterate over superheroesDetails if the superhero is a DC character (isDC = true)  console log "<the heros name> is in the Justice League.".  Otherwise console log "<the heros name> is a superhero" in the following sentence "<NAME> is a superhero!".
    
    superheroesDetails.forEach(element => { 
        if (element.isDC) {
            console.log(element.name + 'is in the Justice Leage')
        } else {
            console.log(element.name + 'is a superhero')

        }

    })



    const outfits = [
        {
          id: 1,
          bottoms: "slacks",
          top: "orange",
          shoes: "leather",
          style: "formal",
          own: false
        },
        {
          id: 3,
          bottoms: "jeans",
          top: "t-shirt",
          shoes: "flip flops",
          type: "casual",
          own: true
        },
        {
          id: 2,
          bottoms: "yoga",
          top: "tank top",
          shoes: "flip flops",
          type: "casual",
          own: false
        },
        {
          id: 9,
          bottoms: "skirt",
          top: "blouse",
          shoes: "heals",
          type: "formal",
          own: true
        },
        {
          id: 6,
          bottoms: "shorts",
          top: "tank top",
          shoes: "none",
          type: "casual",
          own: true
        },
        {
          id: 7,
          bottoms: "jeans",
          top: "sweater",
          shoes: "boots",
          type: "casual",
          own: true
        },
        {
          id: 8,
          bottoms: "slacks",
          top: "button down",
          shoes: "dress",
          type: "formal",
          own: false
        },
      ]
      
      /* considering the array outfits, use map, filter and find to do the following */
      
      ///Make a copy of outfits called outfitsCopy that can be modified without changing outfits directly.
    
      const outfitsCopy = [
        {
          id: 1,
          bottoms: "slacks",
          top: "orange",
          shoes: "leather",
          style: "formal",
          own: false
        },
        {
          id: 3,
          bottoms: "jeans",
          top: "t-shirt",
          shoes: "flip flops",
          type: "casual",
          own: true
        },
        {
          id: 2,
          bottoms: "yoga",
          top: "tank top",
          shoes: "flip flops",
          type: "casual",
          own: false
        },
        {
          id: 9,
          bottoms: "skirt",
          top: "blouse",
          shoes: "heals",
          type: "formal",
          own: true
        },
        {
          id: 6,
          bottoms: "shorts",
          top: "tank top",
          shoes: "none",
          type: "casual",
          own: true
        },
        {
          id: 7,
          bottoms: "jeans",
          top: "sweater",
          shoes: "boots",
          type: "casual",
          own: true
        },
        {
          id: 8,
          bottoms: "slacks",
          top: "button down",
          shoes: "dress",
          type: "formal",
          own: false
        },
      ]

      
      //Change a value on outfitsCopy and use console logs to show you did not change outfits
      outfitsCopy.pop()
      outfitsCopy[0].bottoms = "pants"

      console.log(outfitsCopy)
      console.log(outfits)

    

    //Make a copy (map) of outfits with the added property of accessories.  Make accessories always false.
      //Make a copy (map) of outfits that contains on the properties of id, bottoms, tops and shoes
      //filter outfits to give only outfits that are casual
      // filter outfits to give only outfits that are owned
      // use find to return an outfit that has no shoes
      // use find to return an outfit that has boots
      //Bonus:
      // use find to return an outfit that has jeans and a t-shirt
      