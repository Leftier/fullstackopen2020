# 1.13*: anecdotes step2

Expand your application so that you can vote for the displayed anecdote.

![1.13_solution](../assests/1.13_anecdotes.png "1.13_solution")

**NB** store the votes of each anecdote into an array or object in the component's state. Remember that the correct way of updating state stored in complex data structures like objects and arrays is to make a copy of the state.

You can create a copy of an object like this:

```JSX
const points = { 0: 1, 1: 3, 2: 4, 3: 2 }

const copy = { ...points }
// increment the property 2 value by one
copy[2] += 1     
```

OR a copy of an array like this:

```JSX
const points = [1, 4, 6, 3]

const copy = [...points]
// increment the value in position 2 by one
copy[2] += 1     
```

Using an array might be the simpler choice in this case. Googling will provide you with lots of hints on how to create a zero-filled array of a desired length, like [this](https://stackoverflow.com/questions/20222501/how-to-create-a-zero-filled-javascript-array-of-arbitrary-length/22209781).