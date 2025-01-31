const StatItem = ({ icon, para, num, status,perc }) => {
  return (
    <>
      <div className="statItem flex gap-3 items-center">
        <div className="statItemLeft w-[84px] h-[84px] rounded-full bg-[#D3FFE7] flex justify-center items-center">{icon}</div>
        <div className="statItemRight flex flex-col gap-[1px]">
          <p className="text-[14px] text-gray-500">{para}</p>
          <h1 className="text-[32px] font-bold my-0">{num}</h1>
          <p className=" flex gap-1 items-center">{status} {perc} this month</p>
        </div>
      </div>
    </>
  );
};

export default StatItem;
