import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { image, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
      <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className=" mb-5 pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
        <div className={`relative h-[400px] w-[500px] overflow-hidden rounded-md md:h-[500px] md:w-[400px]`}>
          <Image src={image} alt={title} fill />
        </div> 
      </div>
    </div>
  );
};

export default SingleFeature;

