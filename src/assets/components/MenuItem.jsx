const MenuItem = ({ logo, title, arrow }) => {
  return (
    <>
      <div className="menuitem w-[250px]  flex justify-between items-center ">
        <div className="menuItem_left flex items-center  gap-2 w-full">
          <div className="menuItemlogo text-gray-500 text-[24px]">{logo}</div>
          <div className="menuItemtitle text-gray-500 text-[14px] ">{title}</div>
        </div>
        <div className="menuItem_right">
          <div className="menuItemarrow">{arrow}</div>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
