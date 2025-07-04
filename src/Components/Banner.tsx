import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="relative w-full h-64 md:h-96">
      <img
        src={banner}
        alt="Banner"
        className="w-full h-full xl:h-[450px] object-cover"
      />
    </div>
  );
};

export default Banner;
