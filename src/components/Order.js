import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
  totalReducer = (subTotal, value) => {
    const fish = this.props.fishes[value];
    const quantity = this.props.order[value];
    const isAvailable = fish && fish.status === "available";

    return isAvailable ? quantity * fish.price + subTotal : subTotal;
  };

  renderOrder = orderKey => {
    const quantity = this.props.order[orderKey];
    const fish = this.props.fishes[orderKey];
    const isAvailable = fish && fish.status === "available";

    if (!fish) return null;

    if (isAvailable) {
      return (
        <CSSTransition
          classNames="order"
          key={orderKey}
          timeout={{ enter: 500, exit: 500 }}
        >
          <li key={orderKey}>
            <span>
              <TransitionGroup component="span" className="count">
                <CSSTransition
                  classNames="count"
                  key={quantity}
                  timeout={{ enter: 500, exit: 500 }}
                >
                  <span>{quantity}</span>
                </CSSTransition>
              </TransitionGroup>
              lbs {fish.name}
              {formatPrice(quantity * fish.price)}
              <button onClick={() => this.props.removeFromOrder(orderKey)}>
                &times;
              </button>
            </span>
          </li>
        </CSSTransition>
      );
    } else {
      return (
        <CSSTransition
          classNames="order"
          key={orderKey}
          timeout={{ enter: 500, exit: 500 }}
        >
          <li key={orderKey}>
            Sorry {fish ? fish.name : "product"} is not available!
          </li>
        </CSSTransition>
      );
    }
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce(this.totalReducer, 0);

    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          Total: <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
