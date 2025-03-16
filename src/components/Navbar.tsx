import Image from "next/image"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* Search Field */}
      <div className="hidden md:flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-200 px-2">
        <Image src="/search.png" alt="search" width={14} height={14}/>
        <input type="text" placeholder="Search..." className="bg-transparent p-2 outline-none w-[300px]" />
      </div>
      {/* User Icons */}
      <div className="flex items-center gap-4 justify-end w-full">
        <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center">
          <Image src="/message.png" alt="message" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center relative">
          <Image src="/announcement.png" alt="message" width={20} height={20} />
          <div className="absolute -top-3 -right-3 bg-blue-400 w-5 h-5 rounded-full flex items-center justify-center text-sm text-white">5</div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-light leading-4">Solomon Odunusi</span>
          <span className="text-[10px] text-gray-700 text-right">Creator</span>
        </div>
        <Image src="/profile.png" alt="user" width={24} height={24} className="rounded-full" />

      </div>
    </div>
  )
}

export default Navbar