import { getAuth, onAuthStateChanged , signOut   } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";
import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { db } from "./firebaseconfig.js";



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
  

  

  const form = document.querySelector("#form");
  const todo = document.querySelector("#todo");
  const ul = document.querySelector("#ul");
  
  const arr = [];
  
  async function getData() {
    const querySnapshot = await getDocs(collection(db, "todos"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      arr.push(doc.data());
    });
    console.log(arr);
    renderTodo();
  }
  
  getData();
  
  function renderTodo() {
    ul.innerHTML = "";
    if (arr.length === 0) {
      ul.innerHTML = "no data found";
      return;
    }
    arr.map((item) => {
      ul.innerHTML += `
          <li>${item.todo}</li>
          `;
    });
  }
  
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    arr.push({
      todo: todo.value,
    });
    renderTodo();
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todo: todo.value,
      });
      todo.value = "";
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  });