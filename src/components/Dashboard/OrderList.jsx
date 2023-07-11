const orders = [
  {
    id: 1,
    total: 255,
    dateOrdered: "Saturday, October 10, 2009",
    orderCode: "#sd34f34sda45dfs34",
    status: "Delivered",
  },
  {
    id: 2,
    total: 123,
    dateOrdered: "Thursday, May 4, 2017",
    orderCode: "#fgh64dfgsd56ert54",
    status: "Not processed",
  },
  {
    id: 3,
    total: 499,
    dateOrdered: "Monday, August 21, 2022",
    orderCode: "#tyu34ghj56dfs23qw",
    status: "Processing",
  },
  {
    id: 4,
    total: 799,
    dateOrdered: "Sunday, June 17, 2018",
    orderCode: "#mnb56vbnm34sdf45re",
    status: "Processing",
  },
  {
    id: 5,
    total: 199,
    dateOrdered: "Friday, November 2, 2015",
    orderCode: "#lkj87poi09dfg12zx",
    status: "Delivered",
  },
  {
    id: 6,
    total: 349,
    dateOrdered: "Wednesday, April 13, 2022",
    orderCode: "#cvb45poi78kjg56df",
    status: "Delivered",
  },
  {
    id: 7,
    total: 599,
    dateOrdered: "Tuesday, July 25, 2017",
    orderCode: "#qwe23rty12fgh45vb",
    status: "Not processed",
  },
  {
    id: 8,
    total: 899,
    dateOrdered: "Monday, January 9, 2012",
    orderCode: "#zxc89vbn12poi45fg",
    status: "Delivered",
  },
  {
    id: 9,
    total: 129,
    dateOrdered: "Thursday, September 5, 2019",
    orderCode: "#asd34qwe56ghj23nm",
    status: "Processing",
  },
  {
    id: 10,
    total: 459,
    dateOrdered: "Saturday, March 8, 2014",
    orderCode: "#rty78zxc23vbn56po",
    status: "Not processed",
  },
];

export default function OrderList() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {orders.map((order) => (
        <li key={order.id} className="grid grid-cols-3 gap-6 py-5">
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="max-w-sm truncate text-sm font-semibold leading-6 text-gray-900">
                {order.orderCode.toUpperCase()}
              </p>
              <p className="max-w-sm truncate text-sm font-extralight leading-6 text-gray-900">
                {order.dateOrdered}
              </p>
            </div>
          </div>
          <div>${order.total}</div>
          <div className="flex gap-4">
            {order.status === "Delivered" ? (
              <p className="w-6 h-6 bg-green-600 rounded-full" />
            ) : order.status === "Processing" ? (
              <p className="w-6 h-6 bg-orange-600 rounded-full" />
            ) : (
              <p className="w-6 h-6 bg-red-600 rounded-full" />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
