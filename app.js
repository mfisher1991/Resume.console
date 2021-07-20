let myName = "Marvelles Fisher"

console.log("Name: " + myName.toUpperCase())
console.log("Career: Full Stack Web Developer")
console.log("Description: Design web code.")

console.log(" ")

let myInterests = ["Games", "Sports", "Traveling", "Bars"]

console.log("My Interests:")

for (i = 0; i < myInterests.length; i++) {
    console.log("* " + myInterests[i])
}

console.log("\n")

function displayPosition(company, job, description) {
    console.log("* " + company + ", " + job + ", " + description)
};

console.log("My Previous Experience:")

displayPosition("Milo's Hamburgers", "Cook", "did everything")
displayPosition("Innovate Birmingham", "JBS Mental Health", "Help mental ill people learn how to survive on there own and take medications on time.")


let skills = [{
        skill: "Coding",
        isCool: true
    },
    {
        skill: "Working Out",
        isCool: true
    },
    {
        skill: ";Managing",
        isCool: false
    },
    {
        skill: "Preparing Food",
        isCool: true
    },
    {
        skill: "being in band",
        isCool: false
    }
]

function displaySkills(theSkill, isItCool) {
    if (isItCool == true) {
        console.log("* BAM: " + theSkill)
    } else {
        console.log("* " + theSkill)
    }
}


console.log("\n")
console.log("My Skills:")


for (i = 0; i < skills.length; i++) {
    displaySkills(skills[i].skill, skills[i].isCool)
}