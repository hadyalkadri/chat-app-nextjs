// //  const { initializeApp } = require('firebase/app');
// // const { getFirestore, collection, getDocs } = require('firebase/firestore/storage');

const firebase = require('firebase')

// const admin = require('firebase-admin')
// const {Storage} = require('@google-cloud/storage')
// const fs = require('fs')

//const serviceAccount = require('firebase-adminsdk-oavre@imageupload-14b0c.iam.gserviceaccount.com')

 


// // const app = initializeApp(firebaseConfig);
// // const db = getFirestore(app)

// firebase.initializeApp(firebaseConfig)
// const db = firebase.firestore()

// const Image = db.collection('images/')

// module.exports = {Image}

// // admin.initializeApp({
// //     credential: admin.credential.cert({
// //         "type": "service_account",
// //     "project_id": "imageupload-14b0c",
// //     "private_key_id": "a2cbd6f6fed749c2f3a9cc226a02620577871113",
// //     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCetiVfv3TuTRU1\n+vVxDEq4Zxfm7b+mA7iczvpw8kD8the0wUwPvgDGdbRBq1g/5JCZpgQCp2rJrabs\nlVETSktyBVe41UmzbaFRy5Qk2SpLWYV8gE+fNKniH7+st8rjLddWxWoalVVsNJtU\nHcmvppXzP3/bHhFeTTc35agolkuPI+DvwOVDsX4GY+yiPNYJFG8eqnT09RGI6leG\nRjiFKHqX5xEtquB9w9YlQA6F57RzqBsutHwdOgFFjSlp04UomfHJEiWxmH/J5x05\nFSC3irR531u8767bXL+VD7+tUbG2WWMIkMpnkVi7OFx0xO53vJx+DCKM1csYuCbl\na79GNhpvAgMBAAECggEACQfSLpWFQL3wFAc4ifsqET4EdSZX/kk96uY4B88w9XAi\n/yz0d/zWrHQsEoR+W/xUYfm5RrFh+SHBWrrQRym2C0HUkPbJ38TAJhhQUJxutKTe\nXIwse6GSfQRTcq9uguir1Qsck3Cl0KdZozqirDTtWU7mpoAaeuQn3S1bGRwcJoPM\nKeofB/PnU8MNfgFLeTWf+0EkuzZnLqakBueT7TFlwiL4Zy1Vhq7XJX8eIfn5gECu\n10y3+0AnOrh3zQ/0aORLu0HJWajrtNqgmP+aLf+xlRpUZSruPRid/XRry8GJQhuH\nsKv8kNj/tGf9nPMNxHwzsWRYy4YdWT2S+eEV/zpt4QKBgQDON/oAJeDgVrJUsQ2b\nGlRiiOXa+oySuA7NjRs8jFkYFcn9d1heE+00Vm4aLkSfDZGims5+NwFZuJCHGGMw\nyLn9Zrb2WgcyxVsfcGXKSqHqzj5AvwuIA07jGsxy+PkpOiINCmhTi2USBxqnAUkn\nmo86/tbRY95jce+na8JTlq5GfwKBgQDFBktTo8H5W8am53NeL0aGCYFTCYCQl8CD\nNUPHZqEvmeKvvv2KK3pgbcxIKKwc3bvp7AINATEjeYK+Fd3Ls1/yN9NZ8ZohtuEo\nB7FiiRCiWOknqHeEjQdDyuZULN/X8GNsfxtnfltVOtSYEpItL4+KKo8H/J+/BR15\nINKwPx6UEQKBgQCQWNpkFB+OqOD3K1/su8dpmY3bdBnF8ZRbCXSRM2SB2W6kP0/Z\nunUFd6JmLRDXjLXubhIwguwtE2YHSmjUEw0tdSKI2ofDYCXiodh+ezNPmsI0rAW0\nVSx5B58os2IlG44ONsTEBgTfU52yXNIKKMQtdYiE1TUrwusP8/v4arbenQKBgQC2\nL3jOEZoXc7cAtProN7z1yqpMV3gLvFdmvIU9SHh55MlKC8i00DlsG3uPqhRk6OCP\nkQ3gap6+l+i+zsd2ShrJhren7xHAZTRUaLCtVeMMzDxk0JIb/rCeDmvnoEsoiX/W\nXr6/d4cLC8h0CpAiulz3vRzfnMk2wIsda62HDga/kQKBgH8sPUT0+LWW46lRqGKP\nEyWYayTaC+Z9mSttXlXGzONj+NzCB2NYaM5q1bWBF4/4m7toZq7TC7VEsvgnzqd5\nYfj7zz3YUF6TJtRje78TPh6DrhBPkjQgGeQuxyX3+V7spwaDL17riG+li9kPYFx4\nRVw7BPmdaQyZ4HPbkmZaC3gZ\n-----END PRIVATE KEY-----\n",
// //     "client_email": "firebase-adminsdk-oavre@imageupload-14b0c.iam.gserviceaccount.com",
// //     "client_id": "115837892462961907869",
// //     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
// //     "token_uri": "https://oauth2.googleapis.com/token",
// //     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
// //     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-oavre%40imageupload-14b0c.iam.gserviceaccount.com"
// //     }),
// //     databaseURL: 'https://imageupload-14b0c-default-rtdb.firebaseio.com/'

// // })
firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()
const storageRef = storage.ref()

const file = './Screenshot.png'
const fileRef = storageRef.child('images/' + file.name)

fileRef.put(file).then(() => {
    console.log('Image is uploaded successfully')
})



// module.exports = {db}
