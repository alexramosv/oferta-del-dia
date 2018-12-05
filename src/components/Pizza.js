/* TODO: Create the Pizza Component consisting of:
  - A `div` with a class `content`
    - A `PizzaHeader` component
    - A `PizzaIngredients` component
    - A `PizzaTotal` component
*/
import React from "react";
import PizzaHeader from "./PizzaHeader";
import PizzaIngredients from "./PizzaIngredients";
import PizzaTotal from "./PizzaTotal";

class Pizza extends React.Component {
  state = {
    ingredients: {
      dough: {
        id: 1,
        name: "Dough",
        cash: 500,
        selected: true
      },
      pinneaple: {
        id: 2,
        name: "Pinneaple",
        cash: 150,
        selected: false
      },
      mozzarella: {
        id: 3,
        name: "Mozzarella",
        cash: 200,
        selected: false
      },
      pepperoni: {
        id: 4,
        name: "Pepperoni",
        cash: 125,
        selected: false
      },
      ham: {
        id: 5,
        name: "Ham",
        cash: 150,
        selected: false
      },
      tuna: {
        id: 6,
        name: "Tuna",
        cash: 100,
        selected: false
      }
    }
  };

  switchSelectedAttribute = ingredientKey => {
    const ingredients = { ...this.state.ingredients };

    if (ingredients[ingredientKey].selected) {
      ingredients[ingredientKey].selected = false;
    } else {
      ingredients[ingredientKey].selected = true;
    }

    /* if statement 👆 is equivalent to 👇 */
    //ingredients[ingredientKey].selected = !ingredients[ingredientKey].selected;

    this.setState({ ingredients: ingredients });
  };

  render() {
    return (
      <div className="content">
        <PizzaHeader />
        <PizzaIngredients
          ingredients={this.state.ingredients}
          switchSelectedAttribute={this.switchSelectedAttribute}
        />
        <PizzaTotal ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default Pizza;
