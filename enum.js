// Enums define a set of named constants.
// Typescript provides both string-based and number-based enums.
// By default, enums befin numbering theire elements starting from 0 but we can
// also change theire order by manually setting the value to one of its ElementInternals[Symbol]
// Typescript gets suppuort for enums from ES6
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["green"] = 1] = "green";
    colors[colors["blue"] = 2] = "blue";
})(colors || (colors = {}));
var myfavourate_color = colors.red;
console.log("My fevourate color no is " + myfavourate_color);
var dimantions;
(function (dimantions) {
    dimantions["up"] = "up";
    dimantions["down"] = "down";
    dimantions["right"] = "right";
    dimantions["left"] = "left";
})(dimantions || (dimantions = {}));
var my_diamention = dimantions.right;
console.log(my_diamention);
var room_mates;
(function (room_mates) {
    room_mates[room_mates["mangal"] = 1] = "mangal";
    room_mates[room_mates["suraj"] = 2] = "suraj";
    room_mates[room_mates["prakash"] = 3] = "prakash";
    room_mates[room_mates["nikhil"] = 4] = "nikhil";
    room_mates[room_mates["shravan"] = 11] = "shravan";
    room_mates[room_mates["surendra"] = 12] = "surendra";
    room_mates[room_mates["dipak"] = 13] = "dipak";
    room_mates[room_mates["prajjwal"] = 14] = "prajjwal";
})(room_mates || (room_mates = {}));
console.log(room_mates[2]);
// we can also use hedroginius mapping of the enum
var name_age;
(function (name_age) {
    name_age[name_age["nikhil"] = 1] = "nikhil";
    name_age["address"] = "shahpur";
    name_age[name_age["mangal"] = 2] = "mangal";
    name_age[name_age["suraj"] = 3] = "suraj";
    name_age[name_age["shravan"] = 4] = "shravan";
    name_age[name_age["surendra"] = 5] = "surendra";
    name_age[name_age["dk"] = 6] = "dk";
})(name_age || (name_age = {}));
console.log(name_age.shravan);
console.log(name_age.mangal);
