import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const GuideDetails = () => {
    const guideinfo = useLoaderData();
    // console.log(guideinfo);
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const [userComments, setUserComments] = useState([]);

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleRatingChange = (event) => {
        setRating(Number(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Save the comment and rating to the state
        setUserComments([...userComments, { comment, rating }]);
        // Clear the input fields
        setComment("");
        setRating(0);
    };

    return (
        <div className="pt-20 pb-20">
            <h1 className="text-center py-7 font-bold">Here you can see the guide details</h1>
            {/* guide profile */}
            <div className="flex justify-center items-center gap-10">
                <div >
                    <img className="w-96" src={guideinfo.photo} alt="" />
                </div>
                <div className="space-y-3">
                    <h1><span className="font-bold">Name:</span>  {guideinfo.name}</h1>
                    <h1><span className="font-bold">Email:</span> {guideinfo.email}</h1>
                    <h1><span className="font-bold">Languages:</span> {guideinfo.language}</h1>
                    <h1><span className="font-bold">Exprience:</span> {guideinfo.experience}</h1>
                    <h1><span className="font-bold">Nationality:</span> {guideinfo.nationality} </h1>
                    <h1><span className="font-bold">About:</span> {guideinfo.details}</h1>
                </div>
            </div>
            {/* comment section */}

            <div className="mt-10">
                <h2 className="text-center text-2xl font-bold mb-4">User Comments and Ratings</h2>
                    {/* Display user comments */}
                <div className="mt-4 text-center">
                    {userComments.map((userComment, index) => (
                        <div key={index} className="mb-2">
                            <p><strong>Comment:</strong> {userComment.comment}</p>
                            <p><strong>Rating:</strong> {userComment.rating}</p>
                        </div>
                    ))}
                </div>

                
                {/* Comment form */}
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <textarea
                        placeholder="Add your comment..."
                        value={comment}
                        onChange={handleCommentChange}
                        className="border p-2 mb-2"
                    />
                    <input
                        type="number"
                        placeholder="Add your rating (1-5)"
                        value={rating}
                        onChange={handleRatingChange}
                        className="border p-2 mb-2"
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit Comment</button>
                </form>

               
            </div>
        </div>
    );
};

export default GuideDetails;