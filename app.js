// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA_4Fr0-tEMG8Kkrn9xbyj4mueilp2sjf4",
    authDomain: "firstdate2021-64031.firebaseapp.com",
    projectId: "firstdate2021-64031",
    storageBucket: "firstdate2021-64031.appspot.com",
    messagingSenderId: "1087619777179",
    appId: "1:1087619777179:web:9064e248e0eec6bf6efc3e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const newIntanias = db.collection("newIntanias");
const meetingRounds = db.collection("meetingRounds");

var studentID;
var phoneNumber;
var no;
var zoomName;
var meetingRound;

function indexFunction(){
    var button = document.getElementById("submit-button");
    button.onclick = function(){
        studentID = document.getElementById("student-id").value.trim();
        phoneNumber = document.getElementById("phone-no").value.trim();
        console.log("SID is " + studentID);
        console.log("Phone no is " + phoneNumber);
        sessionStorage.setItem("student-id", studentID);
        sessionStorage.setItem("phone-no", phoneNumber);
        var isFound = findAndCheckID(studentID,phoneNumber);

        // window.location.href = "./notfound.html";
    } 

}

function notfoundFunction(){
    //get the wrong data and set it to red
    studentID = sessionStorage.getItem("student-id");
    phoneNumber = sessionStorage.getItem("phone-no");
    var studentIDRef = document.getElementById("student-id");
    var phoneNumberRef = document.getElementById("phone-no");
    studentIDRef.value = studentID;
    studentIDRef.setAttribute('style','color:#A9361B');
    phoneNumberRef.value = phoneNumber
    phoneNumberRef.setAttribute('style','color:#A9361B');

    document.getElementById("phone-no").value
    indexFunction();
}

async function findAndCheckID(studentID,phoneNumber){
    //const snapshot = await newIntanias.where('student-id','==',studentID).get();
    const snapshot = await newIntanias.doc(studentID).get();
    console.log(snapshot.exists);
    if (!snapshot.exists) {
        console.log('No matching documents.');
        window.location.href = "./notfound.html";
        return false;
    } 
    var trueNumber = snapshot.get('phone-no');
    if(trueNumber == phoneNumber){
        no = snapshot.get('no');
        meetingRound = snapshot.get('meeting-round');

        sessionStorage.setItem("no", no);
        sessionStorage.setItem("meeting-round", meetingRound);

        //console.log(no,zoomName,meetingRound)
        window.location.href = "./showinfo.html";
        return true;
     }

     window.location.href = "./notfound.html";
     return false;
    /*snapshot.forEach(doc => {
       
        if(trueNumber == phoneNumber){
           no = doc.get('no');

           //zoomName = doc.get('zoom-name');
           meetingRound = doc.get('meeting-round');

           sessionStorage.setItem("no", no);
           //sessionStorage.setItem("zoom-name", zoomName);
           sessionStorage.setItem("meeting-round", meetingRound);

           //console.log(no,zoomName,meetingRound)
           window.location.href = "./showinfo.html";
           return true;
        }
        window.location.href = "./notfound.html";
        return false;
      });*/
}

function writeDetail(){
    var noOut = document.getElementById('no');
    var studentIDOut = document.getElementById('student-id');
    var phoneNumberOut = document.getElementById('phone-no');
    var zoomNameOut = document.getElementById('zoom-name');
    var meetingRoundOut = document.getElementById('meeting-round');
    
    
    noOut.innerHTML = sessionStorage.getItem("no");
    studentIDOut.innerHTML += sessionStorage.getItem("student-id");
    phoneNumberOut.innerHTML += sessionStorage.getItem("phone-no");
    zoomNameOut.innerHTML += sessionStorage.getItem("no") + "_ชื่อเล่น";
    meetingRoundOut.innerHTML = sessionStorage.getItem("meeting-round");
    writeZoomDetails(sessionStorage.getItem("meeting-round"));
}

async function writeZoomDetails(meetingRound){
    var meetingDayOut = document.getElementById('meeting-day');
    var meetingTimeOut = document.getElementById('meeting-time');
    var meetingLinkOut = document.getElementById('meeting-link');
    var meetingIDOut = document.getElementById('meeting-id');
    var meetingPasswordOut = document.getElementById('meeting-password');

    const doc = await meetingRounds.doc(meetingRound).get();
    //console.log(getNumberNames(meetingRound));
    //console.log(doc.data());
    //console.log(doc.get('time'));
    meetingDayOut.innerHTML = doc.get('day');
    meetingTimeOut.innerHTML += doc.get('time');
    var link = doc.get('link');
    meetingLinkOut.innerHTML = link;
    meetingLinkOut.setAttribute('href', link);
    meetingIDOut.innerHTML += doc.get('id');
    meetingPasswordOut.innerHTML += doc.get('password');
}


