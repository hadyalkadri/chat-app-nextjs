// //  const { initializeApp } = require('firebase/app');
// // const { getFirestore, collection, getDocs } = require('firebase/firestore/storage');

const firebase = require('firebase')

// const admin = require('firebase-admin')
// const {Storage} = require('@google-cloud/storage')
// const fs = require('fs')

//const serviceAccount = require('firebase-adminsdk-oavre@imageupload-14b0c.iam.gserviceaccount.com')

 
const firebaseConfig = {
    apiKey: "AIzaSyBZ3juhZxb6a313jNUCeC5I0slaIEQVgo4",
    authDomain: "imageupload-14b0c.firebaseapp.com",
    projectId: "imageupload-14b0c",
    storageBucket: "imageupload-14b0c.appspot.com",
    messagingSenderId: "818028057254",
    appId: "1:818028057254:web:337ded5849be42544c1a67"
};

// // const app = initializeApp(firebaseConfig);
// // const db = getFirestore(app)

// firebase.initializeApp(firebaseConfig)
// const db = firebase.firestore()

// const Image = db.collection('images/')

// module.exports = {Image}

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()
const storageRef = storage.ref()

const file = './Screenshot.png'
const fileRef = storageRef.child('images/' + file.name)

fileRef.put(file).then(() => {
    console.log('Image is uploaded successfully')
})



// module.exports = {db}
