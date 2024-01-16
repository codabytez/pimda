import { NextPage } from "next";

const Spinner: NextPage<SpinnerProps> = ({ color = "text-white" }) => {
  const classes = `loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 ${color}`;

  return <div className={classes}></div>;
};

export default Spinner;
