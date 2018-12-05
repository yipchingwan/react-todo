#steps for intro redux

* setup redux (npm install)
    * wrap App with Provider
    * createStore
* elimiate setState in ToDoList

#steps for "As a User, I can toggle todo item"
```
state :[
    "string",
    "string"
]
--------------
state :[
    {id, content, status},
    {id, content, status},
]

```

- ADD_TODO: 
{type, [string]}  -> {type, [id, content, status]}

- switch style of Todo based on todo.status
    - when I click on todo, a TOGGLE action will be dispatched
    - add reducer for TOGGLE action
    + mapStateToProp