import styled from "styled-components";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VerticalSlider = () => {

  const settings = {
    arrows: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    vertical: true,
    verticalSwiping: true,
  };

  const PlayerImgList = ["/selectPlayer/m1Img.png", "/selectPlayer/f11Img.png", "/selectPlayer/f20Img.png", "/selectPlayer/m31Img.png", "/selectPlayer/f12Img.png", "/selectPlayer/m11Img.png", "/selectPlayer/f14Img.png", "/selectPlayer/m14Img.png", "/selectPlayer/f21Img.png", "/selectPlayer/m29Img.png", "/selectPlayer/f22Img.png", "/selectPlayer/m28Img.png", "/selectPlayer/m28Img.png"];

  return (
    <div className="absolute z-30 left-6 w-[12%]">
      <StyledSlider {...settings} className="h-[100%] mt-3">
        {PlayerImgList.map((img, index)=>{
          return(
            <div key={index} className="bg-white rounded-xl mt-2 shadow-md">
              <img className="w-[100%] rounded-xl" src={img} />
            </div>
          )
        })}       
      </StyledSlider>
    </div>
  );
};
const StyledSlider = styled(Slider)`

  .slick-prev {
    z-index: 30;
    left: 30px;
  }

  .slick-next {
    z-index: 30;
    right: 40px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    opacity: 0.5;
    color: white;
  }

  .slick-dots {
    display: flex;
    justify-content: center;
    bottom: 30px;
    color: white;

    li button:before {
      color: white;
    }

    li.slick-active button:before {
      color: white;
    }
  }
  .slick-slider {
    .slick-list {
      .slick-slide {
        div {
          // beforeChange 이벤트 핸들러 정의
          .slick-slide-inner {
            .slick-slide {
              &:beforeChange {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
`;

export default VerticalSlider;