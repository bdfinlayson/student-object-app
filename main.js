function Student(studentArr) {

  this.studentName = studentArr[0];
  this.studentId = studentArr[1];
  this.studentMajor = studentArr[2];
  this.studentAccomodation = studentArr[3];

  return
}

$('#generateIdButton').on('click', function() {

  var newId = makeNewId()
  printNewId(newId)

})


function makeNewId() {
  var newId = Math.floor(Math.random() * (9999 - 0001)) + 0001;

  return newId;

}

function printNewId(newId) {

  $('#studentId').text(newId)

}

$('#submitButton').on('click', function() {


  var studentArr =  getStudentInfo()
  var newStudent = new Student(studentArr)
  printNewStudentInfo(newStudent)

})

function getStudentInfo(){

  var studentName = $('#studentName').val();
  var studentId = $('#studentId').text();
  var studentMajor = $('#studentMajor').val();
  var studentAccomodation = $('#studentAccomodation').val();

  var studentArr = [studentName, studentId, studentMajor, studentAccomodation];
  return studentArr;

}

function printNewStudentInfo(newStudent) {

  $('tbody').append(
    '<tr><td>' + newStudent.studentName +
    '</td><td>' + newStudent.studentId +
    '</td><td>' + newStudent.studentMajor +
    '</td><td>' + newStudent.studentAccomodation +
    '</td></tr>'
  );

}




//var nssStudent = new Student(name, id, major, accomodation);
