import React, { useEffect, useState } from "react";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
// make sure to import the ACTIONS to change the state or update the reducers
import { increment, decrement, signIn, signOut, getData } from './actions';
function App() {
  // the common now for every component will need to import the reducers
  const counter = useSelector(state => state.counter); // these are to get the state of each variable
  const logged = useSelector(state => state.isLogged);
  const data = useSelector(state => state.data);
  // make sure to import dispatch so that you can use the actions.
  const dispatch = useDispatch();
  const imgage = 'https://blog.yellowoctopus.com.au/wp-content/uploads/2020/07/yellow-octopus-spongebob-memes-3.jpg'
  // then when you have an action or a useEffect to load data you call useDispatch(reducerName)

  const [isLoaded, setIsLoaded] = useState(false);

  const fetchMultiple = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
          dispatch(getData(json));
          setIsLoaded(true)
        })
  }

  useEffect(() => {
      fetchMultiple()
      console.log(data)
  }, []);



  return (
    <div className="App">
      <h1>hello</h1>
      <p>My counter state {counter}</p>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(10))}>-</button>
      <br /><br />
      <h3>Sign in to view very SUPER SECRETE things</h3>
      {!logged ? <button onClick={() => dispatch(signIn())}>Sign in</button> : ''}
      {logged ? <button onClick={() => dispatch(signOut(false))}>Sign Out</button> : ''}
      {logged ? <div> <h4>Here is super secret stuff now that your logged in :D</h4> <img style={{ width: "300px" }} src={imgage} alt="#" /></div> : ""}
      <br /><br />
      <h1>Here is some data</h1>
      {isLoaded ? data[0].map((d, i) => (
        <div key={i} className="user-card">
          <h4>Post Id: {d.id}</h4>
          <p>Title: {d.title}</p>
        </div>
      )) : "Loading"}
    </div>
  );
}

export default App;
