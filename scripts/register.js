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

var regemailfield = document.querySelector("#regemail");
var regpswfield = document.querySelector("#regpsw");
var regconffield = document.querySelector("#psw-repeat");

var regbtn = document.querySelector(".registerbtn");

//REGISTER

function handleRegister() {
  let email = regemailfield.value;
  let psw = regpswfield.value;
  let conf = regconffield.value;

  if (conf === psw) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, psw)
      .then(() => {
        console.log("Created account with email " + email);
        handleLogin();
      })
      .catch((error) => {
        console.log(error.message);
      });
  } else {
    alert("Password and Confirmation field don't match!");
  }
}

function handleLogin() {
  let email = regemailfield.value;
  let psw = regpswfield.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, psw)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log("Logged in as: " + user.email);
      //window.location.href = "http://my.niteapp.cf";
      //change it to navigate to home file
    })
    .catch((error) => alert(error.message));
}

regbtn.addEventListener("click", handleRegister);
