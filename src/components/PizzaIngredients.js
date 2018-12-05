/* TODO: Create the PizzaIngredients Component consisting of:
  - An `ul` where you `map` over `ingredients` to create a `PizzaIngredient` per `ingredientKey`
*/
import React from "react";
import PizzaIngredient from "./PizzaIngredient";

class PizzaIngredients extends React.Component {
  render() {
    return (
      <ul>
        {Object.keys(this.props.ingredients).map(ingredientKey => (
          <PizzaIngredient
            key={ingredientKey}
            ingredientKey={ingredientKey}
            ingredient={this.props.ingredients[ingredientKey]}
            switchSelectedAttribute={this.props.switchSelectedAttribute}
          />
        ))}
      </ul>
    );
  }
}

export default PizzaIngredients;
