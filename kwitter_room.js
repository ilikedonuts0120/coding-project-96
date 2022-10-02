
const firebaseConfig = {
      apiKey: "AIzaSyByR9AdyMtlheTmoDhWVs8ozxe6CtLfKYU",
      authDomain: "lets-chat-web-app-973fa.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-973fa-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-973fa",
      storageBucket: "lets-chat-web-app-973fa.appspot.com",
      messagingSenderId: "443692760082",
      appId: "1:443692760082:web:aecb36171096d67c536ccb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom (){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function logout (){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location = "index.html";
}

function redirectToRoomName (name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";console.log(name);
}
