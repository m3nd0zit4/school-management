import UserCard from "@/app/components/UserCard"

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left Side */}
      <div className="w-full lg:w-2/3">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student"/>
          <UserCard type="teacher"/>
          <UserCard type="parent"/>
          <UserCard type="staff"/>
        </div>

        {/* Middle Chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count Chart */}
          <div className="w-full lg:w-1/3 h-[450px]">

          </div>
          {/* Attendance Chart */}
          <div className="w-full lg:w-2/3 h-[450px]">

          </div>
        </div>

        {/** Bottom Chart */}
        <div>

        </div>

      </div>
      {/* Right Side */}
      <div className="w-full lg:w-1/3">
        r
      </div>
    </div>

  )
}

export default AdminPage