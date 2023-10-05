import MovieImage from "@/components/MovieImage";
import Movies from "@/components/Movies";
import { useEffect, useState } from "react";
const fetchMovies =async()=>{
const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6f2b280d2emsh9498f1d1f647b05p1d7854jsna47849675c89',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'}
};
try {
	const response = await fetch(url, options);
	const result = await response.json();
	const data = await result.d || [];
	return data;
} catch (error) {
	console.error(error);
}
}

const Home =  () =>{
const [movies, setMovies]=useState([])

useEffect(()=>{
	const MovieFetch = async()=>{
		try {
			const data = await fetchMovies()
			 setMovies(data)
		} catch (error) {
			console.log(error, `sorry we couldn't fetch the movies please try again later`)
		}
	}
MovieFetch();
},[])
if(!movies){
	return(
		<>
			<div>
				<p>Loading...</p>
			</div>	
		</>
	)
}
  return (
    <main className="">
       {movies.map((movie:any) => (
        <div key={movie.id}>
          <MovieImage image={movie.i} />
          <Movies items={movie} />
        </div>
      ))}
    </main>
  )
}
export default Home;