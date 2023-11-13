import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

<link
  rel="stylesheet"
  href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"
/>;

const Banner = () => {
  return (
    <Carousel autoPlay infiniteLoop className="text-center mb-16">
      <div>
        <img src="https://i.ibb.co/Mn3L301/01.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/DghKkz5/02.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/rvwYWmW/03.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/GtBhhPQ/04.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/YdDq49b/05.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/FDkKCQr/06.png" />
      </div>
    </Carousel>
  );
};

export default Banner;
