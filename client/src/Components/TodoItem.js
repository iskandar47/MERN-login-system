import React from 'react'

function TodoItem(props) {
    return (
        <div>
            <li>{props.todo.name}</li>
        </div>
    )
}

export default TodoItem
