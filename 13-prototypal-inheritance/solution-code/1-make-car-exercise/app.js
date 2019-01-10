// Create a makeCar function
// ---
// Define a function called makeCar() that takes two parameters (model, color),
// makes a new object literal for a car using those params, and returns that object.
// Be sure your function returns the fuel property and the drive and refuel methods
// shown in the following model object:

// {
//   model: "Honda Civic",
//   color: "Silver",
//   fuel: 100,
//   drive: function() {
//     this.fuel--;
//     return 'Vroom!';
//   },
//   refuel: function() {
//     this.fuel = 100;
//   }
// }

function makeCar(model, color) {
  let car = {
    model: model,
    color: color,
    fuel: 100,
    drive: function() {
      this.fuel--;
      return 'Vroom!';
    },
    refuel: function() {
      this.fuel = 100;
    }
  };
  return car;
}

let celica = makeCar('Toyota Celica', 'Lime Green');
console.log(celica);
