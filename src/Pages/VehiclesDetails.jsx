import { useNavigate, useParams } from "react-router-dom";
import { VehicLeslist } from "../Data/Database";
import VehicLeSlide from "../assets/Components/HomePageComp/VehicleSlide";
import CustomerReview from "../assets/Components/HomePageComp/CustomerReview";
import PageNotFound from "../assets/Components/CommonComp/PageNotFound";

function VehicleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const vehicle = VehicLeslist.find((item) => item.uniqueId === id);

  if (!vehicle) {
    return <PageNotFound />;
  }

  return (
    <section className="w-full bg-[#F9F9F9] mt-18 ">
      <div className="max-w-7xl mx-auto lg:px-8 px-2">
        <div className=" flex gap-x-2 text-sm font-semibold py-4 px-2">
          <span className="cursor-pointer" onClick={() => navigate("/")}>
            Home
          </span>{" "}
          &#62;{" "}
          <span className="cursor-pointer" onClick={() => navigate("/cars")}>
            Car
          </span>{" "}
          &#62; <span>{vehicle.title}</span>
        </div>

        <VehicLeSlide/>
        <CustomerReview/>
      </div>
    </section>
  );
}

export default VehicleDetails;
