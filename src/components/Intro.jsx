import React from 'react'
import '../css/Intro.css'

const Intro = () => {

  window.addEventListener("scroll", function() {showFunction()});

  function showFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("intro-para").style.display = "block";
    } else {
        document.getElementById("intro-para").style.display = "none";
    }
  }

  return (
    <>
      <div id='intro-container'>
        <div className='intro-para' id='intro-para'>
          <p id='intro-text'>
            Hello! 
            <br />
            I'm a young frontend web developer who recently finished an 
            intensive course as a fullstack web developer.
            <br /> 
            I am looking for ways to expand my knowledge and 
            provide value to others by delivering web products!
          </p>
        </div>
        <div id='intro-pic'>
          <p>ADD SELFIE HERE</p>
        </div>
      </div>
    </>
  )
}

export default Intro
