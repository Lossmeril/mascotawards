import { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";

const Mascot = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number }) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Image
      id="mascot"
      width="100px"
      height="100px"
      style={{ left: mousePos.x + "px", top: mousePos.y + "px" }}
      alt=""
      src="mascot.png"
      display={{ base: "none", lg: "block" }}
    ></Image>
  );
};

export default Mascot;
