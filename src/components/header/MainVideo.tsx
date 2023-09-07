import videoHoliday from "../../assets/beach.mp4";

const MainVideo = () => {
  return (
    <div className="h-full w-full relative">
      <div className=" absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,.4)]" />
      <video
        className="h-full w-full object-cover"
        src={videoHoliday}
        autoPlay
        loop
        muted
      />
      <div className="h-full w-full absolute  top-0 flex flex-col justify-center items-center text-[#EEEEEE]">
        <h1>Welcome</h1>
        <p>To my site</p>
      </div>
    </div>
  );
};

export default MainVideo;
