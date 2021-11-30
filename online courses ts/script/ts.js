var id = 1000;
var courseid = 100;
var NewUser = /** @class */ (function () {
    function NewUser(name1, age1, mobilenumber1) {
        id++;
        this.registerId = id;
        this.name = name1;
        this.age = age1;
        this.mobilenumber = mobilenumber1;
    }
    return NewUser;
}());
var course = /** @class */ (function () {
    function course(coursename1, coursedays1) {
        courseid++;
        this.courseId = courseid;
        this.coursename = coursename1;
        this.coursedays = coursedays1;
    }
    return course;
}());
var UserArraylist = new Array();
UserArraylist.push(new NewUser("vishwa", 22, 8939398306));
var enrollcourse = new Array();
enrollcourse.push(new course("C#", 10));
function navigate() {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("userreg").style.display = "block";
}
function signup() {
    var newusername = document.getElementById("one").value;
    var newuserage = document.getElementById("two").value;
    var newusermobile = document.getElementById("three").value;
    UserArraylist.push(new NewUser(newusername, +newuserage, +newusermobile));
    alert("Registration Completed");
    var userid = new NewUser(newusername, +newuserage, +newusermobile);
    UserArraylist.push(userid);
    alert("your registration id is" + userid.registerId);
    var user1 = document.getElementById("homepage");
    var log1 = document.getElementById("usereg");
    var course1 = document.getElementById("course");
    user1.style.display = "none";
    log1.style.display = "block";
    course1.style.display = "none";
}
function enroll() {
    var user1 = document.getElementById("homepage").style.display = "none";
    var log1 = document.getElementById("usereg").style.display = "none";
    var course1 = document.getElementById("course").style.display = "block";
}
function login() {
    var user1 = document.getElementById("homepage").style.display = "none";
    var log1 = document.getElementById("usereg").style.display = "block";
    var course1 = document.getElementById("course").style.display = "none";
}
