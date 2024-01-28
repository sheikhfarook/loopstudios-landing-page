import vr from "../../assets/images/image-interactive.jpg";
import VrMobile from "../../assets/mobile/image-interactive.jpg";
const VrInFo = () => {
  return (
    <>
      <div
        className="mt-[25%] mx-[12%] flex xl:flex-row lg:flex-col md:flex-col
      max-sm:flex-col max-sm:mt-[90%] max-sm:mx-[7%] ">
        <div>
          {/*  */}
          <img className="max-sm:hidden " src={vr} alt="" />
          <img className=" md:hidden" src={VrMobile} alt="" />
        </div>
        <div
          className=" bg-[#fff] lg:mt-auto lg:m-0 xl:ml-[-14.3%] lg:w-[33.8125rem] lg:h-[19.8125rem] 
           md:ml-0 
          md:w-[36.5rem] md:h-[17.8rem] md:m-auto  
         max-sm:w-[20.20rem;] max-sm:h-[19.95rem] max-sm:m-auto">
          <div
            className="w-[27.8125rem] text-[#000] ml-auto space-y-[1.56rem] lg:mt-[5.9rem]
            md:mt-[3.9rem]
            max-sm:w-[17.4375rem] max-sm:m-auto  max-sm:text-center max-sm:mt-14">
            <p
              className=" font-[300]  uppercase font-josefin text-[3rem] leading-[3rem] 
             max-sm:text-[2rem] max-sm:leading-[2rem] ">
              The leader in interactive VR
            </p>
            <p
              className="text-[0.9375rem] font-[400] leading-[1.5625rem] font-alata
            max-sm:leading-[1.5625rem] opacity-[0.4994] ">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VrInFo;
