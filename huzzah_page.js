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



    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
         console.log(message_data);
         Name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4>" + Name + "<img class = 'user_tick' src = 'tick.png'></h4>";
         message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
         like_button = "<button class = 'btn-grad' id = "+firebase_message_id+" value = "+like+" onclick = 'updateLike(this.id)'>";
         span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like: " + like + "</span></button> <hr>";

         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();


function logout()
{
      document.getElementById("logout").play();
      setTimeout(()=>{
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "huzzah_room.html"
      }, 500);
}



function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = '';

      document.getElementById("ring").play()
}

function updateLike(message_id)
{
      console.log("Clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;
      console.log(update_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like: update_likes
      })
      document.getElementById("like").play();
}