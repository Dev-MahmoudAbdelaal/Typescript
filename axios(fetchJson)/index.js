"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (ressponse) {
    var todo = ressponse.data;
    var ID = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(ID, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log(" todo with id is ".concat(id, " todo has title is ").concat(title, " Is it finished ").concat(completed));
};
