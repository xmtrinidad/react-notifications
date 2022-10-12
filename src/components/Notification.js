// import { useState } from 'react'

const Notification = (props) => {
  const classes = `notification ${props.isUnread ? 'unread' : ''}`
  return (
    <div className={classes}>
      <div className="col avatar">
        <img src={props.avatar} alt="" />
      </div>
      <div className="col notification-msg">
        <p>{props.message}</p>
      </div>
    </div>
  )
}

export default Notification;