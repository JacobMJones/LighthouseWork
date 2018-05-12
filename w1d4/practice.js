var students = [{
	id: 1,
	name: "bruce",
	age: 40
}, {
	id: 2,
	name: "zoidberg",
	age: 22
}, {
	id: 3,
	name: "alex",
	age: 22
}, {
	id: 4,
	name: "alex",
	age: 30
}];

function sortOlderStudentsFirst(studentsArray) {

studentsArray.sort(function(a,b){
    return a.name.localeCompare(b.name);
});
}

function sortByAge(studentsArray) {

studentsArray.sort(function(a,b){
    return b.age - a.age;
});
}


sortByAge(students);
sortOlderStudentsFirst(students);
console.log(students);
