import './App.css';
import SignUpForm from './components/SignUpForm';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <SignUpForm/>
    </div>
  );
}

export default App;
