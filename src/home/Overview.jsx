import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabTour from './TabTour';
import Guides from './Guides';
const Overview = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
     <div>
        <h1 className=' text-center text-4xl font-serif mb-10 py-4 w-60 mx-auto bg-gradient-to-r from-green-200 to-red-200 rounded-xl'> Find your way </h1>
        
           <div className='text-center '>
       <Tabs selectedIndex={activeTab} onSelect={index => setActiveTab(index)}>
        {/* Tab List */}
        <TabList className="font-bold pb-5 text-green-500">
          <Tab>Overview</Tab>
          <Tab>Our Packages</Tab>
          <Tab>Meet Our Tour Guides</Tab>
        </TabList>

        {/* Tab Panels */}
        <TabPanel>
          <h2 className='text-green-600'>Welcome to the Overview Tab</h2>
          <p className='font-bold py-4'>This is where you can find information about the tour and also the beauty of bangladesh .</p>
          <div className="mt-4">
            
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/WoM3wuI4sJQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className='text-green-600'>Discover Our Exciting Packages</h2>
          <p className=' font-bold py-4'>Explore the amazing packages we offer for your tour.</p>
          <div>
            <TabTour></TabTour>
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className='text-green-600'>Get to Know Our Tour Guides</h2>
          <p className='font-bold py-4'>Meet our experienced and friendly tour guides.</p>
          <div>
            <Guides></Guides>
          </div>
        </TabPanel>
      </Tabs>
    </div>
     </div>
    );
};

export default Overview;