import { useNavigate, useParams } from "react-router-dom";
import { VehicLeslist } from "../Data/Database";
import VehicLeSlide from "../assets/Components/HomePageComp/VehicleSlide";
import CustomerReview from "../assets/Components/HomePageComp/CustomerReview";
import PageNotFound from "../assets/Components/CommonComp/PageNotFound";
import VehicleImageList from "../assets/Components/VehicleDatailsComp/VehicleImageList";
import Vehicleinfo from "../assets/Components/VehicleDatailsComp/Vehicleinfo";
import Cardeals from "../assets/Components/VehicleDatailsComp/Cardeals";
import AboutTheCar from "../assets/Components/VehicleDatailsComp/AboutTheCar";
import QualityReport from "../assets/Components/VehicleDatailsComp/QualityReport";
import EMICalculator from "../assets/Components/VehicleDatailsComp/EMICalculator";
import Benefits from "../assets/Components/VehicleDatailsComp/Benefits";

function VehicleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const vehicle = VehicLeslist.find((item) => item.uniqueId === id);

  if (!vehicle) {
    return <PageNotFound />;
  }

  return (
    <section className="w-full bg-white">
      {/* Navigation List */}
      <div className="bg-white">
        <div className=" max-w-7xl mx-auto  flex gap-x-2 items-center bg-white text-sm font-semibold p-4 lg:px-8">
          <span className="cursor-pointer" onClick={() => navigate("/")}>
            Home
          </span>{" "}
          &#62;{" "}
          <span className="cursor-pointer" onClick={() => navigate("/cars")}>
            Car
          </span>{" "}
          &#62; <span>{vehicle.title}</span>
        </div>
      </div>
      {/* Main Components */}
      <main className="bg-[#EFEFEF]  py-6">
        <div className="max-w-7xl mx-auto lg:px-8 px-4 ">
          <div className="md:grid grid-cols-5 md:gap-8">
            <div className="col-span-3">
              <VehicleImageList vehicle={vehicle} />

              <div className="col-span-2 md:hidden block">
              <Vehicleinfo vehicle={vehicle} />
            </div>

              <div>
                <Cardeals vehicle={vehicle} />
                <AboutTheCar vehicle={vehicle} />
                <QualityReport vehicle={vehicle} />
                <EMICalculator vehicle={vehicle} />
                <Benefits vehicle={vehicle} />
              </div>
            </div>
            <div className="col-span-2 md:block hidden">
              <Vehicleinfo vehicle={vehicle} />
            </div>
          </div>
        </div>
      </main>

      {/* Common Components */}
      <div>
        <VehicLeSlide />
        <CustomerReview />
      </div>
    </section>
  );
}

export default VehicleDetails;
