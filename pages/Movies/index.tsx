import MovieImage from "@/components/MovieImage";
import Movies from "@/components/Movies";
import { useEffect, useState } from "react";
import { fetchMovies } from "@/helpers/utils";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const MovieFetch = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        console.log(
          error,
          "Sorry, we couldn't fetch the movies. Please try again later."
        );
      }
    };
    MovieFetch();
  }, []);

  if (!movies) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8 flex flex-wrap gap-4">
      {movies.map((movie:any) => (
        <div key={movie.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <MovieImage image={movie.i} />
          <Movies items={movie} />
        </div>
      ))}
    </main>
  );
};

export default Home;
