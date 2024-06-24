import React from "react"
import "../components/css/Home.css"
import  slides from '../common/carouselData.json'
import { Carousel } from "../components/Carousel"
const Home = () => {
    return (
        <div className="home">
            <Carousel data={slides.slides} />
        </div>
    )

}

export default Home