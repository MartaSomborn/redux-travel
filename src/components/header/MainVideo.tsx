import videoHoliday from "../../assets/beach.mp4";

const MainVideo = () => {
  return (
    <div id="main-video" className="h-full w-full relative">
      <div className=" absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,.4)]" />
      <video
        className="h-full w-full object-cover"
        src={videoHoliday}
        autoPlay
        loop
        muted
      />
      <div className="h-full w-full px-4 md:px-[20%] lg:px-[30%] absolute top-0 flex flex-col justify-center items-center text-[#EEEEEE]">
        <h1 className="md:text-3xl lg:text-4xl font-bold">
          Dreamdestination Travel
        </h1>
        <p className="md:text-2xl md:mt-8 sm:mt-4">
          Dreamdestination Travel Company: Your passport to unforgettable
          adventures. We specialize in crafting dream vacations tailored just
          for you. Discover the world's wonders with us!
        </p>
      </div>
    </div>
  );
};

export default MainVideo;
