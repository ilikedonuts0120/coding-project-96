//YOUR FIREBASE LINKS
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

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
