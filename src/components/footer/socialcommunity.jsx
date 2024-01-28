import logo from "../../assets/logo.svg";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";
const SocialCommunity = () => {
  return (
    <div
      className="bg-black lg:h-[10rem]
     md:h-[36.375rem] 
     max-sm:h-[32.375rem]
     ">
      <div
        className="mx-[12%] flex lg:pt-10 justify-between
       lg:flex-row 
       md:flex-col md:pt-20 
       max-sm:flex-col max-sm:pt-10">
        <div className="space-y-8 md:text-center">
          <div>
            <img
              className=" w-[9rem] h-[1.5rem] 
              lg:m-0 
              md:m-auto 
              max-sm:w-[9rem] max-sm:h-[1.5rem] max-sm:text-center max-sm:m-auto"
              src={logo}
              alt=""
            />
          </div>
          <div
            className="flex gap-[2rem] hover:underline-offset-8 text-[0.9375rem] 
             font-[400] text-[#FFF] font-alata my-auto
             lg:flex-row 
             md:flex-col md:text-center
            max-sm:flex-col max-sm:text-center">
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
            <div className="cursor-pointer hover:underline decoration-2 ">
              Support
            </div>
          </div>
        </div>
        <div
          className="space-y-8 
        lg:m-0 
        md:m-auto md:mt-14 max-sm:m-auto max-sm:mt-10">
          <div
            className="flex gap-5 w-[9rem] h-[1.5rem] cursor-pointer 
           justify-start 
           lg:ml-[7.4rem]
            md:m-auto
            max-sm:m-auto">
            <img
              className=" transition-transform duration-300 transform hover:underline"
              src={facebook}
              alt=""
            />
            <img src={twitter} alt="" />
            <img src={pinterest} alt="" />
            <img src={instagram} alt="" />
          </div>
          <div className="opacity-[0.5] text-white text-left">
            © 2021 Loopstudios. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialCommunity;
