import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

// 게시물 상세 페이지
export const WrapperDetail = styled.div`
  box-sizing: border-box;
  width: 1200px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const WrapperTop = styled.div`
  box-sizing: border-box;
  width: 1200px;
  padding: 80px 100px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  @media ${breakPoints.tablet} {
    width: 100%;
    padding: 1.5rem;
  }
`;

export const LeftHead = styled.div`
  display: flex;
  gap: 30px;
  padding-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;
`;

export const Writer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WriterName = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;

  @media ${breakPoints.tablet} {
    font-size: 1rem;
  }
`;

export const Date = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #828282;

  @media ${breakPoints.tablet} {
    font-size: 0.8rem;
  }
`;
export const Line = styled.div`
  width: 100%;
  border-top: 1px solid #bdbdbd;
  padding-bottom: 80px;

  @media ${breakPoints.tablet} {
    padding-bottom: 1rem;
  }
`;

export const BoardTitle = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  padding-bottom: 40px;

  @media ${breakPoints.tablet} {
    padding-bottom: 1rem;
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const BoardImages = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  width: 100%;
  height: 400px;
  margin-bottom: 40px;
  display: flex;
  gap: 30px;

  @media ${breakPoints.tablet} {
    flex-direction: column;
    height: initial;
    gap: 1rem;
  }
`;

export const ImgBox = styled.img`
  width: 330px;
  height: 100%;
  border-radius: 1rem;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 300px;
  }
`;

export const BoardContent = styled.div`
  width: 100%;
  height: 96px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background-color: #f2f2f2;
  margin-bottom: 60px;
`;

export const PlayerWrapper = styled.div`
  margin: auto;
  margin-bottom: 40px;
  width: 640px;
  height: 360px;
`;

export const Reaction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  text-align: center;
`;

export const ReactionBox = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: none;
  background: none;
`;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 30px;
  color: #ffd600;
`;

export const DislikeIcon = styled(DislikeOutlined)`
  font-size: 30px;
  color: #828282;
`;

export const LikeCount = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #ffd600;
`;

export const DislikeCount = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #828282;
`;

export const BoardBtn = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 80px 100px;
  display: flex;
  justify-content: center;
  gap: 24px;

  @media ${breakPoints.tablet} {
    padding: 2rem;
  }
`;

export const BtnStyle = styled.button`
  cursor: pointer;
  padding: 14px 60px;
  background: var(--font-color-white);
  border: 1px solid #bdbdbd;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  white-space: nowrap;
  border-radius: var(--border-radius-small);

  // &: hover
  :hover {
    background-color: #ffd600;
  }

  @media ${breakPoints.tablet} {
    padding: 0.8rem 2.5rem;
  }
`;
