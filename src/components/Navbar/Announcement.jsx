import { Facebook, Instagram, Twitter } from "lucide-react";

const Announcement = () => {
  return (
    <div className="bg-mainColor text-white py-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <p className="px-4 py-1 rounded-full bg-chestnutRose text-xs">Hot</p>
          <p className="text-xs">Free Express Shipping</p>
        </div>
        <div className="flex gap-4 items-center">
          <select
            name="language"
            id=""
            defaultValue="EN"
            className="text-white p-1 bg-transparent text-xs"
          >
            <option value="EN" className="text-mainColor">
              EN
            </option>
            <option value="DE" className="text-mainColor">
              DE
            </option>
          </select>
          <div className="flex gap-4">
            <Facebook size={15} />
            <Twitter size={15} />
            <Instagram size={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
