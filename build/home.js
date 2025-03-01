import { getAuth, onAuthStateChanged , signOut   } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      window.location = 'index.html'
    }
  });

  const logout = document.querySelector('#logout-btn');

  logout.addEventListener('click' , () => {
    signOut(auth).then(() => {
        console.log('logout succefully');
        window.location= 'index.html'
      }).catch((error) => {
        console.log(error);
      });
  })
  