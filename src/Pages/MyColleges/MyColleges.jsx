import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import CollegeReview from "./CollegeReview";

const MyColleges = () => {
  const [users, setUsers] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://campusease-server.vercel.app/student?email=${user?.email}`)
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, [user?.email]);

  return (
    <div className="bg-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 justify-items-center px-4 md:px-8 lg:px-10 py-16">
        {users.map((item) => (
          <CollegeReview key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyColleges;