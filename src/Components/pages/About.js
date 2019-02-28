import React from 'react'

export default function About() {
  return (
    // if you don't need a div element - kind of like a 'ghost' element
    <React.Fragment>
      <h3 className="text-primary">About</h3>
      <p>This is a TodoList app incorporating NetNinja and Traversy Media tutorials</p>
    </React.Fragment>
  )
}
