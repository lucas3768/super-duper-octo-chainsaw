//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyDmX_Wbu4rDT6gNaA8FD-ZQGlfIUag1nW4",
  authDomain: "v--eegvegvw.firebaseapp.com",
  databaseURL: "https://v--eegvegvw-default-rtdb.firebaseio.com",
  projectId: "v--eegvegvw",
  storageBucket: "v--eegvegvw.appspot.com",
  messagingSenderId: "297757020829",
  appId: "1:297757020829:web:60ffe8091a69e4aa243a74",
  measurementId: "G-WYZ48VRH7C"
};
  // Initialize Firebase // 🗿🍷🗿🍷🗿🍷
firebase.initializeApp(firebaseConfig);
 userName = localStorage.getItem("userName");
 console.log(userName);
document.getElementById("userName").innerHTML= "ben vindo"+userName+"!";
function addRoom {
    var roomName = document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomName).update({ purpose : "adicionar nome de sala" });
localStorage.setItem("roomName",roomName);
window.location("kwitterPage.html");
}
function getData() {
  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
   snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
     roomNames = childKey;
     console.log("nome da sala"+roomNames);
     var row = "<div class = 'roomName' id=" + roomNames +" onclick = 'redirectToRoomName(this.id)'>"+ roomNames +"</div> <hr>";
     document.getElementById("output").innerHTML+= row;
    }); }); }
  getData();
  function redirectToRoomName(name){ console.log(name);
  localStorage.setItem("roomname",name);
  window.location = "kwitterpage.html"

  }
  function logout() {
    window.location("index.html");
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
  }