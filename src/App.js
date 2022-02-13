import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Tribute from './Tribute.js';
import Lata  from './Images/Lata.jpg';


class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>Lata Mangeshkar</h1>
        <h4>The Queen of Melody</h4>
        <div className="image">
      <Tribute
        Images = {Lata}
        Text= "Lata Mangeshkar{1929-2022}"
      />
        </div>

    <div className = "biography">
      <h2>A Short Biography of Lata Mangeshkar</h2>
      <ul className="about">
      <li>Lata Manageshkar was born as Hema Mangeshkar.</li>
      <li>She was an Indian playback singer and occasional music composer.</li>
      <li>She is widely considered to have been one of the greatest and most influential singers in India.</li>
      <li>Lata Mangeshkar recorded songs in over thirty-six Indian languages and a few foreign languages, though primarily in Hindi, Bengali, Marathi.</li>
      <li>In 1989 the Dadasaheb Phalke Award was bestowed on her by the Government of India.</li>
      <li>In 2001, in recognition of her contributions to the nation, she was awarded the Bharat Ratna, India's highest civilian honour; she is only the second female singer, after M. S. Subbulakshmi, to receive this honour.</li>
      <li>Her last recorded song was "Saugandh Mujhe Is Mitti ki" released on 30 March 2019 as a tribute to the Indian army and Nation.</li>
      <li>She was one of the first Indian playback singers to ever perform at Royal Albert Hall in London, UK.</li>
      <li>On 10 February 2022, Mangeshkar's ashes were immersed in the Godavari River at Ramkund, Nashik by her sister Asha Bhosle and Nephew Adinath Mangeshkar.</li>
      </ul>
      <p>One has to be fully committed to one's career. Otherwise, there's no point.</p>
      <p> <i>-- Lata Mangeshkar --</i></p>
        <h4>If you have time, you should read more about this incredible human being on her <a href = "https://en.wikipedia.org/wiki/Lata_Mangeshkar">Wikipedia entry</a></h4>

      </div>      
      
     
      </div>
    )
  }
}
export default App;
