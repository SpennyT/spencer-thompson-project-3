import { Fragment } from "react";
const JokesContainer = ({ jokeData, removeJoke }) => {
  return (
    <Fragment>
      {/* create a UL element to hold our list items */}
      <ul className="jokesContainer">
        {/* 
        // create a list item components
        // create a joke component
        */}
        {jokeData.map((joke, index) => {
          return (
            <li className="joke" key={joke.key}>
              <p>• {joke.name}</p>
              <button
                className="button remove"
                onClick={() => {
                  // adding in functionality to remove an item
                  removeJoke(joke.key);
                }}
              >
                Remove Joke
              </button>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};
export default JokesContainer;