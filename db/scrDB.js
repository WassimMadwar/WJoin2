// const dbUrl = 'https://join-mb-default-rtdb.europe-west1.firebasedatabase.app/';
let allUserCredential = [];
let currentUser = "";

let contacts = [];
let tasks = [];
let allSubTasks = [];
let category = ["User Story", "Technical Task"];
let assignedTemplate = null;
let currentContact = null;
let dragElement = null;
let draggableArea = null;

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
// Hosting URL: https://wjoin-b0ca8.web.app
async function fetchUsers() {
  const usersCol = collection(db, "users"); // نحدد الكولكشن
  const userSnapshot = await getDocs(usersCol); // نجيب كل الدوكيومنتات
  const userList = userSnapshot.docs.map((doc) => ({
    id: doc.id, // ID تبع الدوكيومنت
    ...doc.data(), // البيانات نفسها
  }));
  return userList;
}
fetchUsers().then((users) => {
  console.log("Users:", users);
});
