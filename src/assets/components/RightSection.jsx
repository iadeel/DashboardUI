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
      <div className="rightsection p-[50px] w-full flex flex-col gap-[40px]">
        <div className="header flex justify-between ">
          <h1 className="text-[24px] font-[400]">Hello Evano 👋🏼,</h1>
          <div className="search flex items-center rounded-[12px] bg-white h-[38px] w-[216px] px-[10px]">
            <IoSearchOutline size={"16px"} color="grey" />
            <input type="search" placeholder="Search" className="w-full mx-[10px]" />
          </div>
        </div>
        <div className="stats bg-white rounded-4xl h-[151px] flex justify-around items-center">
          <StatItem
            icon={<LuUsers size={42} color="#00AC4F" />}
            para={"Total Customers"}
            num={"5,423"}
            perc={"16%"}
            status={<FaArrowUp color="green" />}
          />
          <StatItem
            icon={<BiUserCheck size={42} color="#00AC4F" />}
            para={"Members"}
            num={"1,893"}
            perc={"1%"}
            status={<FaArrowDown color="red" />}
          />
          <StatItem
            icon={<FiMonitor size={42} color="#00AC4F" />}
            para={"Active Now"}
            num={"189"}
            perc={"80%"}
            status={<FaArrowUp color="green" />}
          />
        </div>
        <div className="allcustomers gap-[80px] h-[812px] bg-white rounded-4xl p-[30px]">
          <div className="header flex justify-between ">
            <div className="left">
              <h1 className="text-[22px] font-[600]">All Customers</h1>
              <p className="text-[14px] font-[400] text-[#16C098]">
                Active Members
              </p>
            </div>
            <div className="right flex gap-5">
              <div className="search flex items-center rounded-[12px] bg-[#F9FBFF] h-[38px] w-[216px] px-[10px]">
                <IoSearchOutline size={"16px"} color="grey" />
                <input type="search" placeholder="Search" className="w-full mx-[10px]" />
              </div>
              <div className="flex items-center rounded-[12px] bg-[#F9FBFF] h-[38px] w-[160px] px-[10px]"></div>
            </div>
          </div>
          <div className="customerstable">
            <table className="w-full">
                <tr>
                    <th>Customer Name</th>
                    <th>Company</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>Jane Cooper</td>
                    <td>Microsoft</td>
                    <td>(225) 555-0118</td>
                    <td>jane@microsoft.com</td>
                    <td>United States</td>
                    <td> <button className="w-[80px] h-[29px] bg-[#00b0877b] text-[#008767] rounded-lg border-1">Active</button> </td>
                </tr>
                <tr>
                    <td>Floyd Miles</td>
                    <td>Yahoo</td>
                    <td>(205) 555-0100</td>
                    <td>floyd@yahoo.com</td>
                    <td>Kiribati</td>
                    <td><button className="w-[80px] h-[29px] bg-[#FFC5C5] text-[#DF0404] rounded-lg border-1">Inactive</button></td>
                </tr>
                <tr>
                    <td>Ronald Richards</td>
                    <td>Adobe</td>
                    <td>(302) 555-0107</td>
                    <td>ronald@adobe.com</td>
                    <td>Israel</td>
                    <td><button className="w-[80px] h-[29px] bg-[#FFC5C5] text-[#DF0404] rounded-lg border-1">Inactive</button></td>
                </tr>
                <tr>
                    <td>Marvin McKinney</td>
                    <td>Tesla</td>
                    <td>(252) 555-0126</td>
                    <td>marvin@tesla.com</td>
                    <td>Iran</td>
                    <td><button className="w-[80px] h-[29px] bg-[#00b0877b] text-[#008767] rounded-lg border-1">Active</button></td>
                </tr>
                <tr>
                    <td>Jerome Bell</td>
                    <td>Google</td>
                    <td>(629) 555-0129</td>
                    <td>jerome@google.com</td>
                    <td>Réunion</td>
                    <td><button className="w-[80px] h-[29px] bg-[#00b0877b] text-[#008767] rounded-lg border-1">Active</button></td>
                </tr>
                <tr>
                    <td>Kathryn Murphy</td>
                    <td>Microsoft</td>
                    <td>(406) 555-0120</td>
                    <td>kathryn@microsoft.com</td>
                    <td>Curaçao</td>
                    <td><button className="w-[80px] h-[29px] bg-[#00b0877b] text-[#008767] rounded-lg border-1">Active</button></td>
                </tr>
                <tr>
                    <td>Jacob Jones</td>
                    <td>Yahoo</td>
                    <td>(208) 555-0112</td>
                    <td>jacob@yahoo.com</td>
                    <td>Brazil</td>
                    <td><button className="w-[80px] h-[29px] bg-[#00b0877b] text-[#008767] rounded-lg border-1">Active</button></td>
                </tr>
                <tr>
                    <td>Kristin Watson</td>
                    <td>Facebook</td>
                    <td>(704) 555-0127</td>
                    <td>kristin@facebook.com</td>
                    <td>Åland Islands</td>
                    <td><button className="w-[80px] h-[29px] bg-[#FFC5C5] text-[#DF0404] rounded-lg border-1">Inactive</button></td>
                </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSection;
