import './App.css';
import { getListMovie, searchMovie } from './api.js'
import { useEffect, useRef, useState } from 'react';
function App() {
  const [dataMovie, setDataMovie] = useState([])
  let [data, setdata] = useState()
  let [err, setErr] = useState()
  useEffect(() => {
    if (data === undefined || data === "") {
      getListMovie().then((a) => {
        setDataMovie(a)
      });
    } else {
      const dat = searchMovie(data)
      dat.then(a => {
        setDataMovie(a.results)
        if (a.results[0] === undefined) {
          setErr(() => {
            return (<h1>data tidak ada</h1>)
          })
        } else {
          setErr("")
        }
      })
    }
  })

  const ok = (() => {
    return dataMovie.map(a => {
      return (
        <div className='contain'>
          <div className='image'>
            <img src={`https://image.tmdb.org/t/p/w500${a.poster_path}`} alt={"data gambar rusak"} ></img>
          </div>
          <div className='judul'>{a.title}</div>
          <div className='tahun'>{a.release_date}</div>
          <div className='keterangan'>{a.overview}</div>
        </div >
      )
    })
  })
  const Search = useRef(null)
  function CariSearch(a) {
    return a.current.value
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>react judul</h1>
        {err}

        <input type={"text"} className='input' placeholder='Search' ref={Search} ></input>
        <button className='tombol' onClick={() => { setdata((CariSearch(Search))) }} >klik</button>
        <div className='container'>
          {ok()}
        </div>
      </header>
    </div>
  );
}

export default App;
