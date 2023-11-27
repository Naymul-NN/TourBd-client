import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "../hooks/useAxiospublic";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import { Link } from "react-router-dom";
const Allpackage = () => {
    const [activeTab, setActiveTab] = useState(0);

    const axiosPublic = useAxiospublic();
    const { isFetching, data, } = useQuery({
        queryKey: ['allpackage'],
        queryFn: () =>
            axiosPublic.get('/allpackage').then((res) => res.data),
    });

    if (isFetching) {
        return <p>Loading...</p>;
    }
    const Adventure = data.filter(item => item.tourType === 'Adventure')
    const hiking = data.filter(item => item.tourType === 'hiking')
    const walking = data.filter(item => item.tourType === 'walking')
    const boating = data.filter(item => item.tourType === 'boating')
    const flying = data.filter(item => item.tourType === 'flying')


    console.log(Adventure, hiking, walking, boating, flying)
    return (
        <div className="pt-20">
            <h1 className="text-center py-7">Here you see all of our package</h1>
            <div className='text-center '>
                <Tabs selectedIndex={activeTab} onSelect={index => setActiveTab(index)}>
                    {/* Tab List */}
                    <TabList className="font-bold pb-5 text-pink-300">
                        <Tab>Adventure</Tab>
                        <Tab>Hiking</Tab>
                        <Tab>Walking</Tab>
                        <Tab>Boating</Tab>
                        <Tab>Flying</Tab>
                    </TabList>

                    {/* Tab Panels */}
                    <TabPanel>
                      <div className=" grid gap-7 justify-evenly items-center pb-10 ">
                      {
                            Adventure.map(item => (
                                <div key={item._id} className="card bg-base-100 shadow-xl">
                                    <figure><img className="h-[300px] w-[600px] hover:scale-125" src={item.photo} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title"><strong>Name:</strong>{item.tourType}</h2>
                                        <h2 className="card-title"><strong>Title:</strong>{item.tripTitle}</h2>
                                        <h2 className="card-title"><strong>Price:</strong>{item.price}$</h2>
                                        <div className="card-actions ">
                                        <Link to={`/allDetails/${item._id}`}><button className="btn btn-secondary">View package</button></Link>   
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                      </div>

                    </TabPanel>
                    <TabPanel>
                    <div className=" grid gap-7 justify-evenly items-center pb-10 ">
                      {
                            hiking.map(item => (
                                <div key={item._id} className="card bg-base-100 shadow-xl">
                                    <figure><img className="h-[300px] w-[600px] hover:scale-125" src={item.photo} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title"><strong>Name:</strong>{item.tourType}</h2>
                                        <h2 className="card-title"><strong>Title:</strong>{item.tripTitle}</h2>
                                        <h2 className="card-title"><strong>Price:</strong>{item.price}$</h2>
                                        <div className="card-actions ">
                                        <Link to={`/allDetails/${item._id}`}><button className="btn btn-secondary">View package</button></Link>   
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                      </div>
                    </TabPanel>
                    <TabPanel>
                    <div className=" grid gap-7 justify-evenly items-center pb-10 ">
                      {
                            walking.map(item => (
                                <div key={item._id} className="card bg-base-100 shadow-xl">
                                    <figure><img className="h-[300px] w-[600px] hover:scale-125" src={item.photo} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title"><strong>Name:</strong>{item.tourType}</h2>
                                        <h2 className="card-title"><strong>Title:</strong>{item.tripTitle}</h2>
                                        <h2 className="card-title"><strong>Price:</strong>{item.price}$</h2>
                                        <div className="card-actions ">
                                        <Link to={`/allDetails/${item._id}`}><button className="btn btn-secondary">View package</button></Link>   

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                      </div>
                    </TabPanel>
                    <TabPanel>
                    <div className=" grid gap-7 justify-evenly items-center pb-10 ">
                      {
                            boating.map(item => (
                                <div key={item._id} className="card bg-base-100 shadow-xl">
                                    <figure><img className="h-[300px] w-[600px] hover:scale-125" src={item.photo} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title"><strong>Name:</strong>{item.tourType}</h2>
                                        <h2 className="card-title"><strong>Title:</strong>{item.tripTitle}</h2>
                                        <h2 className="card-title"><strong>Price:</strong>{item.price}$</h2>
                                        <div className="card-actions ">
                                     <Link to={`/allDetails/${item._id}`}><button className="btn btn-secondary">View package</button></Link>   
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                      </div>
                    </TabPanel>
                    <TabPanel>
                    <div className=" grid gap-7 justify-evenly items-center pb-10 ">
                      {
                            flying.map(item => (
                                <div key={item._id} className="card bg-base-100 shadow-xl">
                                    <figure><img className="h-[300px] w-[600px] hover:scale-125" src={item.photo} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title"><strong>Name:</strong>{item.tourType}</h2>
                                        <h2 className="card-title"><strong>Title:</strong>{item.tripTitle}</h2>
                                        <h2 className="card-title"><strong>Price:</strong>{item.price}$</h2>
                                        <div className="card-actions ">
                                        <Link to={`/allDetails/${item._id}`}><button className="btn btn-secondary">View package</button></Link>   
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                      </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Allpackage;