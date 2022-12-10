import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import config from "./config.js";

initializeApp(config);

const db = getFirestore();
const ref = collection(db, "counter");
let clickValue = null;
let clickDoc = null;
let like = document.querySelector("#like-number");
let liking = document.querySelector(".like");

getDocs(ref).then((snapshot) => {
  clickDoc = snapshot.docs[0];
  clickValue = clickDoc.data().click;
  like.innerText = clickValue;
});

function circle() {
  let amount = 85;
  let body = document.querySelector("body");
  let i = 0;

  while (i < amount) {
    let element = document.createElement("i");
    let posX = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() * -20;
    let duration = Math.random() * 10;
    let size = Math.random() * 250;
    element.style.width = 10 + size + "px";
    element.style.height = 10 + size + "px";
    element.style.left = posX + "px";
    element.style.animationDelay = delay + "s";
    element.style.animationDuration = 20 + duration + "s";
    element.style.boxShadow = "0 30px #0002";
    body.appendChild(element);
    i++;
  }
}

liking.addEventListener("click", async function () {
  const docRef = doc(db, "counter", clickDoc.id);
  clickValue++;
  like.innerText = clickValue;
  await updateDoc(docRef, { click: clickValue });
});

circle();
