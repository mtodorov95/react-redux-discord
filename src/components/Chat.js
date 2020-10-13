import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import "./Chat.css"
import ChatHeader from './ChatHeader'
import Message from './Message'
import { useSelector } from 'react-redux';
import db from '../config/firebase'
import firebase from 'firebase'

function Chat() {
    const channelName = useSelector(state => state.app.channelName?.channelName);
    const channelId = useSelector(state => state.app.channelId);
    const user = useSelector(state => state.user.user);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        if (channelId){
            db.collection('channels').doc(channelId).collection('messages').orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
        }
    }, [channelId])

    const sendMessage = (e) => {
        e.preventDefault();
        db.collection('channels').doc(channelId).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user
        })

        setInput('');
    }

    return (
        <div className="chat">
            <ChatHeader channelName={channelName}/>
            <div className="chat__messages">
                {messages.map(message => (
                    <Message 
                    timestamp={message.timestamp}
                    message={message.message}
                    user={message.user}
                    />
                ))}
            </div>
            <div className="chat__input">
                <AddCircle fontSize="large" />
                <form>
                    <input placeholder={`Message #${channelName}`}
                    disabled={!channelId}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    />
                    <button 
                    className="chat__inputButton" 
                    type="submit"
                    onClick={sendMessage}
                    >
                    
                        Send Message
                        </button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftcard fontSize="large"/>
                    <Gif fontSize="large"/>
                    <EmojiEmotions fontSize="large"/>
                </div>
            </div>
        </div>
    )
}

export default Chat
