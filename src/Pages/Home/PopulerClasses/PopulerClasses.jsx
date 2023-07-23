import { useEffect, useState } from "react";
import Classcard from "./Classcard";

const PopulerClasses = () => {
  // console.log(data);
  const [allData, getData] = useState([]);

  const [search, setSearch] = useState("");
  //   console.log(search);

  const filteredEngineers = allData.filter((enginee) => {
    const lowercaseSearch = search.toLowerCase();
    return (
      lowercaseSearch === "" ||
      enginee.college_name.toLowerCase().includes(lowercaseSearch) ||
      enginee.admission_dates.toLowerCase().includes(lowercaseSearch)
    );
  });  

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => getData(data));
  }, []);

  

  return (
    <div className="bg-slate-100 py-5">
      <div className="flex items-center justify-center gap-2 mt-10 mb-12">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by college name or admission date"
          className="input  border-2 border-[#c084fc]  md:w-[600px] py-2 px-2"
        />
        <button className="inline-block px-12 py-3 text-sm font-medium text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">
          Find College
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center my-5 bg-slate-100 p-20 rounded">
        {filteredEngineers.slice(0, 3).map((d) => (
          <Classcard d={d}></Classcard>
        ))}
      </div>
    </div>
  );
};

export default PopulerClasses;
