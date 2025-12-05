import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  // const [likes, setLikes] = useState(0);

  // const getLikes = () => {
  //   return likes + 1
  // }

  return (
    <div className='App'>
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;