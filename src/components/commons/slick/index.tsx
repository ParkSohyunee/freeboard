import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ISliderProps {
  el?: string[];
}

const Wrapper = styled.div`
  height: 400px;

  // .slick-dots slick-thumb li {
  //   width: 20px;
  //   height: 20px;
  // }
`;
const ItemImage = styled.img`
  width: 480px;
  height: 480px;
`;
// const ItemNoneImage = styled.div`
//   width: 480px;
//   height: 480px;
//   background-color: var(--font-color-lightPeach);
// `;

export default function SimpleSlider(props: ISliderProps) {
  console.log(props.el);

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // customPaging: (props.el) => {
    //   return (
    //     <a>
    //       <img src={`${el}`} />
    //     </a>
    //   )
    // }
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        {props.el &&
          props.el
            .filter((el) => el !== "")
            .map((el) => (
              <div>
                <ItemImage src={`https://storage.googleapis.com/${el}`} />
              </div>
            ))}
      </Slider>
    </Wrapper>
  );
}

/* <div> <ItemNoneImage /> </div> */
