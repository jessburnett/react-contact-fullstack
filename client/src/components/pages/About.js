import React from 'react'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div className="p bg-dark">
        <strong>Version:</strong> 1.0.0
        <p>A fullstack React App for Keeping Contacts</p>
        <p><strong>Author - Client Side: </strong>Jess Burnett</p>   
        <p><strong>Author - API/Backend: </strong>Brad Traversy</p>   
        <p><strong>Repo: </strong><a style={{color: 'grey'}} href="https://github.com/jessburnett/react-contact-fullstack" target="_blank">Public Github Repo</a></p>     
      </div>
    </div>
  )
}

export default About
