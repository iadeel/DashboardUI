import logo from "../images/dashboardlogo.png";
import MenuItem from "./MenuItem";
import { CgKeyhole } from "react-icons/cg";
import { FiPackage } from "react-icons/fi";
import { LuCircleUser } from "react-icons/lu";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbCirclePercentage } from "react-icons/tb";
import { MdHelpOutline } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import dp from "../images/dp.png";

const SideBar = () => {
  return (
    <>
      <div className="bg-white shadow-lg h-[1198px] sidebar p-[20px] flex flex-col justify-between items-center gap-7 w-[306px]">
        <div className="upperdiv flex flex-col gap-[50px]">
          <div className="dash_heading font-bold flex gap-2.5 items-center text-[26px]">
            <img src={logo} className="h-[37px]" />
            <h1 className="">
              Dashboard <span className="text-[10px] text-gray-500">v.01</span>
            </h1>
          </div>
          <div className="menuitems flex flex-col gap-[30px]">
            <MenuItem
              logo={<CgKeyhole  />}
              title={"Dashboard"}
              arrow={""}
            />
            <MenuItem
              logo={<FiPackage />}
              title={"Product"}
              arrow={<IoIosArrowForward />}
            />
            <MenuItem className="text-2xl"
              logo={<LuCircleUser />}
              title={"Customer"}
              arrow={<IoIosArrowForward />}
            />
            <MenuItem
              logo={<RiMoneyDollarCircleLine />}
              title={"Income"}
              arrow={<IoIosArrowForward />}
            />
            <MenuItem
              logo={<TbCirclePercentage />}
              title={"Promote"}
              arrow={<IoIosArrowForward />}
            />
            <MenuItem
              logo={<MdHelpOutline />}
              title={"Help"}
              arrow={<IoIosArrowForward />}
            />
          </div>
        </div>
        <div className="lowerdiv flex flex-col gap-5">
          <div className="flex items-center text-center rounded-4xl flex-col gap-[30px]  probox bg-gradient-to-r from-[#EAABF0] to-[#4623E9] w-[250px] h-150px p-[25px]">
            <p className="text-[14px] font-[600] text-white">Upgrade to PRO to get access all Features!</p>
            <button className="bg-white text-blue-900 rounded-4xl w-[203px] h-[40px] text-[14px] font-[600]">
              Get Pro Now!
            </button>
          </div>
          <div className="accountinfo w-[250px] justify-between flex items-center gap-2.5">
            <div className="account-left flex gap-2.5">
              <img src={dp} className="w-[42px]" />
              <div className="accountname">
                <h2 className="font-bold text-[14px]">Evano</h2>
                <p className="text-[12px]">Project Manager</p>
              </div>
            </div>
            <div className="account-arrow">
              <IoIosArrowDown color="grey" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
