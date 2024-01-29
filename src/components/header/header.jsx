import logo from "../../assets/logo.svg";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import hamburger from "../../assets/icon-hamburger.svg";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className="md:mt-[-40.5%] md:mx-[12%] md:space-y-[11%] max-sm:mt-[-165%] max-sm:mx-[7%] max-sm:space-y-[45%]">
      <div className="flex justify-between">
        <div>
          <img
            className="max-sm:w-[9rem] max-sm:h-[1.5rem]"
            src={logo}
            alt=""
          />
        </div>
        <div className="md:hidden mr-[-18.3px]">
          <Button ref={btnRef} colorScheme="white" onClick={onOpen}>
            <img className="mb-[13px] " src={hamburger} alt="" />
          </Button>
          <Drawer
            isOpen={isOpen}
            // placement="center"
            size="100vh"
            onClose={onClose}
            finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent bg="black">
              <DrawerCloseButton
                fontSize="1.2rem"
                marginTop={"1.5rem"}
                color="white"
                marginRight={"0rem"}
              />
              <DrawerHeader>
                <div>
                  <img
                    className="bg-black w-[9rem] h-[1.5rem] mt-[1.5rem]"
                    src={logo}
                    alt=""
                  />
                </div>
              </DrawerHeader>
              <DrawerBody>
                <div className="font-josefin text-[1.5rem] text-[#FFF] uppercase font-[300] mt-32 space-y-4">
                  <div className="cursor-pointer ">About</div>
                  <div className="cursor-pointer ">Careers</div>
                  <div className="cursor-pointer ">Events</div>
                  <div className="cursor-pointer">Products</div>
                  <div className="cursor-pointer">Support</div>
                </div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>

        <div
          className="flex gap-[2rem] hover:underline-offset-8 text-[0.9375rem] 
        font-[400] text-[#FFF] font-alata my-auto
        max-sm:hidden">
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
      <div
        className="border-2 relative border-white font-josefin xl:w-[40.625rem] xl:h-[17.375rem] 
        lg:w-[28.625rem] lg:h-[13.375rem]
        md:w-[21.625rem] md:h-[10.375rem]
        max-sm:w-[20.4375rem] max-sm:h-[12.25rem] ">
        <p
          className="m-auto xl:text-[4.5rem] text-[#FFF] font-[300]  uppercase  
        xl:my-7 xl:w-[35.625rem] xl:h-[12.375rem] xl:leading-[4.375rem] 
        lg:leading-[3.5rem] lg:text-[3.25rem] lg:my-5 lg:w-[25.625rem]  lg:h-[12.375rem] 
        md:leading-[2.7rem] md:text-[2.5rem] md:my-3.5 md:w-[18.955rem]  md:h-[10.375rem] 
        max-sm:leading-[2.375rem] max-sm:text-[2.5rem] max-sm:my-3 max-sm:w-[17.4375rem]  max-sm:h-[9.125rem]">
          Immersive experiences that deliver
        </p>
      </div>
    </div>
  );
};

export default Header;
