import banker from "../../../assets/Banker.jpg"
import developer from "../../../assets/Developer.jpg"
import  corporate from "../../../assets/Corporate.jpg"

const Benefitted = () => {

    return (
        <div>
            <h1 className="text-center font-bold text-3xl m-10 bg-slate-200 p-1 w-3/4 mx-auto">Who are using and who Should Use This Website</h1>
             {/* section 1*/}
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-1 flex flex-col justify-center items-center p-5">
                    <h1 className="text-xl font-bold text-blue-500">Banker</h1>
                 <p>Bankers should use task management apps for efficient organization, time management, collaboration, deadline tracking, and project management. These apps streamline workflows, facilitate document management, and provide remote access, enhancing overall productivity and effectiveness.</p>

                </div>

                <div className="flex-1">
                    <img src={banker} alt="" />

                </div>
            </div>
             {/* section 2*/}
            <div className="flex flex-col md:flex-row-reverse gap-5">
                <div className="flex-1 flex flex-col justify-center items-center p-5">
                    <h1 className="text-xl font-bold text-blue-500">Corporate</h1>
                 <p> Using a task management website for corporate professionals provides efficient organization, collaboration, and time management. It offers cloud-based accessibility, project breakdown, document management, and enhances accountability. Additionally, it promotes efficiency through automation, provides analytics for performance tracking, and adapts to changing needs, making it a valuable tool for streamlining workflows in a corporate environment.</p>

                </div>

                <div className="flex-1">
                    <img src={corporate} alt="" />

                </div>
            </div>
             {/* section3 */}
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-1 flex flex-col justify-center items-center p-5">
                    <h1 className="text-xl font-bold text-blue-500">Developer</h1>
                 <p>Using a task management website benefits developers by providing organized task prioritization, seamless collaboration, efficient time and code management, agile project planning, and bug tracking. Features like file attachment, automation, and cloud-based accessibility enhance productivity, while performance analytics aid in continuous improvement.</p>

                </div>

                <div className="flex-1">
                    <img src={developer} alt="" />

                </div>
            </div>
            
        </div>
    );
};

export default Benefitted;