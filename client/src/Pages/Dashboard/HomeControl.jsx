import LogoUpload from "../../Components/Dashboard/LogoUpload";
import LogoSelection from "../../Components/Dashboard/LogoSelection";
import SliderUploadSection from "../../Components/Dashboard/SliderUploadSection";
import SliderSelectionSection from "../../Components/Dashboard/SliderSelectionSection";

const HomeControl = () => {
  return (
    <div className="bg-adminBackground min-h-screen">
      <h1 className="text-center text-xl font-bold bg-yellow-500 h-10">
        Home Control
      </h1>
      <div className="mx-4 bg-white">
        <div>
          <LogoUpload />
          <LogoSelection />
        </div>

        <div>
          <SliderUploadSection />
          <SliderSelectionSection />
          
        </div>
        <div>
          <div className="flex flex-row px-3 items-center justify-between bg-black text-white h-12 ">
            <p className="text-xl">Upload Notice</p>
            <button className="text-xs pl-3 pr-2 py-1 text-black bg-yellow-500">
              +Add
            </button>
          </div>
          <div className="flex flex-row px-3 items-center justify-between bg-white text-black h-12 ">
            <div className="flex items-center space-x-2">
              <input className="w-4 lg:w-3 h-3" type="checkbox" name="" id="" />
              <p className="text-sm">
                This is Demo Site Developed by Oracle Technology
              </p>
            </div>
            <button className="text-xs pl-3 pr-2 py-1 text-white bg-red-500">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeControl;
