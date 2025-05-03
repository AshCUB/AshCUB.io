//problem #1
console.log("JavaScript file is working!");

//problem #1
const employeeData = {
    "Employee Data": [
    {
        "First Name" : "Sam",
        "Department" : "Tech",
        "Designation" : "Manager",
        "Salary" : 40000,
        "Raise Eligible" : true
    },
    {
        "First Name": "Mary",
        "Department": "Finance",
        "Designation": "Trainee",
        "Salary": 18500,
        "Raise Eligible": true
    },
    {
        "First Name": "Bill",
        "Department": "HR",
        "Designation": "Executive",
        "Salary": 21200,
        "Raise Eligible": false
    }
]
}
console.log("Problem 1: ", employeeData);

//problem #2
const companyDetails = {
    "Company Name": "Tech Stars",
    "Website": "www.techstars.site",
    "Employees": employeeData["Employee Data"]
};
console.log("Problem 2: ", companyDetails);

//problem #3
employeeData["Employee Data"].push(
    {
        "First Name": "Anna",
        "Department": "Tech",
        "Designation": "Executive",
        "Salary": 25600,
        "Raise Eligible": false
    }
)
console.log("Problem 3: ", employeeData);

//problem #4
let total_salary =0;
for(let i=0;i<employeeData["Employee Data"].length; i++){
    total_salary = total_salary + employeeData["Employee Data"][i].Salary;
}
console.log("Problem 4: ", total_salary);

//problem #5
function get_raise(employee)
{
    if(employee["Raise Eligible"] === true){
        employee["Salary"] = employee["Salary"] * 1.10;
        employee["Raise Eligible"] = false;
    }
}
for(let i=0; i<employeeData["Employee Data"].length; i++){
    get_raise(employeeData["Employee Data"][i]);
}
console.log("Problem 5: ", employeeData);

//problem #6
for(let i=0; i<employeeData["Employee Data"].length; i++)
{
    const current_employee = employeeData["Employee Data"][i];
    if(current_employee["First Name"]=="Anna" || current_employee["First Name"]=="Sam"){
        current_employee["wfh"] = true;
    }
    else{
        current_employee["wfh"] = false;
    }
}
console.log("Problem 6: ", employeeData);

