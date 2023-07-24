import { useEffect, useState } from "react";
import Classcard from "../Home/PopulerClasses/Classcard";

const Colleges = () => {
  const [allData, getData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => getData(data));
  }, []);

  return (
    <div className="bg-slate-100 py-5">
        <h2 className="text-2xl md:text-4xl md:mt-10 text-center font-bold">All Colleges</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center my-5 md:my-10 bg-slate-100 w-[95%] mx-auto rounded">
        {allData.map((d) => (
          <Classcard d={d}></Classcard>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
