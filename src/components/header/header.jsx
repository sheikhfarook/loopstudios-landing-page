import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="mt-[-40.5%] mx-[12%] space-y-[11%]">
      <div className="flex   justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex gap-[2rem] hover:underline-offset-8 text-[0.9375rem] font-[400] text-[#FFF] ">
          <div className="cursor-pointer hover:underline decoration-2">
            <div className="rr">About</div>
          </div>
          <div className="cursor-pointer hover:underline decoration-2">
            Careers
          </div>
          <div className="cursor-pointer hover:underline decoration-2">
            Events
          </div>
          <div className="cursor-pointer hover:underline decoration-2">
            Products
          </div>
          <div className="cursor-pointer hover:underline decoration-2">
            Support
          </div>
        </div>
      </div>
      <div className="w-[40.625rem] h-[17.375rem] border-2 relative border-white ">
        <p className="w-[35.625rem] h-[12.375rem] m-auto my-7  text-[4.5rem] text-[#FFF] font-[300] leading-[4.375rem] uppercase">
          Immersive experiences that deliver
        </p>
      </div>
    </div>
  );
};

export default Header;
