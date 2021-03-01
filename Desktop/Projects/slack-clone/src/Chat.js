import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "./firebase";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectRoomId } from "./features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";

function Chat() {
  const chatRef = useRef(null);

  const roomId = useSelector(selectRoomId);

  const [roomDetails] = useDocument(
    roomId && db.collection("Rooms").doc(roomId)
  );
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("Rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading, roomMessages]);

  // const { roomId } = useParams();
  // const [roomDetails, setRoomDetails] = useState(null);
  // const [roomMessages, setRoomMessages] = useState([]);

  // useEffect(() => {
  //   if (roomId) {
  //     db.collection("Rooms")
  //       .doc(roomId)
  //       .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
  //   }
  //   db.collection("Rooms")
  //     .doc(roomId)
  //     .collection("messages")
  //     .orderBy("timestamp", "asc")
  //     .onSnapshot((snapshot) =>
  //       setRoomMessages(snapshot.docs.map((doc) => doc.data()))
  //     );
  // }, [roomId]);

  // console.log(roomDetails);
  // console.log("MESSAGES >>>", roomMessages);

  return (
    <div className="chat">
      {roomDetails && roomMessages && (
        <>
          <div className="chat_header">
            <div className="chat_headerLeft">
              <h4 className="chat_channelName">
                {/* <strong># {roomDetails?.name}</strong> */}
                <strong># {roomDetails?.data().name}</strong>
                <StarBorderOutlinedIcon />
              </h4>
            </div>
            <div className="chat_headerRight">
              <p>
                <InfoOutlinedIcon />
                Details
              </p>
            </div>
          </div>
          <div className="chat_messages">
            {/* {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))} */}
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();
              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}

            <div className="chat_bottom" ref={chatRef}></div>
          </div>
          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}
    </div>
  );
}

export default Chat;
