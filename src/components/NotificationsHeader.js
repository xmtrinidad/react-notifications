// import { useState } from 'react';

const NotificationsHeader = (props) => {

  const onMarkAsRead = (e) => {
    props.onMarkAsRead();
  };

  const displayChangeHandler = (e) => {
    props.onDisplayChange(e.target.value)
  };

  return (
    <header className="notifications-header">
      <div className="col notifications-header-unread">
        <h2>Notifications</h2>
        <span>4</span>
      </div>
      <div className="col mark-as-read">
        <button onClick={onMarkAsRead} className="mark-as-read-btn">Mark all as read</button>
        <div className="display-dropdown">
          <label htmlFor="display-dropdown">Display: </label>
          <select onChange={displayChangeHandler} name="display" id="display-dropdown">
            <option value="all">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
    </header>
  )
}

export default NotificationsHeader;