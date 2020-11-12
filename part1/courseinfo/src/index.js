import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  );
}

const Content = (props) => {
  let content = props.content;
  return (
    <>
      <p>
        {content[0].description} {content[0].num_exercises}
      </p>
      <p>
        {content[1].description} {content[1].num_exercises}
      </p>
      <p>
        {content[2].description} {content[2].num_exercises}
      </p>
    </>
  );
}

const Total = (props) => {
  let parts = props.parts;
  return (
    <p>Number of exercises {parts[0].num_exercises + parts[1].num_exercises + parts[2].num_exercises}</p>
  );
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        description: 'Fundamentals of React',
        num_exercises: 10
      },
      {
        description: 'Using props to pass data',
        num_exercises: 7
      },
      {
        description: 'State of a component',
        num_exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name}/>
      <Content content={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))