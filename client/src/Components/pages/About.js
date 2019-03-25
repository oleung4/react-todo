import React from 'react'

export default function About() {
  return (
    // if you don't need a div element - kind of like a 'ghost' element
    <React.Fragment>
      <h3 className="text-primary">About</h3>
      <p>This is a TodoList app incorporating NetNinja and Traversy Media tutorials. It utilizes React fundamentals such as components, state, props, events etc.</p>
      <p>There is both a local version (without a backend store) and a version that uses mockAPI (to mimic a backend and allowing for API calls).</p>
      <p>Reactstrap was used as the styling framework of choice.</p>
    </React.Fragment>
  )
}
