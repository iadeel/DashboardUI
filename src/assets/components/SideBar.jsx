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
import dp from '../images/dp.png'

const SideBar = () => {
  return (
    <>
    <div className="sidebar flex flex-col justify-center">

      <div className="upperdiv">
        <div className="dash_heading flex ">
          <img src={logo} className="h-[37px]" />
          <h1>
            Dashboard <span>v.01</span>{" "}
          </h1>
        </div>
        <div className="menuitems flex flex-col gap-5">
            <MenuItem  logo={<CgKeyhole color="grey" size={24} />} title={"Dashboard"} arrow={""} />
            <MenuItem  logo={<FiPackage  color="grey" size={24}  />} title={"Product"} arrow={<IoIosArrowForward />} />
            <MenuItem  logo={<LuCircleUser color="grey" size={24}   />} title={"Customer"} arrow={<IoIosArrowForward />} />
            <MenuItem  logo={<RiMoneyDollarCircleLine color="grey" size={24}  />} title={"Income"} arrow={<IoIosArrowForward />} />
            <MenuItem  logo={<TbCirclePercentage color="grey" size={24}  />} title={"Promote"} arrow={<IoIosArrowForward />} />
            <MenuItem  logo={<MdHelpOutline color="grey" size={24}  />} title={"Help"} arrow={<IoIosArrowForward />} />
        </div>
      </div>
      <div className="lowerdiv">

        <div className="flex flex-col gap-[30px]  probox bg-gradient-to-r from-[#EAABF0] to-[#4623E9] w-[250px] h-150px p-[20px]">
            <p>Upgrade to PRO to get access all Features!</p>
            <button className="bg-white text-blue-900 rounded-4xl w-[203px] h-[40px]">Get Pro Now!</button>
        </div>
        <div className="accountinfo">
            <img src={dp} />
            <div className="accountname">
                <h2>Evano</h2>
                <p>Project Manager</p>
            </div>
            <IoIosArrowDown />
        </div>
      </div>
    </div>
    </>
  );
};

export default SideBar;
