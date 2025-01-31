import { IoSearchOutline } from "react-icons/io5";
import StatItem from "./StatItem";
import { FaArrowUp } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { FiMonitor } from "react-icons/fi";
import { BiUserCheck } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa";

const RightSection = () => {
  return (
    <>
    <div className="rightsection p-[50px] w-[1134px] flex flex-col gap-[20px]">

    <div className="header flex justify-between ">
        <h1 className="text-[24px] font-[400]">
        Hello Evano 👋🏼,
        </h1>
        <div className="search flex items-center rounded-[12px] bg-white h-[38px] w-[216px] px-[10px]">
        <IoSearchOutline size={'16px'} color="grey" />
        <input type="search" className="w-full" />
        </div>
    </div>
        <div className="stats bg-white rounded-4xl h-[151px] flex justify-around items-center">
            <StatItem icon={<LuUsers size={42} color="#00AC4F" />} para={"Total Customers"} num={"5,423"} perc={"16%"} status={<FaArrowUp color="green" />}/>
            <StatItem icon={<BiUserCheck size={42} color="#00AC4F"  /> } para={"Members"} num={"1,893"} perc={"1%"} status={<FaArrowDown color="red"/>}/>
            <StatItem icon={<FiMonitor size={42} color="#00AC4F" /> } para={"Active Now"} num={"189"} perc={"80%"} status={<FaArrowUp />}/>
        </div>

    </div>
    </>
  )
}

export default RightSection