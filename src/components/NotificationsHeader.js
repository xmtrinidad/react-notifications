// import { useState } from 'react'

const NotificationsHeader = () => {

  return (
    <header className="notifications-header">
      <div className="col notifications-header-unread">
        <h2>Notifications</h2>
        <span>4</span>
      </div>
      <div class="col mark-as-read">
        <button className="mark-as-read-btn">Mark all as read</button>
      </div>
    </header>
  )
}

export default NotificationsHeader;