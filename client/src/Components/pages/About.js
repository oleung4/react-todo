import React from "react";

export default function About() {
  return (
    // if you don't need a div element - kind of like a 'ghost' element
    <React.Fragment>
      <h3 className="text-primary" style={{ marginBottom: "0.5em" }}>
        About
      </h3>
      <p>
        This is a TodoList app incorporating NetNinja and Traversy Media
        tutorials. It utilizes React fundamentals such as components, state,
        props, events etc.
      </p>
      <p>
        There is both a local version (without a backend store) and a version
        implemented with MongoDB.
      </p>
      <p>Reactstrap was used as the styling framework of choice.</p>
    </React.Fragment>
  );
}
