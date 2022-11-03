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
    document.getElementById("user_name").innerHTML = "🦫"+"Welcome " + user_name + '🦫';


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
      }, 500);
}


function createCode()
{
      digit1 = Math.random();
      digit1 = digit1*10
      digit1 = Math.floor(digit1)
      digit1.toString();

      digit2 = Math.random();
      digit2 = digit1*10
      digit2 = Math.floor(digit1)
      digit2.toString();

      digit3 = Math.random();
      digit3 = digit1*10
      digit3 = Math.floor(digit1)
      digit3.toString();

      digit4 = Math.random();
      digit4 = digit1*10
      digit4 = Math.floor(digit1)
      digit4.toString();

      digit5 = Math.random();
      digit5 = digit1*10
      digit5 = Math.floor(digit1)
      digit5.toString();

      code = digit1+digit2+digit3+digit4+digit5
      code *= 1.5
      console.log(code)
      
      document.getElementById("private_code").innerHTML = 'This is your code: ' + code;
      document.getElementById("login").play();
      setTimeout(()=>{
            document.getElementById('private_code').innerHTML = '#Create Private Room Number Code';
      }, 3000)
}