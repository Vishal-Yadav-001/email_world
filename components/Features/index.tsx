import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="My Works"
            paragraph="Following are some of my previous works for clients"
            center
          />

          <div className="grid  gap-x-8 gap-y-14 lg:grid-cols-2 xs:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
