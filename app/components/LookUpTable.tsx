import { SearchIcon } from 'lucide-react'

const LookUpTable = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <SearchIcon className="size-5 shrink-0 text-gray-400" strokeWidth={2} aria-hidden />
        <input
            type="search"
            placeholder="Search..."
            className="w-[200px] p-2 bg-transparent outline-none"
            
        />
    </div>
  )
}

export default LookUpTable