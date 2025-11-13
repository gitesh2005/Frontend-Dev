// Q2: Multi-Type Data Summary
// Simulate a small database summary using different data types.

// Declaring different data types
let userName = "Gitesh";            // string
let userAge = 20;                   // number
let isActive = true;                // boolean
let skills = ["HTML", "CSS", "JS"]; // array
let profile = { city: "Mathura", college: "GLA" }; // object
let emptyValue = null;              // null
let notAssigned;                    // undefined

// Creating a summary array of objects for console.table()
let report = [
    {
        label: "User Name",
        value: userName,
        type: typeof userName
    },
    {
        label: "User Age",
        value: userAge,
        type: typeof userAge
    },
    {
        label: "Is Active",
        value: isActive,
        type: typeof isActive
    },
    {
        label: "Skills",
        value: skills,
        type: Array.isArray(skills) ? "array" : typeof skills
    },
    {
        label: "Profile",
        value: profile,
        type: typeof profile
    },
    {
        label: "Empty Value",
        value: emptyValue,
        type: emptyValue === null ? "null" : typeof emptyValue
    },
    {
        label: "Not Assigned",
        value: notAssigned,
        type: typeof notAssigned
    }
];

// Printing the formatted report
console.table(report);
