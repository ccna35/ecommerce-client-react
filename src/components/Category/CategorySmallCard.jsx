const CategorySmallCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4 items-center cursor-pointer transition-shadow duration-300 hover:shadow-lg">
      <div className="h-12 w-12 relative">
        <img
          src={"/categories/7.webp"}
          alt="carousel item"
          className="absolute w-full h-full object-cover"
        />
      </div>
      <p>Auomobile</p>
    </div>
  );
};

export default CategorySmallCard;
