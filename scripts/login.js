const firebaseConfig = {
  apiKey: "AIzaSyB98n99ru9pqBIokhNyWy8Xk3tBB-KY5o0",
  authDomain: "nite-mobile-396a5.firebaseapp.com",
  databaseURL:
    "https://nite-mobile-396a5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nite-mobile-396a5",
  storageBucket: "nite-mobile-396a5.appspot.com",
  messagingSenderId: "463647968516",
  appId: "1:463647968516:web:7c3bf140c1c52b9905d451",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// LOGIN AND REGISTER FIELDS DECLARATION
var logemailfield = document.querySelector("#logemail");
var logpswfield = document.querySelector("#logpsw");

var logbtn = document.querySelector(".loginbtn");

//LOGIN

function handleLogin() {
  let email = logemailfield.value;
  let psw = logpswfield.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, psw)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log("Logged in as: " + user.email);
      window.location.href = "http://my.niteapp.cf";
      //later change it to go to the home file
    })
    .catch((error) => alert(error.message));
}

logbtn.addEventListener("click", handleLogin);
