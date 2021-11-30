let id=1000;
let courseid=100;
let studentuserid:number;
let studentname:string;
class NewUser{
    registerId:number;
    name:string;
    age:number;
    mobilenumber:number;
    constructor(name1:string,age1:number,mobilenumber1:number){
        id++;
        this.registerId=id;
        this.name=name1;
        this.age=age1;
        this.mobilenumber=mobilenumber1;
    }

}
class course{
   
    courseId:number;
    coursename:string;
    coursedays:number;
    constructor(coursename1:string,coursedays1:number){
        courseid++;
        this.courseId=courseid;
        this.coursename=coursename1;
        this.coursedays=coursedays1;
    }

}

let UserArraylist:Array<NewUser>=new Array<NewUser>();
UserArraylist.push(new NewUser("vishwa",22,8939398306));
let enrollcourse:Array<course>=new Array<course>();
enrollcourse.push(new course("C#",10) );

function navigate(){
    (document.getElementById("homepage")as HTMLDivElement).style.display="none";
    (document.getElementById("userreg")as HTMLDivElement).style.display="block";
    
}


function signup(){
    let newusername=(document.getElementById("one")as HTMLInputElement).value;
    let newuserage=(document.getElementById("two")as HTMLInputElement).value;
    let newusermobile=(document.getElementById("three")as HTMLInputElement).value;
    UserArraylist.push(new NewUser(newusername,+newuserage,+newusermobile));
    alert("Registration Completed");
    let userid=new NewUser(newusername,+newuserage,+newusermobile);
    UserArraylist.push(userid);
    alert("your registration id is"+userid.registerId);

let user1=(document.getElementById("homepage")as HTMLDivElement); 
let log1=(document.getElementById("usereg")as HTMLDivElement);
let course1=(document.getElementById("course")as HTMLDivElement);
user1.style.display="none";
log1.style.display="block";
course1.style.display="none";
}

function enroll(){
    let user1=(document.getElementById("homepage")as HTMLDivElement) .style.display="none";
    let log1=(document.getElementById("usereg")as HTMLDivElement).style.display="none";
    let course1=(document.getElementById("course")as HTMLDivElement).style.display="block";
}
function login(){
    let user1=(document.getElementById("homepage")as HTMLDivElement) .style.display="none";
let log1=(document.getElementById("usereg")as HTMLDivElement).style.display="block";
let course1=(document.getElementById("course")as HTMLDivElement).style.display="none";

let ExistUserId = (document.getElementById('existingUserId') as HTMLInputElement).value;

for(let i =0;i<UserArraylist.length;i++){
    let ExistUserId = (document.getElementById('existingUserId') as HTMLInputElement).value;

    if(UserArraylist[i].registerId== ExistUserId ){

            studentuserid= UserArraylist[i].registerId;
            studentname= UserArraylist[i].name;
            alert("your user id is "+studentuserid );
            alert("your name is "+studentname);
         
    }
}
        alert("User Id is invalid");

        let logIn = (document.getElementById('logIn') as HTMLDivElement);

        logIn.style.display = "block";
}

 
}