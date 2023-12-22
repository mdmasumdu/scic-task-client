import img3 from "../../../assets/9693972.jpg"
import img4 from "../../../assets/42.jpg"

const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center">
            <img className="h-[500px] lg:w-[600px] mx-auto" src={img3} alt="" />
            <img className="h-[500px] lg:w-[600px] mx-auto" src={img4} alt="" />
        </div>
    );
};

export default Banner;