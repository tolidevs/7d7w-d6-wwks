import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import angel from './images/angel.png'
import Quote from './Quote'

function App() {

  const [quote, setQuote] = useState("")

  const getQuote = () => {
    fetch("https://api.kanye.rest")
      .then(resp => resp.json())
      .then(json => setQuote(json.quote))
  }


  // for scrolling to end of page - needs empty div with same ref
  const endOfQuote = useRef(null)

  // scroll to bottom function
  const scrollToBottom = () => {
    endOfQuote.current.scrollIntoView({ behavior: "smooth" })
  }

  // when quote changes scroll to bottom
  useEffect(scrollToBottom, [quote]);

  return (
    <div className="App">
      
      <h1>YES YOU KANYE!!</h1>

      <div id="intro">
        <h2>Never has a man embodied unwavering self belief like Kanye West</h2>
        <h2>If you ever begin to doubt yourself</h2>
        <h2>Find your inner Pablo, and ask yourself</h2>
        <h2 id="wwks">What Would Kanye Say?</h2>
      </div>

      <button onClick={() => getQuote()}>Show me some Kanye wisdom!</button>
      
      <div className="quote-div">
        { quote && <Quote text={quote} />}
      </div>
      <div id="kanye">
        <img src={angel} alt="Kanye West as an angel"></img>
      </div>
      <div ref={endOfQuote} />
    </div>
  );
}

export default App;
