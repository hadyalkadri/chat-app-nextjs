const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http')
const morgan = require('morgan');
const {Server} = require('socket.io');
const fs = require('fs');
// import {db} from './firebase';
// const {ref, listAll, getDownloadURL} =  require('firebase/storage');


const hostname = 'localhost';
const port = 3002;

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(cors());

//you gotta use http or else the websocket wont respond
const server = http.createServer(app)

//const db = require('./firebase')

// const imageRef = ref(db, "images/")







const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
})

//here we are listening to an event with this name: connection
io.on("connection", (socket) => {
    socket.on("join_room", (id) => {
        socket.join(id)
        console.log(`User_${socket.id} has joined the room_${id}.`)
    })
    socket.on('send_message', async (data) => {
        socket.to(data.room).emit('recieve_message', data)
        console.log(data)
    })
    // socket.on('upload_image', (img) => {
    // //     const imgData = fs.readFileSync(img.image)
    // //     socket.to(img.room).emit('recieve_image', { image: true, buffer: imgData.toString("base64") }
    //     socket.to(img.room).emit('recieve_image', img)
    //     console.log('This is the image', img.image)
    // })
    
    socket.on('disconnect', () => {
        console.log('User is disconnected', socket.id)
    })
})


server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`)
});

