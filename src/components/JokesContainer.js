import { Fragment } from "react";
import CustomizedRatings from './RatingSystem.js';
const JokesContainer = ({ jokeData, removeJoke }) => {

  return (
    <Fragment>
      {/* HTML for jokes to appear on the page */}
      <ul className="jokesContainer">
       
        {jokeData.map((joke) => {
          return (
            <li className="joke" key={joke.key}>
              <div className="jokeAndRating">
                <p>{joke.name}</p>
                <CustomizedRatings />
              </div>
              <button
                className="button remove"
                onClick={() => {
                  removeJoke(joke.key);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};
export default JokesContainer;