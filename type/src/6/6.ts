interface Food {
  name: string;
  calories: number;
}

function speak(food: Food): void {
  console.log("Our " + food.name + " has " + food.calories + " grams.");
}

// We've made a deliberate mistake and name is misspelled as nmae.
var ice_cream = { // 객체
  name: "ice cream",
  calories: 200
}

speak(ice_cream);
