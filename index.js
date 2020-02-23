const inquirer = require('inquirer');
const connection = require('./connection.js');
const consoleTable = require('console.table');

function init(){
    inquirer.prompt([
        {
            type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'View All Departments', 'View All Roles', 'Add Employee', 'Add Department', 'Add Role', 'Update Employee Role', 'Quit Program']
    }
]).then(data => {
    switch(data.choice){
        case 'View All Employees':
        // viewEmployees();
        console.log("test passed");
        init();
        break;
        case 'View All Departments':
        // viewDepartments();
        
        
        console.log("test passed");
        init();
        break;
        case 'View All Roles':
        // viewRoles();
        
        console.log("test passed");
        init();
        break;
        case 'Add Employee':
        // addEmployee();
        
        console.log("test passed");
        init();
        break;
        case 'Add Department':
        // addDepartment();
        
        console.log("test passed");
        init();
        break;
        case 'Add Role':
        // addRole();
        
        console.log("test passed");
        init();
        break;
        case 'Update Employee Role':
        // updateEmployee();
        
        console.log("test passed");
        init();
        break;
        case 'Quit Program':
        connection.end;
        break;
    }
});
};

init();