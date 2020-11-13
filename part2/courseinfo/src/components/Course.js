import React from 'react';

const Header = ({course}) => {
    return (
      <h1>{course}</h1>
    );
  }
  
const Content = ({parts}) => {
    return (
        <>
        {parts.map(part => 
            <Part key={part.id} name={part.name} exercises={part.exercises}/>
        )}
        </>
    );
}

const Part = ({name, exercises}) => {
    return (
        <p>
        {name} {exercises}
        </p>
    )
}

const Total = ({parts}) => {
    let result = parts.reduce((result, item) => result + item.exercises, 0)

    return (
        <p><strong>total of {result} exercises</strong></p>
    );
}

const Course = ({courses}) => {
    return (
        <div>
        {courses.map(course =>
        <div key={course.id}>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
        )}
        </div>
    )
} 

export default Course