const Admin = () => {
  const cards = [
    {
      id: 1,
      text: "Users",
      count: 345,
      bgColor: "bg-green-600",
    },
    {
      id: 2,
      text: "Sellers",
      count: 345,
      bgColor: "bg-blue-600",
    },
    {
      id: 3,
      text: "Orders",
      count: 345,
      bgColor: "bg-violet-600",
    },
    {
      id: 4,
      text: "Products",
      count: 345,
      bgColor: "bg-red-600",
    },
    {
      id: 5,
      text: "Reviews",
      count: 345,
      bgColor: "bg-orange-600",
    },
    {
      id: 6,
      text: "Categories",
      count: 345,
      bgColor: "bg-slate-600",
    },
  ];

  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <div className="flex gap-4 items-center mb-8">
        <h1>Hello Mike</h1>
        <p className="py-1 px-2 bg-chestnutRose text-white rounded-sm text-sm">
          Admin
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => {
          return (
            <div
              className={`${card.bgColor} p-4 flex flex-col gap-4 rounded-md shadow-sm`}
              key={card.id}
            >
              <p className="text-gray-200">{card.text}</p>
              <p className="text-4xl font-semibold text-white">{card.count}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Admin;
