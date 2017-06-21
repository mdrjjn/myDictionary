// Initialize Firebase
var config = {
  apiKey: "AIzaSyDciScHXbsat13QLSDdXilUgDjlGnXrwq4",
  authDomain: "mydictionary-cb532.firebaseapp.com",
  databaseURL: "https://mydictionary-cb532.firebaseio.com",
  projectId: "mydictionary-cb532",
  storageBucket: "mydictionary-cb532.appspot.com",
  messagingSenderId: "617505508187"
};
firebase.initializeApp(config);

function update() {

  var ref = firebase.database().ref('/russEng');

  //get the actual values
  var packet = {
    eng: document.getElementById("english").value,
    rus: document.getElementById("russian").value
  };
  console.log(packet);
  ref.push(packet);

  document.getElementById("english").value = "";
  document.getElementById('russian').value = "";
  //reload the page
  //window.location.reload();
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#updateButton').addEventListener('click', update);
});
