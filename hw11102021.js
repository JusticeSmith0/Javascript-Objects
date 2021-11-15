// 1. Create an object called "student". Give it properties of name, age, grade (like 11th, 12th, etc), and scores (which will be an array of numbers 0-100 representing the last 5 student test scores. Also give the student object a method called "getGPA" which uses the student scores to then convert to an overall grade point average. Lastly, give the student object a method called "summary" which gives a summary of the students name, grade, and GPA.
// 2. Do research on javascript constructors and classes. How do constructors allow us to make different instances of an object?

let student = {
    name:"Justice",
    age:19 ,
    grade:"12th",
    scores:[98,84,88,80,95],
    getGPA:function(){
        let sum = 0
            for(let i = 0; i < this.scores.length; i++){
                 sum += this.scores[i]
    }
        let gpa = sum / this.scores.length
            if(gpa <= 100 && gpa >= 90){
            grade = 4
         }else if(gpa < 90 && gpa >= 80){
            grade = 3
         }else if(gpa <80 && gpa >=70){
            grade = 2
          }else if(gpa <70){
            grade = 1
    }
        return grade
    },
    summary:function(){
    let summary = `This student's name is ${this.name} he's ${this.age} years old, and graduated from ${this.grade} grade. \nHe graduated with a ${this.getGPA()}.6 gpa.`
    console.log(summary); 
    }
}
student.getGPA()
student.summary()