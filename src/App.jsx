import "./App.css";
import SocialCommunity from "./components/footer/socialcommunity";
import BackGroundImage from "./components/header/backgroundimage";
import OurCreations from "./components/main/creation/ourcreations";
// import OurCreations from "./components/main/creation/ourcreations";
import VrInFo from "./components/main/vrinfo";
import { TailwindIndicator } from "./components/tailwind/tailwindindicator";

function App() {
  return (
    <div>
      <BackGroundImage />
      <VrInFo />
    </div>
  );
}

export default App;
