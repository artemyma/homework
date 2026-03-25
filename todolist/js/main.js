"user strict";

//ключи
const todoKeys = {
    id: 'id',
    text: 'text',
    is_completed: 'is_completed'
}

const todos = [];


//создание задачи

// создание айди для объекта в массиве 

const getNewTodoId = (todos) => {
    return todos.reduce((maxId, todo) => {
        return Math.max(maxId, todo[todoKeys.id])
        // if (todo.id > maxId) {
        //     return todo.id
        // } else {
        //     return maxId
        // }
    }, 0) + 1
}

//создание задачи (объекта) и добавление ее в массив 

const createTodo = (todos, text) => {
    const newTodo = {
        [todoKeys.id]: getNewTodoId(todos),
        [todoKeys.text]: text,
        [todoKeys.is_completed]: false,
    }
    todos.push(newTodo)
    return newTodo
};


// выполнение задачи

const completeTodoById = (todos, todoId) => {
    const todo = todos.find(todo => todo[todoKeys.id] === todoId)
    if (todo === undefined) {
        console.error(`Todo with id ${todoId} not found`);
        return hull;
    }
    todo[todoKeys.is_completed] = !todo[todoKeys.is_completed]
    return todo
}

// удаление задачи

const deleteTodoById = (todos, todoId) => {
    const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId)
    if (todoIndex === -1) {
        console.error(`Todo with id ${todoId} not found`)
        return todos
    }
    todos.splice(todoIndex, 1)
    return todos
}

