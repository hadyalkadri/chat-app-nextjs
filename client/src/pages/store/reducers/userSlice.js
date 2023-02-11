import {createSlice} from '@reduxjs/toolkit';


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        room: '',
        message: '',
        messageList: []
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setRoom: (state, action) =>{
            state.room = action.payload
        },
        setMessage: (state, action) => {
            state.message = action.payload
        },
        setMessageList: (state, action) => {
            // if (state.messageList.indexOf(action.payload) === -1){
            //     state.messageList.push(action.payload)
            // }
            if (!state.messageList.includes(action.payload)){
            state.messageList = [...state.messageList, action.payload]
            }
            
        },
        // setFile: (state, action) => {
        //     state.file = action.payload;
        // }
        
    }
    
})


export const {setUsername, setRoom, setMessage, setMessageList} = userSlice.actions
export default userSlice.reducer