import React from 'react';


export default function Header() {
  return (
    <div>
      <header style={headerStyle} >
          <h1>Todolist</h1>
      </header>
    </div>
  )
}

const headerStyle = {
    background: '#03D1FE',
    textAlign: 'center',
    padding: '8px',
}