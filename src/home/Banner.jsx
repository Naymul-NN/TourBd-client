
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import '../App.css'
const Banner = () => {
    // const carouselContainerStyle = {
    //     width: '500px', // Set the desired height here
    // };
    // const imageStyle = {
    //     height: '500px', // Ensure the image takes up the full height of the container
    //     width: '100%', // Ensure the image takes up the full width of the container
    //     objectFit: 'cover', // Maintain aspect ratio and cover the container
    // };
    return (
        <div >
        <Carousel  autoPlay infiniteLoop   >
           <div>
               <img src="https://i.ibb.co/hYnh1Z8/614092421ed73.jpg" />
           </div>
           <div>
               <img className="w-[800px]" src="https://i.ibb.co/BfMQDhP/Chittagong-Hill.jpg" />
           </div>
          
           <div>
               <img src="https://i.ibb.co/QmHRsgW/the-royal-bengal-tiger-of-bangladesh-rehman-asad.jpg" />
           </div>
           <div>
               <img src="https://i.ibb.co/qBnMQnq/pangthumai-waterfall.jpg" />
           </div>
          
       </Carousel>
   </div>
    );
};

export default Banner;