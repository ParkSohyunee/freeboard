# freeboard + useditem market

Next와 React를 사용하여 자유게시판 + 중고마켓 웹사이트를 개발하였습니다.
- 자유롭게 글을 쓸 수 있는 게시판 서비스 ✏
- 중고 상품을 등록하고, 포인트를 사용하여 구매할 수 있는 서비스 🛍️

<br/>

## 1. Getting Started

```
$ git clone https://github.com/ParkSohyunee/freeboard.git

$ yarn install

$ yarn dev

# http://localhost:3000 접속
```

<br/>

## 2. 주요기능 및 라이브러리

<br/>

### 2-1. 주요 기능
- 회원가입, 로그인, 로그아웃
- 자유게시판 CRUD
- 댓글 CRUD
- 중고마켓 상품등록 CRUD
- 전체 게시판 목록 실시간 검색 조회
- 카드 결제로 포인트 충전
- 충전한 포인트로 상품 구매

<br/>

### 2-2. 사용한 기술 스택

- Next.js 12
- React 17
- Typescript
- Emotion
- Apollo-Client
- ant-design
- recoil
- react-hook-form
- react-slick (케러셀 라이브러리)
- react-daum-postcode (주소검색 라이브러리)
- react-infinite-scroller (무한스크롤 라이브러리)
- iamport (포트원 결제 라이브러리)
- react-player (동영상 플레이어 라이브러리)
- react-quill (웹 에디터 라이브러리)
- lodash
- yup
- uuid

<br/>

## 3. 기능 동작

### 3-1. 랜딩페이지, 회원가입, 로그인, 로그아웃  
![](https://github.com/ParkSohyunee/freeboard/blob/main/public/readme/1.%20%EB%9E%9C%EB%94%A9%ED%8E%98%EC%9D%B4%EC%A7%80%2C%20%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%2C%20%EB%A1%9C%EA%B7%B8%EC%9D%B8%2C%20%EB%A1%9C%EA%B7%B8%EC%95%84%EC%9B%83.gif)

<br/>

### 3-2. 전체 게시글 목록 조회 - 검색 기능, 페이지네이션 기능  
![](https://github.com/ParkSohyunee/freeboard/blob/main/public/readme/2.%20%EB%AA%A9%EB%A1%9D%EC%A1%B0%ED%9A%8C%20-%20%EA%B2%80%EC%83%89%2C%20%ED%8E%98%EC%9D%B4%EC%A7%80%EB%84%A4%EC%9D%B4%EC%85%98.gif)

<br/>

### 3-3. 게시판 글 작성 - 주소 검색 기능, 이미지 업로드 기능  
![](https://github.com/ParkSohyunee/freeboard/blob/main/public/readme/3.%20%EA%B2%8C%EC%8B%9C%ED%8C%90%20%EA%B8%80%20%EC%9E%91%EC%84%B1%20-%20%EC%A3%BC%EC%86%8C%EA%B2%80%EC%83%89%2C%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EC%97%85%EB%A1%9C%EB%93%9C.gif)

<br/>

### 3-4. 게시판 상세, 수정, 삭제 - 동영상 재생, 좋아요/싫어요 기능  
![](https://github.com/ParkSohyunee/freeboard/blob/main/public/readme/4.%20%EA%B2%8C%EC%8B%9C%ED%8C%90%20%EC%83%81%EC%84%B8%2C%20%EC%88%98%EC%A0%95%20-%20%EC%A2%8B%EC%95%84%EC%9A%94%2C%20%EB%8F%99%EC%98%81%EC%83%81%EC%9E%AC%EC%83%9D%20.gif)

<br/>

### 3-5. 댓글 작성, 수정, 삭제, 별점 기능  
![](https://github.com/ParkSohyunee/freeboard/blob/main/public/readme/5.%20%EB%8C%93%EA%B8%80%20%EC%9E%91%EC%84%B1%2C%20%EC%88%98%EC%A0%95%2C%20%EC%82%AD%EC%A0%9C%2C%20%EB%B3%84%EC%A0%90%EA%B8%B0%EB%8A%A5.gif)

<br/>

### 3-6. 중고마켓 목록조회 - 무한스크롤 기능, 베스트 상품 보기  
![](https://github.com/ParkSohyunee/freeboard/blob/main/public/readme/6.%20%EB%B2%A0%EC%8A%A4%ED%8A%B8%EC%83%81%ED%92%88%2C%20%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4.gif)

<br/>

### 3-7. 중고마켓 상품 등록, 수정 - 웹 에디터 기능, 카카오지도 마크업 기능, 태그 입력 및 삭제  
![](https://github.com/ParkSohyunee/freeboard/blob/main/public/readme/7.%20%EC%A4%91%EA%B3%A0%EC%83%81%ED%92%88%20%EB%93%B1%EB%A1%9D%20-%20%EC%B9%B4%EC%B9%B4%EC%98%A4%EC%A7%80%EB%8F%84%2C%20%ED%83%9C%EA%B7%B8%20%EC%9E%85%EB%A0%A5%2C%20%EC%9B%B9%EC%97%90%EB%94%94%ED%84%B0.gif)

<br/>

### 3-8. 중고마켓 상세, 삭제 - 구매 기능, 찜하기 기능, 거래 위치보기, 댓글 CRUD  
![](https://github.com/ParkSohyunee/freeboard/blob/main/public/readme/8.%20%EC%83%81%ED%92%88%20%EC%83%81%EC%84%B8%EB%B3%B4%EA%B8%B0%20-%20%EC%B0%9C%ED%95%98%EA%B8%B0%2C%20%EA%B5%AC%EB%A7%A4%2C%20%EB%8C%93%EA%B8%80.gif)

<br/>

### 3-9. 마이페이지, 프로필 조회 - 포인트 충전을 위한 결제 기능, 비밀번호 변경 기능 
![](https://github.com/ParkSohyunee/freeboard/blob/main/public/readme/9.%20%EB%A7%88%EC%9D%B4%ED%8E%98%EC%9D%B4%EC%A7%80%20-%20%ED%8F%AC%EC%9D%B8%ED%8A%B8%EC%B6%A9%EC%A0%84%20%EC%B9%B4%EB%93%9C%EA%B2%B0%EC%A0%9C.gif)
