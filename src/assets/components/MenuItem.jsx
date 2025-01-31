const MenuItem = ({ logo, title, arrow }) => {
  return (
    <>
      <div className="menuitem w-[250px]  flex justify-between">
        <div className="menuItem_left flex items-center gap-2 w-full">
          <div className="menuItemlogo">{logo}</div>
          <div className="menuItemtitle">{title}</div>
        </div>
        <div className="menuItem_right">
          <div className="menuItemarrow">{arrow}</div>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
