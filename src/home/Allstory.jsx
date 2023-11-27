import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "../hooks/useAxiospublic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";


const Allstory = () => {

    const axiosPublic = useAxiospublic();
    const { isFetching, data, } = useQuery({
        queryKey: ['clientstory'],
        queryFn: () =>
            axiosPublic.get('/clienTStoryall').then((res) => res.data),
    });

    if (isFetching) {
        return <p>Loading...</p>;
    }
    console.log(data)
    return (
        <div className="pt-20">
            {
                data.map((item) => (
                    <div key={item._id} >
                        <h1> <strong>Tourist Name: </strong>{item.touristName} </h1>
                        <h1> <strong> Feelings:</strong> {item.feelings }</h1>
                        <h1 className="text-center font-bold">Visited spots</h1>
                        <div className="pt-5">
                            
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}

                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper mb-10 mt-4"
                            >
                                <SwiperSlide><img src={item.photo} alt="" style={{ width: '100%', height: '300px' }} /></SwiperSlide>
                                <SwiperSlide><img src={item.photo1} alt="" style={{ width: '100%', height: '300px' }} /></SwiperSlide>
                                <SwiperSlide><img src={item.photo2} alt="" style={{ width: '100%', height: '300px' }} /></SwiperSlide>
                            </Swiper>
                        </div>
                         <Link to={`/fullstory/${item._id}`} className="btn flex justify-center items-center w-2/6 mx-auto mb-4">See {item.touristName} story</Link>
                    </div>
                ))
            }

        </div>
    );
};

export default Allstory;