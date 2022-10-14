import './App.css';
import { useState } from 'react';
import Notification from './components/Notification';
import NotificationsHeader from './components/NotificationsHeader';
import NewNotification from './components/NewNotification';

function App() {
  const [notificationData, setNotificationData] = useState([
    { id: 1, avatar: 'https://i.pravatar.cc/300', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ea voluptatibus obcaecati pariatur tempore repellendus voluptas odit, dolorem ipsa numquam.', isUnread: true},
    { id: 2, avatar: 'https://i.pravatar.cc/300', message: 'meme message', isUnread: false},
    { id: 3, avatar: 'https://i.pravatar.cc/300', message: 'lol ok', isUnread: true},
  ]);

  const addNotificationHandler = (notification) => {
    setNotificationData((prevState) => {
      return [...prevState, notification];
    });
  };

  const handleMarkAsRead = () => {
    setNotificationData((prevState) => {
      prevState.forEach(n => n.isUnread = false)
      return [...prevState];
    });
  };

  const notifications = notificationData.map((notification) => <Notification key={notification.id} avatar={notification.avatar} message={notification.message} isUnread={notification.isUnread} />);

  return (
    <div className="App">
      <NotificationsHeader onMarkAsRead={handleMarkAsRead} />
      <div className="notifications">
        {notifications}
      </div>
      <NewNotification onAddNotification={addNotificationHandler}></NewNotification>
    </div>
  );
}

export default App;
