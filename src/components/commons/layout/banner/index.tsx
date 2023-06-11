import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerItem = styled.img`
  width: 100%;
  height: 320px;
  margin: auto;
  object-fit: cover;
`;

const Wrapper = styled.div`
  height: 320px;

  // 슬라이더 버튼 커스텀
  .slick-dots {
    position: absolute;
    bottom: 1.5rem;
    text-align: center;
  }

  // 슬라이더 화살표 커스텀
  .slick-arrow {
    display: flex;
    z-index: 1;
    opacity: 1;
    width: 20vw;
    height: 20vh;
  }

  .slick-prev:before,
  .slick-next:before {
    opacity: 0; // 기존에 숨어있던 화살표 버튼이 보이게 하려면 1
    display: none;
    width: 10px;
    height: 10px;
    right: 0; // 기본값 -25를 원래대로 안그러면 여백이 발생
    left: 0;
  }
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
          <BannerItem src="/banner/waterpool.jpg" />
        </div>
        <div>
          <BannerItem src="/banner/orange.jpg" />
        </div>
        <div>
          <BannerItem src="/banner/lime.jpg" />
        </div>
        <div>
          <BannerItem src="/banner/carusel.jpg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
