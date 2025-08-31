
// تهيئة Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCJQawOw8vCpNuWtBvLsoRVo8P2Brspj9A",
  authDomain: "wjoin-b0ca8.firebaseapp.com",
  projectId: "wjoin-b0ca8",
  storageBucket: "wjoin-b0ca8.firebasestorage.app",
  messagingSenderId: "376793771989",
  appId: "1:376793771989:web:cbba9fe9a828a5642dd75c",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const userList = [];
let currentObjUser = "";

async function loadUsersFromDB() {
  const snapshot = await db.collection("users").get();
  let userList = [];
  snapshot.forEach((doc) => {
    userList.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return userList;
}

// let allUserCredential = [];

// let contacts = [];
// let tasks = [];
// let allSubTasks = [];
// let category = ["User Story", "Technical Task"];
// let assignedTemplate = null;
// let currentContact = null;
// let dragElement = null;
// let draggableArea = null;



loadUsersFromDB().then((users) => {
  console.log("Users:", users);
});
