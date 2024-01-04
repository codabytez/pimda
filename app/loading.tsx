import { ImSpinner8 } from "react-icons/im";
const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <ImSpinner8 className="w-6 h-6  text-primary-green-600 animate-spin" />
    </div>
  );
};

export default Loading;
