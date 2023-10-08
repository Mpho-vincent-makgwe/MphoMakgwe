const Movies = ({ items }: any) => {
  if (!items) {
    return <div>Loading...</div>;
  }

  const { l, q, qid, rank, s, y } = items;

  return (
    <div className="bg-gray-800 p-4">
      <h2 className="text-xl font-semibold">{l}</h2>
      <p>Type: {q}</p>
      <p>Category ID: {qid}</p>
      <p>Rank: {rank}</p>
      <p>Starring: {s}</p>
      <p>Year: {y}</p>
    </div>
  );
};

export default Movies;
