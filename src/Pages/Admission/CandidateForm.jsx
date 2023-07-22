import React from "react";

const CandidateForm = () => {
  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold mb-4">Candidate Details</h2>
      {/* Your form inputs go here */}
      <form>
        {/* Candidate Name */}
        {/* Subject */}
        {/* Candidate Email */}
        {/* Candidate Phone number */}
        {/* Address */}
        {/* Date of Birth */}
        {/* Image field */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CandidateForm;
