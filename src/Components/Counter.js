import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Counter.module.css";

import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const toggleCounter = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 10 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCounter ? <div className={classes.value}>{counter}</div> : ""}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase</button>
      </div>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }
//   render() {
//     return (
//       <main className={classes.counter}>
//          <h1>Redux Counter</h1>
//          <div className={classes.value}>{this.props.counter}</div>
//         {" "}
//         <div>
//           {" "}
//           <button onClick={this.incrementHandler.bind(this)}>
//             Increment
//           </button>{" "}
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>{" "}
//         </div>
//          <button onClick={this.toggleCounterHandler}>Toggle Counter</button>{" "}
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
