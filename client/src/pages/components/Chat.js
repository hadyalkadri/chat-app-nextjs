import { socket } from "../index";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { setMessage, setMessageList} from "../store/reducers/userSlice";
import {FaFile} from 'react-icons/fa';
import Image from "comps/Image";

export default function Chat() {

  const [show, setShow] = useState(false)
  const [file, setFile] = useState('')
  const [temp, setTemp] = useState('')
  const [img, setImg] = useState(null)
  // const [blob, setBlob] = useState(null)
  const user = useSelector(state => state.user.username)
  const room = useSelector(state => state.user.room)
  const message = useSelector(state => state.user.message)
  const messageList = useSelector(state => state.user.messageList)


  const dispatch = useDispatch()
  

  //let imagesArray = [];
  useEffect(() => {
    socket.off('recieve_message').on('recieve_message', (data) => {
     
      dispatch(setMessageList(data))
      // setTemp(data.file)
      
      //console.log(data.file, 'This is the recieved file')
      
    })
    // socket.off('recieve_image').on('recieve_image', (image) => {
    //   console.log('We recieved the incredible data: ', image.image)
    // messageList.map( (m) => {
    //   if (blob !== file) {
    //     setBlob(m.file)
    //   }
      
    // })
      // messageList.forEach(el => {
      //   var status = imagesArray.indexOf(el)
      //   if (status === -1){
      //     // console.log('This is the shit', el, status)
      //     return imagesArray.push(el.file)
      //   }
      // });
      
      
      

  }, [socket, messageList])

  

  const sendFile = async () => {
    setShow(true)
    
  }

  const sendMessage = async () => {
    const time = new Date()
    if (message !== ''){

      let messageData = {
        room: room,
        author: user,
        message: message,
        time: time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),

        // time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getHours()
      }
     
      if (file){
        messageData.file = {
            type: 'file',
            body: file,
            mimeType: file.type,
            fileName: file.name
          }
      }
      await socket.emit('send_message', messageData)
      dispatch(setMessageList(messageData))
      setShow(false)
      // const base64Image = new Buffer.from(file).toString('base64');

      // const imageData = {
      //   room: room,
      //   image: base64Image
      // }

      // await socket.emit('upload_image', imageData)
    }
  }

  
  let imagesArray = [...new Set(messageList)]
  console.log(imagesArray)


  return (
    <div>
      <div className="title">
        <p><strong>Room:</strong> {room}</p>
        <p><strong>User:</strong> {user}</p>
      </div>
      <div style={{'textAlign': 'center'}}>
        <h3>Live Chat {messageList.length > 0 ? <Badge pill bg='info'>ON</Badge> : null}</h3>
      </div>
      <div className="chatContainer">
        {messageList.map((m, index) => (
          <div key={index} className='chatBox'>
          <div id={user === m.author ? "senderYou" : "senderOther"}>
            <div className="headMessage">
              {m.message}
            </div>
            <div>
              <strong>{m.author}</strong> {m.time}
            </div>
            {/* {file ? <Image temp={temp}></Image> : null} */}
          </div>
          </div>
        ))}
        <div className="file-upload">
            {/* {blob !== null ? <div><Image blob={blob}></Image></div> : null } */}
            {imagesArray.filter((filt)=> {
              if ( filt.file !== file){
                return filt.file
              }
            }).map((m, index) => (
                <div key={index} id={user === m.author ? "senderYou" : "senderOther"}>
                  <Image blob={m}></Image>
                </div>
                ))
               }
             
            {/* {img ? <div><img width='100px' height='100px' src={img}></img></div>: null} */}
             
          </div>
      </div>
      <div className="footer">
      <Form.Control
        type='text'
        value={message}
        placeholder='Hey...'
        onChange={(e) => {dispatch(setMessage(e.target.value))}}
        onKeyPress={(e) => {e.key === 'Enter' && sendMessage()}}
        >
      </Form.Control>
      {
        show ?
        <Form.Control
        type="file"
            onChange={(e) => {setFile(e.target.files[0]); setImg(URL.createObjectURL(e.target.files[0]))}}
        // onChange={(e) => {setFile(URL.createObjectURL(e.target.files[0]))}}
      >
      </Form.Control>
      :
      <Button className="sendButton" onClick={sendFile}><FaFile /></Button>
      }
      <Button className="sendButton" onClick={sendMessage}>&#9658;</Button>
      {/* {file ? <img alt='uploaded-image' id='output' src={file} /> : null} */}
      {/* {imageGP ? <img alt='uploaded-image' id='output' src={`data:image/png;base64,${imageGP}==`} /> : null} */}
      </div>
    </div>
  )
}
