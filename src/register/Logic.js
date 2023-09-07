import {useState, useEffect} from "react";
import "../App.css";
import { Link } from "react-router-dom";
import SearchIcon from "../search.svg";
import MovieCard from "../MovieCard";


const API_URL = "https://www.omdbapi.com?apikey=4dc9bf8a";
// const API_URL = "http://www.omdbapi.com/?apikey=4dc9bf8a";

const Logic = () => {
    const [movies, setmovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('Batman');
    const [loading, setLoading] = useState(false);

  


    // const searchMovies = async (title) =>{
    //      const response = await fetch(`${API_URL}&s=${title}`);
    //     const data = await response.json();
    //     setmovies(data.Search);
    // } 

    const searchMovies = async (title) => {
      try {
        setLoading(true);

        const response = await fetch(`${API_URL}&s=${title}`);
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setmovies(data.Search);
      } catch (error) {
        console.error(error);
        // Perform error handling, such as displaying an error message to the user
      } finally {
        setLoading(false); // Set loading to false after the search is complete
      }
    };

   


 useEffect(()=>{
    searchMovies('Batman')  
 }, [])

    return(
        <div className="app">        
          <h1>MovieLand</h1>        
          <div className="search">
        <input placeholder="Search for movies"
            value= {searchTerm}
            id="myFiled"
            autoComplete="off"
            onChange={(e)=> setSearchTerm(e.target.value)}
        />
        

      <img src={SearchIcon} alt="search"  onClick={() => searchMovies(searchTerm)} />

      <Link to="/discription" className="tralor">
        New Trailers
        </Link>     
      

      </div> 
      <div><h2 className="movieRes">"..{searchTerm}.." movie Results</h2></div> 
      {loading ? (<div className="loading-spinner"></div>
      ) :    movies.length > 0 
          ? ( <div className="container"> 
                {movies.map((movie) => (<MovieCard movie = {movie}/>)) }
            </div>  
            ) :
            (
              <div className="empty">
                <h2>No movies found</h2>
              </div>
            )
         //   movies.length = 0 ? searchMovies("The Amazing spider man") :  "No movies found" ; 
                                      
       }
       
      </div> 
      
    );
}
export default Logic;




 