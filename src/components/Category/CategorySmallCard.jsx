const CategorySmallCard = ({ category }) => {
  // console.log(props);
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4 items-center cursor-pointer transition-shadow duration-300 hover:shadow-lg">
      {/* <div className="h-12 w-12 relative">
        <img
          src={"/categories/7.webp"}
          alt="carousel item"
          className="absolute w-full h-full object-cover"
        />
      </div> */}
      <p className="text-chestnutRose">{category?.name}</p>
    </div>
  );
};

export default CategorySmallCard;
