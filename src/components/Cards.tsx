interface Props {
  title: string;
  image: string;
  price: number;
}

const Card = ({ title, image, price }: Props) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800 transition hover:scale-[1.01]">
      <img src={image} alt={title} className="w-full h-40 object-contain bg-gray-100 p-4" />
      <div className="p-4">
        <h2 className="text-md font-semibold mb-2 text-gray-800 dark:text-white">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">${price}</p>
      </div>
    </div>
  );
};

export default Card;
