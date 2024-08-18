import Image from "next/image";
import lamp from "../../public/element/lamp.svg";
import bg from "../../public/element/bg.png";
import love1 from "../../public/element/love1.svg";
import love2 from "../../public/element/love2.svg";
import cake from "../../public/element/lottie/cake.json";
import boom from "../../public/element/lottie/boom.json";
import { useEffect, useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import kepalaDua from "../../public/element/20.png";
import msg from "../../public/element/msg.png";
import msgBefore from "../../public/element/msgBefore.png";
import ReactCardFlip from "react-card-flip";
import loveMsg from "../../public/element/loveMessage.svg";
import one from '../../public/element/1.png';
import two from '../../public/element/2.png';
import three from '../../public/element/3.png';

export default function Home() {
  const cakeRef = useRef();
  const boomRef = useRef();
  const [alive, setAlive] = useState(false);
  const [flip, setFlip] = useState(false);

  const afterClick = () => {
    if (alive) {
      boomRef.current.play();
      setAlive(false);
      cakeRef.current.play();
      setTimeout(() => {
        cakeRef.current.pause();
      }, 900);
    }
  };

  const flips = () => {
    setFlip(true);
  };
 
  useEffect(() => {
    // alert("Pencet kue buat tiup lilin.");
    setTimeout(() => {
      cakeRef.current.pause();
      setAlive(true)
    }, 1000);
  }, []);

  return (
    <div className=" overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-[100vw] h-[100vh]">
        <Player
          ref={boomRef}
          src={boom}
          className="fixed bottom-0 w-[200%] z-11 lg:w-[100vw]"
        />
        <Image src={lamp} alt="lamp" className="absolute lg:-mt-4 object-cover w-[250%] lg:w-[100%] z-10" />
        <Image src={love1} alt="love" className="absolute w-[80%] -top-10 lg:top-0 -left-16 lg:left-0 lg:w-[30%] z-10" />
        <div className="absolute bottom-5 z-10 w-[100%] flex justify-center item-center">
        <Image src={kepalaDua} alt="20" className="w-[400%] lg:w-[100%]" />
        </div>
        <Image
          src={love1}
          alt="love"
          className="absolute right-0 w-[80%] lg:w-[30%] -right-16 lg:right-0 -top-10 lg:top-0 -scale-x-100 w-[30%] z-10"
        />
        <Image
          src={bg}
          alt="background"
          className="fixed w-[100vw] opacity-40 h-[100vh] object-cover z-0"
        />

        <div className="absolute w-[100vw] flex flex-col-reverse justify-center items-center h-[100vh] z-10 md:flex-col lg:flex-row">
          <div className="items-start w-[80%] lg:w-[40%] justify-center flex flex-col">
            <h1 className="font-extrabold mb-2 text-3xl">
              Happy Birthday <br></br>
              <span className="text-pink">Adindaku...</span>
            </h1>
            <p className="lg:w-[70%] text-justify">
              Sayangnya aku sudahh{" "}
              <span className="font-extrabold">20 tahun</span> sudah besarr
              hehehe. jadi punya aku terus yaa sayanggku cintakuu.
            </p>
          </div>
          <div className="w-[75%] mb-10 lg:mb-0 lg:w-[25%] z-20" onClick={afterClick}>
            <Player ref={cakeRef} src={cake} autoplay />
          </div>
        </div>
      </div>
      {/* Message */}
      <div className="mt-5 mb-16 relative w-[100vw]">
        <div className="w-[100%] text-center flex flex-col justify-center items-center">
          <h1 className="text-pink font-extrabold text-3xl">MESSAGE</h1>
          <ReactCardFlip
            isFlipped={flip}
            containerClassName="w-[100%] lg:w-[30%] mt-10 z-20 cursor-pointer" 
            flipDirection="horizontal"
          >
            <Image onClick={() => flips()} className="w-[100%]" src={msgBefore} />
            <Image src={msg} className="w-[100%]" />
          </ReactCardFlip>
          <Image src={loveMsg} className="absolute lg:block hidden w-[10%] right-64" />
          <Image
            src={loveMsg}
            className="absolute w-[10%] lg:block left-64 hidden -scale-x-100"
          />
        </div>
      </div>
      <div className="mt-5 relative w-[100vw] flex flex-col items-center text-center">
        <h1 className="text-pink w-[100%] mb-16 font-extrabold text-3xl">
          MEMORIES
        </h1>
        <div className="flex flex-col lg:flex-row w-[90%] justify-center items-center">
          <Image src={one} className="w-[100%]" />
          <Image src={two} className="w-[100%]" />
          <Image src={three} className="w-[100%]"/>
        </div>
        <div className="mt-24 mb-6" >
          <p >© Copyright Bayu Setiawan 2024 - Crafted with love</p>
        </div>
        <Image src={love2} className="absolute w-[70%] lg:w-[20%] -right-10 lg:right-0 lg:bottom-0 bottom-20 -scale-x-100"/>
        <Image src={love2} className="absolute w-[70%] lg:w-[20%] lg:left-0 -left-10 lg-bottom-0 bottom-20"/>
      </div>
    </div>
  );
}
