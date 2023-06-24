// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore, collection,

    


    addDoc,

    
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-J3q3pVGkn0st9-gRm01bEqIHVnwYBI0",
    authDomain: "ram-computacion.firebaseapp.com",
    projectId: "ram-computacion",
    storageBucket: "ram-computacion.appspot.com",
    messagingSenderId: "1027360392874",
    appId: "1:1027360392874:web:1521f6aab2927152c372d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function createOrder(data){
const orderCollectionRef = collection(db, "orders")
const response = await addDoc(orderCollectionRef, data);
return response.id;

}




