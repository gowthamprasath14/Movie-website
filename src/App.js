import {useState,useEffect} from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg'
//3ac48496
const API_URL = 'http://www.omdbapi.com/?apikey=3ac48496';


const App = () => {
    const [movies,setMovies] = useState([]);
    const [search,setsearch] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data =await response.json();
        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('Spiderman');
    },[]);
    
    return(
    <div className="app">

        <h1>MovieLand</h1>
        <div className='search'>

            <input placeholder='Search for movies' value={search} onChange={(inp) => setsearch(inp.target.value)}/>
            <img src={SearchIcon} alt="Search" onClick={()=>searchMovies(search)}/>
        
        </div>

        {
            movies?.length > 0
            ?(
                <div className='container'>
                    {movies.map((movie) => (
                    <MovieCard movie={movie}/>
                ))}
                </div>
            ):
            (<div className='empty'>
                <h2>No movies found</h2>
            </div>)
        }

        <div className='container'>
            <MovieCard movie={movies}/>
    
        </div>
    </div>    
    );
}

export default App;






