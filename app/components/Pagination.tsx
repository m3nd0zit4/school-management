const Pagination = () => {
    return (
      <div className="p-4 flex items-center justify-between text-gray-500">
        <button
          disabled
          className="cursor-pointer rounded-md bg-slate-200 px-4 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-50"
        >
          Prev
        </button>
        <div className="flex items-center gap-2 text-sm">
          <button className="cursor-pointer rounded-sm bg-blue-200 px-2 transition-colors hover:bg-blue-300">1</button>
          <button className="cursor-pointer rounded-sm px-2 hover:bg-gray-100">2</button>
          <button className="cursor-pointer rounded-sm px-2 hover:bg-gray-100">3</button>
          ...
          <button className="cursor-pointer rounded-sm px-2 hover:bg-gray-100">10</button>
        </div>
        <button className="cursor-pointer rounded-md bg-slate-200 px-4 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-50">
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;