import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerItem = styled.img`
  height: 350px;
  margin: auto;
`;

const Wrapper = styled.div`
  height: 400px;

  .slick-arrow {
    display: flex;
    z-index: 20;
    opacity: 1;
    width: 40vw;
    height: 40vw;
  }

  // .slick-prev:before {
  //   opaicty: 1; // 기존에 숨어있던 화살표 버튼이 보이게
  //   color: black; // 버튼 색은 검은색으로
  //   left: 0;
  // }

  // .slick-next:before {
  //   right: -5vw;
  //   cursor: pointer;
  //   width: 20px;
  //   height: 20px;
  // }
`;

export default function LayoutBanner() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <BannerItem src="/banner/image.png" />
        </div>
        <div>
          <BannerItem src="/banner/image.png" />
        </div>
        <div>
          <BannerItem src="/banner/image.png" />
        </div>
      </Slider>
    </Wrapper>
  );
}
