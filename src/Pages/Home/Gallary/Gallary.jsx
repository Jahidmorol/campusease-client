import img1 from "../../../assets/gallary/img (1).jpg";
import img2 from "../../../assets/gallary/img (2).jpg";
import img3 from "../../../assets/gallary/img (3).jpg";
import img4 from "../../../assets/gallary/img (4).jpg";
import img5 from "../../../assets/gallary/img (5).jpg";
import img6 from "../../../assets/gallary/img (6).jpg";





const Gallary = () => {
    const images = [img1, img2, img3, img4, img5, img6];

  
    return (
      <div className="bg-[#6fb9b9] py-8 md:py-16">
          <h2 className="text-2xl md:text-4xl text-center font-bold mb-6 text-white">New Collages</h2>
        <div className="grid md:grid-cols-2 gap-3 gap-x-0 lg:grid-cols-3 w-[95%] mx-auto">
          {images.map((img, index) => (
            <div
              key={index}
              className=" w-full md:w-96 h-64 mx-auto border-2 rounded-md border-neutral bg-slate-100"
            >
              {" "}
              <img src={img} data-aos="zoom-in" className="h-56 w-[95%] rounded mx-auto mt-3 "></img>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Gallary;