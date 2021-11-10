import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Comments from '../AllComments/Comments/Comments';
import Products from '../AllProducts/Products/Products';
import Banner from '../Banner/Banner';
import Delivery from '../Delivery/Delivery';
import Footer from '../Footer/Footer';

const HomePage = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Comments></Comments>
            <Delivery></Delivery>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;