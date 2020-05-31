import React, { useState } from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Taro", age:1},
    { name: "Yusaku"},
    { name: "NoName", age:2}
  ]
  const [count, setCount] = useState(0);

  return(
    <React.Fragment>
      <Counter count={count} increment={() => setCount(count + 1)}/>
    </React.Fragment>
  )};

const Counter = (props) => <div onClick={props.increment}>count: {props.count}</div>

export default App;
