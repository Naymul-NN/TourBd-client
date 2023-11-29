import { Link, useLoaderData } from "react-router-dom";

const Stotydetails = () => {
    const story = useLoaderData();
    // console.log(story);
    return (
        <div className="pt-32">
            <h1 className="text-2xl">My name is {story.touristName} and i want to share my tour exprience in bangladesh</h1>
            <div className=" grid lg:grid-cols-3 gap-9">
               <div >
               <h1 className="font-bold py-6">Day 1</h1>
                <p className="text-justify">{story.day1}</p>
               </div>
               <div>
               <h1 className="font-bold py-6">Day 2</h1>
                <p className="text-justify">{story.day2}</p>
               </div>
               <div>
               <h1 className="font-bold py-6">Day 3</h1>
                <p className="text-justify">{story.day3}</p>
               </div>
            </div>
            <Link to="/allstory" className="btn w-2/6 mx-auto flex justify-center items-center mb-6">See all story</Link>
        </div>
    );
};

export default Stotydetails;