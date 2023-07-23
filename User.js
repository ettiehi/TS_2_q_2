"use strict";
exports.__esModule = true;
exports.logPerson = exports.users = void 0;
var users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];
exports.users = users;
function logPerson(user) {
    console.log(" - " + user.name + ", " + user.age);
}
exports.logPerson = logPerson;
