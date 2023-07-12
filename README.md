<div align="center">
  <h1>Freeboard & Useditem Market Website</h1> 
  <p>Next.js와 React를 사용하여 자유게시판 + 중고마켓 웹사이트를 개발하였습니다.</p>

✏ 자유롭게 글을 쓸 수 있는 게시판 서비스 <br/>
🛍️ 중고 상품을 등록하고, 포인트를 사용하여 구매할 수 있는 서비스 

</div>

<br/>

<!-- Table of Contents -->
# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Screenshots](#camera-screenshots)
  * [Tech Stack](#space_invader-tech-stack)
  * [Features](#dart-features)
- [Getting Started](#toolbox-getting-started)
- [Usage](#eyes-usage)

<br/>

<!-- About the Project -->
## :star2: About the Project

<!-- Screenshots -->
### :camera: Screenshots

<div align="center"> 
  <img width="650" alt="screenshot" src="https://github.com/ParkSohyunee/freeboard/assets/124856726/8219d2b3-1fd9-49d6-91b7-db7b3746ef85">
</div>

<!-- TechStack -->
### :space_invader: Tech Stack

<details>
  <summary>Frontend 기술 스택</summary>
  <ul>
    <li><a href="https://nextjs.org/">Next.js (v12.1.0)</a></li>
    <li><a href="https://reactjs.org/">React (v17.0.2)</a></li>
    <li><a href="https://tailwindcss.com/">Typescript (v^5.0.2)</a></li>
    <li><a href="https://emotion.sh/docs/introduction">Emotion</a></li>
    <li><a href="https://www.apollographql.com/">Apollo-Client</a></li>
    <li><a href="https://recoiljs.org/">Recoil</a></li>
    <li><a href="https://ant.design/">Ant-design</a></li>
  </ul>
</details>

<details>
  <summary>라이브러리</summary>
  <ul>
    <li><a href="https://react-hook-form.com/">react-hook-form (비제어 컴포넌트 폼)</a></li>
    <li><a href="https://www.npmjs.com/package/react-slick">react-slick (배너 케러셀)</a></li>
    <li><a href="https://www.npmjs.com/search?q=dompurify">dompurify (XSS 공격 방어)</a></li>
    <li><a href="https://www.npmjs.com/package/react-daum-postcode">react-daum-postcode (다음 우편번호 검색)</a></li>
    <li><a href="https://apis.map.kakao.com/web/">kakao-map-api(카카오맵 지도)</a></li>
    <li><a href="https://www.npmjs.com/package/react-infinite-scroller">react-infinite-scroller (무한 스크롤)</a></li>
    <li><a href="https://www.npmjs.com/package/react-player">react-player (동영상 플레이어)</a></li>    
    <li><a href="https://www.npmjs.com/package/react-quill">react-quill (웹 에디터)</a></li>
    <li><a href="https://guide.portone.io/">Portone(결제 모듈 라이브러리)</a></li>
    <li><a href="https://www.npmjs.com/package/yup">yup (검증 라이브러리 with hook form)</a></li>
    <li><a href="https://prettier.io/">prettier (코드 포멧)</a></li>
  </ul>
</details>

<details>
<summary>백엔드 API</summary>
  <ul>
    <li><a href="https://graphql.org/">GraphQL API (API 명세서: Playground)</a></li>
  </ul>
</details>

<details>
<summary>배포</summary>
  <ul>
    <li><a href="https://vercel.com/">Vercel</a></li>
  </ul>
</details>

<br/>

<!-- Getting Started -->
## 	:toolbox: Getting Started

```
$ git clone https://github.com/ParkSohyunee/freeboard.git

$ yarn install

$ yarn dev

# http://localhost:3000 접속
```

<br/>

> 🌐 배포주소 https://freeboard-liart.vercel.app/ <br/>
> GraphQL API는 localhost의 3000번 포트만 승인되도록 서버에서 block 정책이 설정되어 있습니다. <br/>
> 따라서, 현재 배포주소에서는 GraphQL API를 요청하지 못하여 기능이 동작하지 않습니다.

<br/>


<!-- Features -->
### :dart: Features

- 회원가입, 로그인, 로그아웃
- 자유게시판 CRUD
- 댓글 CRUD
- 중고마켓 상품등록 CRUD
- 전체 게시판 목록 실시간 검색 조회
- 카드 결제로 포인트 충전
- 충전한 포인트로 상품 구매

<br/>

<!-- Usage -->
## :eyes: Usage

<div align="center">
  <h3>✨ 자유게시판 목록</h3><br/>
  <img width="700" alt="freeboard_list" src="https://github.com/ParkSohyunee/freeboard/assets/124856726/3e730bea-ce26-40cc-9f92-235f4c9dab8a">
  <details>
  <summary>자유게시판 목록조회</summary>
  <ul>
    <li>- 반응형 UI 적용(전체페이지)</li>
    <li>- 회원가입, 로그인, 로그아웃 기능</li>
    <li>- 페이지네이션 기능</li>
    <li>- 검색어 키워드로 실시간 검색 기능</li>
  </ul>
</details>
</div>

<br/>

<div align="center">
  <h3>✨ 게시판 상세</h3><br/>
  <img width="700" alt="freeboard_detail" src="https://github.com/ParkSohyunee/freeboard/blob/main/public/readme/5.%20%EB%8C%93%EA%B8%80%20%EC%9E%91%EC%84%B1%2C%20%EC%88%98%EC%A0%95%2C%20%EC%82%AD%EC%A0%9C%2C%20%EB%B3%84%EC%A0%90%EA%B8%B0%EB%8A%A5.gif">
  <details>
  <summary>자유게시판 상세페이지</summary>
  <ul>
    <li>- 게시판에서 작성한 정보가 보이는 페이지</li>
    <li>- 동영상 재생, 좋아요/싫어요 기능</li>
    <li>- 글의 수정과 삭제가 가능</li>
    <li>- 별점과 함께 댓글 작성, 수정, 삭제 가능</li>
  </ul>
</details>
</div>

<br/>

<div align="center">
  <h3>✨ 중고마켓 목록</h3><br/>
  <img width="700" alt="useditem_market_list" src="https://github.com/ParkSohyunee/freeboard/assets/124856726/9d757169-d7e2-4b63-bb0c-58cb5c715a4c">
  <details>
  <summary>중고마켓 목록조회</summary>
  <ul>
    <li>- 무한스크롤 기능</li>
    <li>- 베스트 상품 보기</li>
  </ul>
</details>
</div>

<br/>

<div align="center">
  <h3>✨ 중고마켓 상품 등록</h3><br/>
  <img width="700" alt="useditem_market_register" src="https://github.com/ParkSohyunee/freeboard/blob/main/public/readme/7.%20%EC%A4%91%EA%B3%A0%EC%83%81%ED%92%88%20%EB%93%B1%EB%A1%9D%20-%20%EC%B9%B4%EC%B9%B4%EC%98%A4%EC%A7%80%EB%8F%84%2C%20%ED%83%9C%EA%B7%B8%20%EC%9E%85%EB%A0%A5%2C%20%EC%9B%B9%EC%97%90%EB%94%94%ED%84%B0.gif">
  <details>
  <summary>중고마켓 상품 등록</summary>
  <ul>
    <li>- 웹 에디터로 글씨 크기 선택, 링크 첨부, 마크다운으로 글 작성</li>
    <li>- 주소를 검색하면 카카오지도에 거래위치 마크업 표시</li>
    <li>- 원하는 태그를 스페이스바를 사용하여 추가 및 클릭하면 태그 삭제</li>
    <li>- 이미지 업로드</li>
  </ul>
</details>
</div>

<br/>

<div align="center">
  <h3>✨ 중고마켓 상세</h3><br/>
  <img width="700" alt="useditem_market_detail" src="https://github.com/ParkSohyunee/freeboard/blob/main/public/readme/8.%20%EC%83%81%ED%92%88%20%EC%83%81%EC%84%B8%EB%B3%B4%EA%B8%B0%20-%20%EC%B0%9C%ED%95%98%EA%B8%B0%2C%20%EA%B5%AC%EB%A7%A4%2C%20%EB%8C%93%EA%B8%80.gif"><br/>

  <br/>

  <p>📍 반응형 UI 적용 화면</p>
  <img width="600" alt="useditem_market_responseUI" src="https://github.com/ParkSohyunee/freeboard/assets/124856726/7e74a8cd-433c-4245-8024-1509d510483f">
  <details>
  <summary>중고마켓 상세페이지</summary>
  <ul>
    <li>- 작성자만 글 수정 및 삭제 가능</li>
    <li>- 상품 찜하기 및 포인트로 상품 구매</li>
    <li>- 거래 위치 보기</li>
    <li>- 댓글 CRUD</li>
  </ul>
</details>
</div>

<br/>

<div align="center">
  <h3>✨ 포인트 충전</h3><br/>
  <img width="700" alt="point_charge" src="https://github.com/ParkSohyunee/freeboard/assets/124856726/f76bb258-9e52-4015-8682-9f84cab05c19">
  <details>
  <summary>포인트 충전을 위한 카드 결제</summary>
  <ul>
    <li>- 드래그다운 메뉴에서 원하는 금액을 카드결제 하여 포인트 충전</li>
  </ul>
</details>
</div>
