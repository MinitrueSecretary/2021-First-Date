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

var studentID = '';
var phoneNumber = '';
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
        var isFound = findAndCheckID(studentID,phoneNumber);

        
        // window.location.href = "./notfound.html";
       
    } 


}

async function findAndCheckID(studentID,phoneNumber){
    const snapshot = await newIntanias.where('student-id','==',studentID).get();
    console.log(snapshot);
    if (snapshot.empty) {
        console.log('No matching documents.');
        window.location.href = "./notfound.html";
        return false;
    } 
    snapshot.forEach(doc => {
        var trueNumber = doc.get('phone-no');
        if(trueNumber == phoneNumber){
           no = doc.get('no');
           zoomName = doc.get('zoom-name');
           meetingRound = doc.get('meeting-round');
           console.log(no,zoomName,meetingRound)
           window.location.href = "./showinfo.html";
           return true;
        }
        window.location.href = "./notfound.html";
        return false;
      });
}



