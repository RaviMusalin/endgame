

/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: Build a status section below the header.
 * For now, you can just hard-code in the styles for
 * a winning game, and we'll make it more dynamic
 * later.
 */

function App() {
  return (
    <div className="App">
      <header>
        <h1>Assembly Endgame:</h1>
        <p>Guess the word in under 8 attempts to keep the <br />programming world safe from Assembly!</p> 
      </header>
      <div className="gameStatus">You Win!<br />Well Done</div>
    </div>
  );
}

export default App;
