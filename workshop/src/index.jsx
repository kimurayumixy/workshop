import '../assets/stylesheets/application.scss';
import React from "react";
import ReactDOM from "react-dom/client";

const Hello = (props) => {
  // const greeting = props.greeting;
  // const name = props.name;
  const { greeting, name } = props;
  return (
    <div>
      <h1>{greeting} {name}!</h1>
    </div>
  );
};

// Class react component

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(<Hello name="Erika" greeting="Hej" />);
