const ProductCardLoader = () => {
  return (
    <div className="w-60 h-60 border-2 rounded-md mx-auto">
      <div className="flex flex-col gap-4 animate-pulse items-start h-full justify-center p-4">
        <div className="w-full bg-gray-300 h-40 rounded-md "></div>
        <div className="w-full bg-gray-300 h-6 rounded-md "></div>
        <div className="w-3/4 bg-gray-300 h-6 rounded-md "></div>
      </div>
    </div>
  );
};

export default ProductCardLoader;
