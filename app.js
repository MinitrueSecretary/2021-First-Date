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

