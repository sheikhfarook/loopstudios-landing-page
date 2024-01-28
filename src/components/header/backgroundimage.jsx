import hero from "../../assets/images/image-hero.jpg";
import hero2 from "../../assets/mobile/image-hero.jpg";
import Header from "./header";
const BackGroundImage = () => {
  return (
    <div className="">
      <div>
        <img className="w-[100%] h-[100%] max-sm:hidden" src={hero} alt="" />
        <img className="w-[100%] h-[100%] md:hidden" src={hero2} alt="" />
      </div>
      <div>
        {" "}
        <Header />
      </div>
    </div>
  );
};

export default BackGroundImage;
