import React from "react";
import { useHistory } from "react-router-dom";
import db from "./firebase";
import "./SidebarOption.css";
import { useCollection } from "react-firebase-hooks/firestore";
import { enterRoom } from "./features/appSlice";
import { useDispatch } from 'react-redux'

function SidebarOption({ Icon, title, id, addChannelOption }) {

  const dispatch = useDispatch ()

  const history = useHistory();

  const selectChannel = () => {
    // if (id) {
    //   history.push(`/room/${id}`);
    // } else {
    //   history.push(title);
    // }
    if (id) {
      dispatch(enterRoom({
        roomId: id
      }))
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");

    if (channelName) {
      db.collection("Rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption_channel">
          <span className="sidebarOption_hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
