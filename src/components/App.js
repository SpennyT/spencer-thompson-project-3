// Importing our useEffect and useState Hook
import { useEffect, useState } from "react";
// Importing our styles
import "../styles/App.css";
// importing our firebase configuration
import firebase from "../config/firebase.js";
// Importing our JokesContainer Component
import JokesContainer from "./JokesContainer";

const dbRef = firebase.database().ref();

const App = () => {
  // Declaring state variables to hold jokes and user input
  const [jokes, setJokes] = useState([]);
  const [userInput, setUserInput] = useState("");
 

  useEffect(() => {

    dbRef.on("value", (response) => {
      // Set up "dummy" array as not to directly manipulate state
      const newDataArray = [];
      const data = response.val();
    
      
      for (let key in data) {
        let jokeObj = { key: key, name: data[key]};
        newDataArray.push(jokeObj);
      }
      // Use setJokes state function to put in newDataArray as jokes
      setJokes(newDataArray);
    });
    
  }, []);
  // This function will be called everytime the user updates the text input

  const handleUserInput = (event) => {
    let inputValue = event.target.value;
    setUserInput(inputValue);
  };
  // Submitting the data to firebase
  const handleSubmitClick = (event) => {

    event.preventDefault();
    // Logic for an empty string ()
    if (userInput){
    // Submits the new joke to the page
    // and resets the input value
    dbRef.push(userInput);
    setUserInput("");
    } 
    
  };
  // Function to remove joke (remove instead of push)
  const handleRemoveJoke = (joke) => {
    dbRef.child(joke).remove();
  };
  return (
    <div className="container">
    
      <h1>The Joke Book</h1>
      {/* create an input area to add a joke */}
      <form action="submit" className="inputFormContainer">
        <label htmlFor="input" className="sr-only">Jot down your joke</label>
        <input
          value={userInput}
          id="input"
          type="text"
          placeholder="Jot down your joke"
          onChange={handleUserInput}
        />
        <button className="button submit" onClick={handleSubmitClick}>
          Add Joke
        </button>
      </form>
    <JokesContainer jokeData={jokes} removeJoke={handleRemoveJoke} />
    
    </div>
  
  );
}
export default App;