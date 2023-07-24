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
    <div className="bg-slate-100 py-20">
      <div className="w-[95%] md:w-100 mx-auto md:flex items-center justify-center gap-2 my-10">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by college name or admission date"
          className="input  border-2 border-[#6fb9b9]  md:w-[600px] py-2 px-2"
        />
        <button className="inline-block md:px-12 px-3 ml-2  py-3 text-sm font-medium text-white bg-[#6fb9b9] border border-[#6fb9b9] rounded active:text-violet-500 hover:bg-transparent hover:text-[#6fb9b9] focus:outline-none focus:ring">
          Find College
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center my-5 bg-slate-100 w-[95%] mx-auto rounded">
        {filteredEngineers.slice(0, 3).map((d) => (
          <Classcard d={d}></Classcard>
        ))}
      </div>
    </div>
  );
};

export default PopulerClasses;
