import './App.css';
import Notification from './components/Notification';
import NotificationsHeader from './components/NotificationsHeader';

function App() {
  return (
    <div className="App">
      <NotificationsHeader />
      <div class="notifications">
        <Notification />
      </div>
    </div>
  );
}

export default App;
