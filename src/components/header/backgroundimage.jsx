import hero from "../../assets/images/image-hero.jpg";
import Header from "./header";
const BackGroundImage = () => {
  return (
    <div>
      <div>
        <img className="w-[100%] h-[100%]" src={hero} alt="" />
      </div>
      <div>
        <Header />
      </div>
    </div>
  );
};

export default BackGroundImage;
