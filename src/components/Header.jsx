import React from 'react'

export const Header = ( {toggleModal,nbOfContacts}) => {
  //props.toggleModal, nbOfContacts
  return (
    <header className='header'>
      <div className='container'>
        <h3>Contact List ({nbOfContacts})</h3>
        <button onClick={() => toggleModal(true)} className='btn'>
          <i className='bi bi-plus-square'></i>Add New Contact</button>
      </div>
    </header>
  )
}

export default Header;
