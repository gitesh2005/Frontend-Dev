let userName = "Gitesh";    
let userAge = 20;        
let isActive = true;       
let skills = ["HTML", "CSS", "JS"];
let profile = { city: "Mathura", college: "GLA" };
let emptyValue = null;
let notAssigned;
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

console.table(report);


let report1 =[
    {
        label:"UserName",
        value:userName,
        type:typeof userName
    },
    {
        label:"UserAge",
        value:userAge,
        type:typeof userAge
    },
    {
        label:"IsActive",
        value:isActive,
        type:typeof isActive
    },
    {
        label:"skills",
        value:skills,
        type:Array.isArray(skills) ? "array" : typeof skills
    }
]

console.table(report1);