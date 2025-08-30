
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// إعدادات على Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCJQawOw8vCpNuWtBvLsoRVo8P2Brspj9A",
  authDomain: "wjoin-b0ca8.firebaseapp.com",
  projectId: "wjoin-b0ca8",
  storageBucket: "wjoin-b0ca8.firebasestorage.app",
  messagingSenderId: "376793771989",
  appId: "1:376793771989:web:cbba9fe9a828a5642dd75c",
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// let allUserCredential = [];
// let currentUser = "";

// let contacts = [];
// let tasks = [];
// let allSubTasks = [];
// let category = ["User Story", "Technical Task"];
// let assignedTemplate = null;
// let currentContact = null;
// let dragElement = null;
// let draggableArea = null;
const userList = [];

async function loadUsersFromDB() {
  const usersCol = collection(db, "users"); 
  const userSnapshot = await getDocs(usersCol); 

  for (const doc of userSnapshot.docs) {
    userList.push({
      id: doc.id,
      ...doc.data(),
    });
  }
  return userList;
}

loadUsersFromDB().then((users) => {
  console.log("Users:", users);
});
