let testArr = [86,30,0,16,51, 53,42, 48,22,69, 12,27,34, 24,95,16,32,22,52,56,71,95]
// expect     [86,30,0,16,51,*55,42,50*,22,70*,12,27,*35,24,95,16,32,22,52,56,71,95]

function gradingStudents(grades) {
    let roundedGrades = []
    grades.forEach(grade => {
        if (grade <= 37) {
            roundedGrades.push(grade);
        } else if ((grade+2)%5===0) {
            roundedGrades.push(grade+2)
        } else if ((grade+1)%5===0) {
            roundedGrades.push(grade+1)
        } else {roundedGrades.push(grade)}
    })
console.log(
    roundedGrades
    ) 
}

gradingStudents(testArr);