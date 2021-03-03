// import artists from "./data/artists.json"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './Components/Box/Box';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
function App() {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    fetch("https://artists-api.000webhostapp.com/artists.json")
      .then(res => res.json())
      .then(data => setArtists(data))
      .catch(err => console.log(err))
  }, [])

  let [selected, setSelected] = useState([])
  let [paymentArr, setPaymentArr] = useState([])

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="main-part">
        <div className="artist-bar">
          {
            artists.map(artists => <Box artists={artists} selected={selected} setSelected={setSelected} paymentArr={paymentArr} setPaymentArr={setPaymentArr} key={artists.id} />)
          }
        </div>
        <Sidebar name={selected} paymentArr={paymentArr} />
      </main>
    </div>
  );
}
export default App;
