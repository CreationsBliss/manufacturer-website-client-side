import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Footer from './Footer';
import FooterTop from './FooterTop';
// import Reviews from './Reviews';
import Service from './Service';
import Testimonials from './Testimonials';
import Tools from './Tools';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <Service></Service>
      <BusinessSummary></BusinessSummary>
      {/* <Reviews></Reviews> */}
      <Testimonials></Testimonials>
      {/* <FooterTop></FooterTop>
      <Footer></Footer> */}
    </div>
  );
};

export default Home;