// alert('Hello todos!')
import TodoList from "./TodoList.js";


$('#wd-todo').append(
    `
    <div class="container">
        <h1>To do example</h1>
        ${TodoList()}
    </div>
    `);