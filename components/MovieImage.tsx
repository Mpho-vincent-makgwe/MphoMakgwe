import Image from "next/image";

const MovieImage = ({ image }: any) => {
  if (!image) {
    return <div>Loading...</div>;
  }
  return (
    <div className="border border-lime-400 shadow-md">
      <Image alt={image.height} src={image.imageUrl} width={image.width} height={image.height} />
    </div>
  );
};

export default MovieImage;
