import CountChart from "@/components/CountChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-4 flex flex-col gap-4 md:flex-row'>
      {/* Left side */}
      <div className="w-full lg:w-2/3">
        {/* User_Cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student"/>
          <UserCard type="teacher"/>
          <UserCard type="staff"/>
          <UserCard type="parent"/>
        </div>
        {/* Middle Chart */}
        <div className=""></div>
        {/* Last Chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Attendance */}
          <div className="w-full lg:w-2/3 h-[450px]"></div>
          {/* Count */}
          <div className="w-full lg:w-1/3 h-[450px]">
          <CountChart />
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="w-full lg:w-1/3 bg-gray-400">
        cal
      </div>
      
    </div>
  )
}

export default AdminPage