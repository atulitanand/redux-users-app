# REDUX for async tasks

You can manage async data in redux via two methods

1. Via 3rd party liberary like redux thunk
2. Unhealthy but simple way : Kind of a ruse

I am not using the second way because it adds additional compelexiy of the middle ware.

## Main concept behind 2nd method

Since state of the application changes everytime the state tree changes. I can dispatch `onCompletion` action inside the `asyncLoading` action inside the `reducer`.
And so everytime I ask for `asyncAction`.It can set `isLoading field to true` and after a while when the promise fullfils I can again set the `loading to false` which will return us the new state of the tree.
