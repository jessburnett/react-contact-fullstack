import React from 'react'
import Contacts from '../contacts/Contacts'
import ContactItem from '../contacts/ContactItem'

const Home = () => {
  return (
    <div className="grid-2">
      <div>{/*contact form */}</div>
      <div>
        <h1>Home Bitches</h1>
        <Contacts>
          <ContactItem/>
        </Contacts>
      </div>
    </div>
  )
}

export default Home
