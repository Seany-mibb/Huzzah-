const firebaseConfig = {
      apiKey: "AIzaSyCewjPbmQdys4Kb-xbPZuM1sZ_Z9bno1qQ",
      authDomain: "huzzah2.firebaseapp.com",
      databaseURL: "https://huzzah2-default-rtdb.firebaseio.com",
      projectId: "huzzah2",
      storageBucket: "huzzah2.appspot.com",
      messagingSenderId: "306967415601",
      appId: "1:306967415601:web:0a0ee33e9551af74827e10"
    };

    if(!firebase.apps.length)
    {
          firebase.initializeApp(firebaseConfig);
    }

    user_name = localStorage.getItem("user_name");
    document.getElementById("login").play();
    document.getElementById("user_name").innerHTML = "&#128526;"+"Welcome " + user_name + "&#128526;";


      function addRoom()
{
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "huzzah_page.html"
}


    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "huzzah_page.html";
}

function logout()
{
      document.getElementById("logout").play();
      setTimeout(()=>{
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html"
      }, 1000);
}