// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
//
// How many such routes are there through a 20×20 grid?


//we know total distance is half the perimeter
console.log(combinationsSquare(20,20))
//Knowing that a 2x2 has 6 possible routes and that 2,3 has 10 possible routes,
//We infer the formula combinations = perimeter!/heigth! * width!

//Function that combines the trajectories for rectangle of a given width and height
function combinationsSquare(width, height){
  let perimeter = width+height
  let combinations = factorial(perimeter)
  let div = factorial(width)
  let div2 = factorial(height)

  let res = combinations/(div*div2)

  return res
}

//funtion that calculates the factorial of a number
function factorial(x){
  let res = 1
  for (let i = x; i>1 ; i--){
    res *= i
  }
  return res
}
