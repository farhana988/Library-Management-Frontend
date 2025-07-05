type HeadingProps = {
  title: string;
  subtitle?: string;
};

const Heading = ({ title, subtitle }: HeadingProps) => {
  return (
    <div className="text-center mb-12 mt-6 text-[#722323] italic">
      <div className={`text-3xl md:text-4xl font-bold`}>
        {title}
      </div>
      {subtitle && <p className="text-gray-500 mt-2">{subtitle}</p>}
    </div>
  );
};

export default Heading;
