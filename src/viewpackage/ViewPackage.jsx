import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Guides from "../home/Guides";
import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import useAxiospublic from "../hooks/useAxiospublic";
import Swal from "sweetalert2";

const ViewPackage = () => {
    const axiosPublic = useAxiospublic();
    const [bookedServices, setBookedServices] = useState([]);

    const { user } = useContext(AuthContext);
    const viwepackage = useLoaderData();

    const handleBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const touristName = form.name.value;
        const touristEmail = form.Pname.value;
        const guideName = form.guide.value;
        const price = form.price.value;
        const date = form.date.value;
        const info = form.info.value;
        const touristPhoto = form.photo.value;
        const bookInfo = { touristName, touristEmail, guideName, price, date, touristPhoto, info }
        console.log(bookInfo)

        if (bookedServices.some((booking) => booking.date === date && booking.touristEmail === touristEmail)) {
            Swal.fire({
                title: "make a free time zode",
                text: "sorry you travel ",
                icon: "error"
            });
            return; // Do not proceed with the POST request.
        }

        axiosPublic.post('/userBooking', bookInfo, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                console.log(response.data);
                if (response.data.insertedId) {
                    Swal.fire({
                        title: "package added successfull",
                        text: "package added to your dashbord!",
                        icon: "success"
                    });
                    setBookedServices([...bookedServices, bookInfo]);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    console.log(viwepackage);
    return (
        <div>
            <div className="pt-20">
                <h1 className="py-7 text-3xl text-center">Here is what you will visit</h1>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}

                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-10 mt-4"
                >
                    <SwiperSlide><img src={viwepackage.photo} alt="" style={{ width: '100%', height: '300px' }} /></SwiperSlide>
                    <SwiperSlide><img src={viwepackage.photo2} alt="" style={{ width: '100%', height: '300px' }} /></SwiperSlide>
                    <SwiperSlide><img src={viwepackage.photo3} alt="" style={{ width: '100%', height: '300px' }} /></SwiperSlide>
                    <SwiperSlide><img src={viwepackage.photo4} alt="" style={{ width: '100%', height: '300px' }} /></SwiperSlide>

                </Swiper>
            </div>
            <div>
                <h1 className="py-7 text-center text-3xl font-bold text-pink-400">About the {viwepackage.tourType} tour</h1>
                <p className="text-center">{viwepackage.about}</p>
            </div>
            <div>
                <h1 className="text-center text-3xl text-pink-400 font-bold py-7"> Tour plan</h1>
                <div className="flex justify-around items-center">
                    <div className="w-[150px] h-[150px] flex-col bg-gradient-to-r from-green-200 to-red-200 flex justify-center items-center">
                        <h1 className="font-bold">Day 1</h1>
                        <p>Go to coxaxbazer </p>

                    </div>
                    <div className="w-[150px] h-[150px] bg-gradient-to-r from-pink-200 to-indigo-200 flex flex-col justify-center items-center">Day 2
                        <p>go to ranggamati</p>

                    </div>
                    <div className="w-[150px] h-[150px] bg-gradient-to-r from-green-200 to-red-200 flex flex-col justify-center items-center">
                        <h1>Day 3</h1>
                        <p>Go to bandorban</p>
                    </div>

                </div>
            </div>
            <div>
                <h1 className="py-7 text-center font-bold text-pink-400 text-3xl">Our famous Tour Guide</h1>
                <Guides></Guides>
            </div>
            {/* form section */}
            <div >
                <h1 className="text-center text-2xl font-bold text-red-500 py-7">Fill the form to book this package</h1>
                <form onSubmit={handleBook} className="text-2xl font-bold text-green-400">
                    {/* row of input */}
                    <div className="grid lg:flex lg:gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text"> Turist Name</span>
                            </label>
                            <label className="input-group">
                                <span>name</span>
                                <input type="text" name="name" defaultValue={user?.displayName}
                                    className="input input-bordered w-full" readOnly />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Turist email</span>
                            </label>
                            <label className="input-group">
                                <span>email</span>
                                <input type="text" defaultValue={user?.email} name="Pname"
                                    className="input input-bordered w-full" readOnly />
                            </label>
                        </div>
                    </div>
                    <div className="grid lg:flex lg:gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Guide name</span>
                            </label>
                            <label className="input-group">
                                <span>guide</span>
                                <select name="guide" className="select select-bordered w-full">
                                    <option value="guide1">John Doe</option>
                                    <option value="guide2">Jane Smith</option>
                                    <option value="guide3">Bob Johnson</option>
                                    <option value="guide3">Emily Davis</option>
                                    <option value="guide3">Michael Wilson</option>
                                    <option value="guide3">Sophia Lee</option>
                                    <option value="guide3">David Martinez</option>
                                    {/* Add more options as needed */}
                                </select>
                            </label>
                        </div>


                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <span>$USD</span>
                                <input type="text" defaultValue={viwepackage.price} name="price" className="input input-bordered w-full" readOnly />
                            </label>
                        </div>
                    </div>
                    <div className="grid lg:flex lg:gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Tour taking date</span>
                            </label>
                            <label className="input-group">
                                <span>date</span>
                                <input type="date" placeholder="give a data " name="date" className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Instruction</span>
                            </label>
                            <label className="input-group">
                                <span>info</span>
                                <input type="text" placeholder="Address" name="info" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Turist photo</span>
                        </label>
                        <label className="input-group">
                            <span>photo</span>
                            <input type="text" defaultValue={user.photoURL} name="photo" className="input input-bordered w-full" readOnly />
                        </label>
                    </div>

                    <input type="submit" value="BOOK NOW" className="btn btn-block mt-6" id="" />
                </form>
            </div>
        </div>
    );
};

export default ViewPackage;