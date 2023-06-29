import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { breakPoints } from "../../../commons/styles/media";

interface ISliderProps {
  el?: string[];
}

const Wrapper = styled.div`
  height: 400px;
`;

const ItemImage = styled.img`
  width: 480px;
  height: 480px;
  border-radius: var(--border-radius-small);

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 360px;
  }
`;

export default function SimpleSlider(props: ISliderProps) {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
