// import { useState } from 'react';

const NotificationsHeader = (props) => {

  const onMarkAsRead = (e) => {
    props.onMarkAsRead();
  };

  const onTestThing = (e) => {
    props.onTestThing();
  };

  return (
    <header className="notifications-header">
      <div className="col notifications-header-unread">
        <h2>Notifications</h2>
        <span>4</span>
      </div>
      <div className="col mark-as-read">
        <button onClick={onMarkAsRead} className="mark-as-read-btn">Mark all as read</button>
        <button onClick={onTestThing}>Test thing</button>
      </div>
    </header>
  )
}

export default NotificationsHeader;