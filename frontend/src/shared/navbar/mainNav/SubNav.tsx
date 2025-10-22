const SubNav = () => {
  return (
    <div className="pb-2 border-b border-b-[#ebebeb]">
      <div className="flex items-center justify-between h-10 leading-8 text-[8px] md:text-xs container px-4 xl:px-0">
        <>
          <h6 className="text-black font-semibold">Welcome To GearGrid USA</h6>
        </>
        <div className="flex items-center text-black font-medium">
          <a
            href="mailto:geargrid@gmail.com"
            className="border-r border-r-light-gray border-l border-l-light-gray px-1 hover:text-secondary"
          >
            {/* mdnaimurrahman681@gmail.com */}
            geargrid@gmail.com
          </a>
          <a
            href="tel:+12055551234"
            className="border-r border-r-light-gray h-full px-1 hover:text-secondary"
          >
            +1 (205) 555-1234
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
