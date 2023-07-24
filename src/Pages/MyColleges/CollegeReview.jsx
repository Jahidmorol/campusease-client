import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const CollegeReview = ({ item }) => {
  const {
    collegeName,
    address,
    candidateEmail,
    candidateName,
    candidatePhone,
    dateOfBirth,
    imgURL,
    subject,
    _id,
  } = item;
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const handleReview = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const textarea = form.textarea.value;
    const number = form.number.value;

    const reviewInfo = {
      textarea,
      number,
      candidateName,
      imgURL: user.photoURL,
    };
    console.log(reviewInfo);
    fetch("https://campusease-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          setLoading(false);
        }
      });
  };

  return (
    <div className="p-6 bg-white rounded shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <img
          src={imgURL}
          alt={candidateName}
          className="w-16 h-16 rounded-full mr-4"
        />
        <h2 className="text-xl font-bold">{candidateName}</h2>
      </div>
      <p className="text-gray-600 mb-4">
        <span className="font-bold">College Name:</span> {collegeName}
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold">Candidate Email:</span> {candidateEmail}
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold">Candidate Phone:</span> {candidatePhone}
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold">Subject:</span> {subject}
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold">Date Of Birth:</span> {dateOfBirth}
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold">Address:</span> {address}
      </p>
      <form onSubmit={handleReview} className="mb-4">
        <div className="form-control">
          <label className="label">
            <h4 className="font-bold text-2xl">Review</h4>
          </label>
          <textarea
            placeholder="Write your review here..."
            name="textarea"
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <h4 className="font-bold text-xl">Rating</h4>
          </label>
          <input
            type="number"
            placeholder="Rating (1-5)"
            name="number"
            className="input input-bordered w-32"
          />
        </div>
        <div className="mt-4">
          <button
            className="px-3 ml-2  py-3 text-sm font-medium text-white bg-[#6fb9b9] border border-[#6fb9b9] rounded active:text-success hover:bg-transparent hover:text-[#6fb9b9] focus:outline-none focus:ring"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CollegeReview;
