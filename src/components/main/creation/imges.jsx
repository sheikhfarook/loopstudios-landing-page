import EARTH from "../../../assets/images/image-deep-earth.jpg";
import ARCADE from "../../../assets/images/image-night-arcade.jpg";
import SOCCER from "../../../assets/images/image-soccer-team.jpg";
import GRID from "../../../assets/images/image-grid.jpg";
import ABOVE from "../../../assets/images/image-from-above.jpg";
import BOREALIS from "../../../assets/images/image-pocket-borealis.jpg";
import CURIOSITY from "../../../assets/images/image-curiosity.jpg";
import FISHEYE from "../../../assets/images/image-fisheye.jpg";
import Earth from "../../../assets/mobile/image-deep-earth.jpg";
import Arcade from "../../../assets/mobile/image-night-arcade.jpg";
import Soccer from "../../../assets/mobile/image-soccer-team.jpg";
import Grid from "../../../assets/mobile/image-grid.jpg";
import Above from "../../../assets/mobile/image-from-above.jpg";
import Borealis from "../../../assets/mobile/image-pocket-borealis.jpg";
import Curiosity from "../../../assets/mobile/image-curiosity.jpg";
import Fisheye from "../../../assets/mobile/image-fisheye.jpg";

const Imges = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 w-[79%] mx-[11.5%] ">
        <div className="mb-32 hover:opacity-80  cursor-pointer">
          <img className="max-sm:hidden" src={EARTH} alt="" />
          <img className="md:hidden" src={Earth} alt="" />

          <p className=" w-[6rem] text-[2rem] font-[300] leading-[2rem]  text-[#FFF] relative ml-[2.5rem] mt-[-6.4rem]">
            DEEP EARTH
          </p>
        </div>
        <div className=" mb-32 hover:opacity-25 cursor-pointer">
          <img className="max-sm:hidden" src={ARCADE} alt="" />
          <img className="md:hidden" src={Arcade} alt="" />

          <p className="w-[6rem] text-[2rem] font-[300] leading-[2rem] text-[#FFF]  relative  ml-[2.5rem] mt-[-6.4rem]">
            NIGHT ARCADE
          </p>
        </div>
        <div className="mb-32 hover:opacity-25 cursor-pointer">
          <img className="max-sm:hidden" src={SOCCER} alt="" />
          <img className="md:hidden" src={Soccer} alt="" />

          <p className="w-[8rem] text-[2rem] font-[300] leading-[2rem] text-[#FFF]  relative  ml-[2.5rem] mt-[-6.4rem]">
            SOCCER TEAM VR
          </p>
        </div>
        <div className="mb-32 hover:opacity-25 cursor-pointer">
          <img className="max-sm:hidden" src={GRID} alt="" />
          <img className="md:hidden" src={Grid} alt="" />

          <p className="w-[6rem] text-[2rem] font-[300] leading-[2rem] text-[#FFF]  relative  ml-[2.5rem] mt-[-6.4rem]">
            THE GRID
          </p>
        </div>
        <div className="mb-32 hover:opacity-25 cursor-pointer">
          <img className="max-sm:hidden" src={ABOVE} alt="" />
          <img className="md:hidden" src={Above} alt="" />

          <p className="w-[9rem] text-[2rem] font-[300] leading-[2rem] text-[#FFF]  relative  ml-[2.5rem] mt-[-6.4rem]">
            FROM UP ABOVE VR
          </p>
        </div>
        <div className="mb-32  hover:opacity-25 cursor-pointer">
          <img className="max-sm:hidden" src={BOREALIS} alt="" />
          <img className="md:hidden" src={Borealis} alt="" />

          <p className="w-[6rem] text-[2rem] font-[300] leading-[2rem] text-[#FFF]   relative  ml-[2.5rem] mt-[-6.4rem]">
            POCKET BOREALIS
          </p>
        </div>
        <div className=" mb-32  hover:opacity-25 cursor-pointer ">
          <img className="max-sm:hidden" src={CURIOSITY} alt="" />
          <img className="md:hidden" src={Curiosity} alt="" />

          <p className="w-[6rem]  text-[2rem] font-[300] leading-[2rem] text-[#FFF]  relative  ml-[2.5rem] mt-[-6.4rem]">
            THE CURIOSITY
          </p>
        </div>
        <div className="mb-32  hover:opacity-25 cursor-pointer">
          <img className="max-sm:hidden" src={FISHEYE} alt="" />
          <img className="md:hidden" src={Fisheye} alt="" />

          <p className="w-[8rem] text-[2rem] font-[300] leading-[2rem] text-[#FFF]  relative  ml-[2.5rem] mt-[-6.4rem]">
            MAKE IT FISHEYE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Imges;
