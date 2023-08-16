// Enums define a set of named constants.
// Typescript provides both string-based and number-based enums.
// By default, enums befin numbering theire elements starting from 0 but we can
// also change theire order by manually setting the value to one of its ElementInternals[Symbol]
// Typescript gets suppuort for enums from ES6

// we can access names using numbers by just write enum name[number]


enum colors{
    red,
    green,
    blue
}

let myfavourate_color = colors.red;
console.log("My fevourate color no is "+myfavourate_color)

enum dimantions{
    up="up",
    down="down",
    right="right",
    left="left"
}
let my_diamention = dimantions.right
console.log(my_diamention)

enum room_mates{
    mangal=1,
    suraj,
    prakash,
    nikhil,
    shravan=11,
    surendra,
    dipak,
    prajjwal
}

console.log(room_mates[2])  //suraj  

// we can also use hedroginius mapping of the enum


enum name_age{
    "nikhil"=1,
    "address"="shahpur",
    "mangal"=2,
    suraj,
    shravan,
    surendra,
    dk
}

console.log(name_age.shravan)
console.log(name_age.mangal)
