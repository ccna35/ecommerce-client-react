import { AiFillDelete, AiOutlineCheck } from "react-icons/ai";

const reviews = [
  {
    id: 1,
    title: "Great product",
    body: "Hey, great product, I recommend it.",
    datePosted: "Sunday, March 6, 2022",
    product: "a1b2c3d4e5",
    user: "u1v2w3x4y5",
    rating: 5,
    approved: false,
  },
  {
    id: 2,
    title: "Awesome experience",
    body: "I had an awesome experience with this product!",
    datePosted: "Monday, July 12, 2021",
    product: "f6g7h8i9j0",
    user: "z1x2c3v4b5",
    rating: 4,
    approved: false,
  },
  {
    id: 3,
    title: "Impressive quality",
    body: "The quality of this product is impressive.",
    datePosted: "Friday, November 17, 2017",
    product: "k1l2m3n4o5",
    user: "p1q2r3s4t5",
    rating: 5,
    approved: false,
  },
  {
    id: 4,
    title: "Highly recommended",
    body: "Highly recommended product!",
    datePosted: "Thursday, February 2, 2023",
    product: "u5v6w7x8y9",
    user: "z5x4c3v2b1",
    rating: 5,
    approved: false,
  },
  {
    id: 5,
    title: "Very satisfied",
    body: "I am very satisfied with this product.",
    datePosted: "Wednesday, June 9, 2021",
    product: "s4d3f2g1h0",
    user: "q9w8e7r6t5",
    rating: 4,
    approved: true,
  },
  {
    id: 6,
    title: "Excellent product",
    body: "This is an excellent product. I love it!",
    datePosted: "Sunday, December 3, 2023",
    product: "a9b8c7d6e5",
    user: "u8i7o6p5y4",
    rating: 5,
    approved: true,
  },
  {
    id: 7,
    title: "Good value for money",
    body: "This product offers good value for money.",
    datePosted: "Saturday, April 21, 2018",
    product: "q1w2e3r4t5",
    user: "z9x8c7v6b5",
    rating: 4,
    approved: true,
  },
  {
    id: 8,
    title: "Amazing product",
    body: "I have been using this product for a while now, and it is amazing!",
    datePosted: "Monday, August 28, 2023",
    product: "m5n4b3v2c1",
    user: "p5o4i3u2y1",
    rating: 5,
    approved: true,
  },
  {
    id: 9,
    title: "Decent quality",
    body: "The quality of this product is decent.",
    datePosted: "Tuesday, May 15, 2019",
    product: "s3a2d1f0g9",
    user: "l4k3j2h1g0",
    rating: 3,
    approved: true,
  },
  {
    id: 10,
    title: "Satisfied customer",
    body: "As a satisfied customer, I highly recommend this product.",
    datePosted: "Wednesday, November 29, 2017",
    product: "o9i8u7y6t5",
    user: "q0w9e8r7t6",
    rating: 4,
    approved: true,
  },
];

export default function ReviewList() {
  return (
    <table className="table-auto text-mainColor w-full border-separate border-spacing-y-2">
      <thead>
        <tr className="text-left">
          <th>Product</th>
          <th>Review</th>
          <th>Rating</th>
          <th>Controls</th>
        </tr>
      </thead>
      <tbody>
        {reviews.map((review) => {
          return (
            <tr
              key={review.id}
              className={`${review.id % 2 === 0 && "bg-gray-200"}`}
            >
              <td className="p-2">{review.product}</td>
              <td className="p-2">{review.title}</td>
              <td className="p-2">{review.rating}</td>
              <td className="flex gap-4 p-2">
                {!review.approved && (
                  <button className="px-2 py-1 rounded-sm bg-green-700 text-white">
                    <AiOutlineCheck />
                  </button>
                )}
                <button className="px-2 py-1 rounded-sm bg-red-700 text-white">
                  <AiFillDelete />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>

    // <ul role="list" className="divide-y divide-gray-100">
    //   {reviews.map((review) => (
    //     <li
    //       key={review.id}
    //       className="grid grid-cols-4 items-center gap-6 py-5"
    //     >
    //       <div className="flex gap-x-4">
    //         <div className="min-w-0 flex-auto">
    //           <p className="max-w-sm truncate text-sm font-semibold leading-6 text-gray-900">
    //             {review.product}
    //           </p>
    //           <p className="max-w-sm truncate text-sm font-extralight leading-6 text-gray-900">
    //             {review.datePosted}
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex gap-x-4">
    //         <div className="min-w-0 flex-auto">
    //           <p className="max-w-sm truncate text-sm font-semibold leading-6 text-gray-900">
    //             {review.title}
    //           </p>
    //           <p className="max-w-sm truncate text-sm font-extralight leading-6 text-gray-900">
    //             {review.body}
    //           </p>
    //         </div>
    //       </div>
    //       <div>{review.rating}</div>
    //       <div className="flex gap-4">
    //         {!review.approved && (
    //           <button className="px-2 py-1 rounded-sm bg-green-700 text-white">
    //             <AiOutlineCheck />
    //           </button>
    //         )}
    //         <button className="px-2 py-1 rounded-sm bg-red-700 text-white">
    //           <AiFillDelete />
    //         </button>
    //       </div>
    //     </li>
    //   ))}
    // </ul>
  );
}
