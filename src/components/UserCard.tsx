import Image from "next/image"

const UserCard = ({type}:{type:string}) => {
  return (
    <div className="group rounded-2xl odd:bg-solpastelblue even:bg-solsoftlavend p-4 flex-1 min-w-[130px]">
        <div className="flex justify-between items-center">
            <span className="text-[10px] rounded-full px-2 py-1 bg-transparent ring-2 text-blue-700">14/2/2025</span>
            <Image src="/more.png" alt="more" width={20} height={20}/>
        </div>
        <h1 className="my-4 text-xl font-semibold">205</h1>
        <h2 className="capitalize text-sm font-semibold group-even:text-[#1E3A8A] group-odd:text-[#5E35B1]">{type}</h2>
    </div>
  )
}

export default UserCard