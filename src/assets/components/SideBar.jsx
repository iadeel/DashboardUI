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
      <div className="bg-white shadow-lg sidebar p-[20px] flex flex-col justify-between items-center gap-7 w-[306px]">
        <div className="upperdiv flex flex-col gap-[20px]">
          <div className="dash_heading flex ">
            <img src={logo} className="h-[37px]" />
            <h1 className="font-extrabold">
              Dashboard <span>v.01</span>{" "}
            </h1>
          </div>
          <div className="menuitems flex flex-col gap-5">
            <MenuItem
              logo={<CgKeyhole  />}
              title={"Dashboard"}
              arrow={""}
            />
            <MenuItem
              logo={<FiPackage color="grey" size={24} />}
              title={"Product"}
              arrow={<IoIosArrowForward color="grey" />}
            />
            <MenuItem
              logo={<LuCircleUser color="grey" size={24} />}
              title={"Customer"}
              arrow={<IoIosArrowForward color="grey" />}
            />
            <MenuItem
              logo={<RiMoneyDollarCircleLine color="grey" size={24} />}
              title={"Income"}
              arrow={<IoIosArrowForward  color="grey" />}
            />
            <MenuItem
              logo={<TbCirclePercentage color="grey" size={24} />}
              title={"Promote"}
              arrow={<IoIosArrowForward color="grey" />}
            />
            <MenuItem
              logo={<MdHelpOutline color="grey" size={24} />}
              title={"Help"}
              arrow={<IoIosArrowForward  color="grey" />}
            />
          </div>
        </div>
        <div className="lowerdiv flex flex-col gap-5">
          <div className="flex items-center text-center rounded-4xl flex-col gap-[30px]  probox bg-gradient-to-r from-[#EAABF0] to-[#4623E9] w-[250px] h-150px p-[20px]">
            <p>Upgrade to PRO to get access all Features!</p>
            <button className="bg-white text-blue-900 rounded-4xl w-[203px] h-[40px]">
              Get Pro Now!
            </button>
          </div>
          <div className="accountinfo w-[250px] justify-between flex items-center gap-2.5">
            <div className="account-left flex gap-2.5">
              <img src={dp} className="w-[42px]" />
              <div className="accountname">
                <h2>Evano</h2>
                <p>Project Manager</p>
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
