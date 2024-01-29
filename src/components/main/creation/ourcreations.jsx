import Imges from "./imges";

const OurCreations = () => {
  return (
    <div className=" mt-[9%]">
      <div className="mx-[12%] flex justify-between">
        <div
          className="text-[#000] text-[3rem] font-[300] font-josefin leading-[3rem] uppercase 
        max-sm:text-[2rem] max-sm:font-[300] max-sm:leading-[2rem] ">
          OUR CREATIONS
        </div>
        <div
          className="w-[9.8125rem] h-[2.5rem] hover:bg-[#000] hover:text-[#FFF]
         border-2 border-[#000] text-[#000]  cursor-pointer font-alata fonr-[400] 
          uppercase pt-2.5 text-center leading-[0.875rem] tracking-[0.3125rem] max-sm:hidden">
          SEE ALL
        </div>
      </div>
      <div className="mt-[5%]">
        <Imges />
      </div>
      <div
        className="w-[9.8125rem] h-[2.5rem] m-auto font-alata fonr-[400]
         border-2 border-[#000] pt-2.5 text-[#000] text-center cursor-pointer  
          uppercase leading-[0.875rem] tracking-[0.3125rem] hover:bg-[#000] hover:text-[#FFF]  md:hidden max-sm:mb-20 max-sm:mt-5">
        SEE ALL
      </div>
    </div>
  );
};

export default OurCreations;
