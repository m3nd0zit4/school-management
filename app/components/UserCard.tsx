import { MoreHorizontal } from "lucide-react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="min-w-[130px] flex-1 rounded-2xl border border-gray-200 p-4 odd:bg-blue-100 even:bg-green-100">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <MoreHorizontal className="size-5 cursor-pointer" strokeWidth={2} />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
    </div>
  );
};

export default UserCard;