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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center my-5 bg-slate-100 p-20 rounded">
        {allData.map((d) => (
          <Classcard d={d}></Classcard>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
