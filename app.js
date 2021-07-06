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

var studentID;
var phoneNumber;

function indexFunction(){
    var button = document.getElementById("submit-button");
    

    button.onclick = function(){
        alert("hello");
        window.location.href = "./notfound.html";
    } 
/*
    button.onclick = function(){
        studentID = document.getElementById("student-id").value;
        phoneNumber = document.getElementById("phone-no").value;
        console.log("Clicked!");
        console.log("SID is " + studentID);
        console.log("Phone no is " + phoneNumber);
    }
*/

}

