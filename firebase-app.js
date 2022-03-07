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

var emailfield = document.querySelector("#regemail");
var pswfield = document.querySelector("#regpsw");
var conffield = document.querySelector("#psw-repeat");

var btn = document.querySelector(".registerbtn");

function handleRegister() {
  let email = emailfield.value;
  let psw = pswfield.value;
  let conf = conffield.value;

  if (conf === psw) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, psw)
      .then(() => {
        console.log("Created account with email " + email);
      })
      .catch((error) => {
        console.log(error.message);
      });
  } else {
    alert("Password and Confirmation field don't match!");
  }
}

btn.addEventListener("click", handleRegister);
