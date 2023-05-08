function testMarks1 (name, score){
    return name + " scored " + score + " in weekly test.";
}

let testMarks = function(name, score){
    return `${name} scored ${score} in weekly test.`;
}

console.log(testMarks1('Santa', 99));
console.log(testMarks('Santa', 99));

