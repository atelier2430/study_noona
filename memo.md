# .env 환경변수 사용

쉼표, 따옴표, 세미콜론 등 없어야 함
'REACT*APP*'는 예약어. 앞에 붙여줘야함
process.env.{변수명}으로 import없이 전역에서 사용 가능함


# 리액트 실무
1. AppLayout 사용
- 실제 서비스에서는 Navbar, Footer가 페이지에 따라 다르게 표현되는 경우가 있음
- 다양한 레이아웃을 적용할 수 있도록 '/' 인덱스 페이지에 AppLayout 페이지컴포넌트를 연결하고,
AppLayout 내에서 상황에 맞는 Navbar등을 적용함

2. 폴더구조
src/
src/pages
src/pages/{Homepage}
src/pages/{Homepage}/{Homepage.jsx}
src/pages/{Detailpage}
src/pages/{Detailpage}/{Detailpage.jsx}

3. 기본 설치 - npx create-react-app . 이후
npm i react-dom react-router-dom
{npm i react-bootstrap bootstrap}
{npm i axios}

4. utils
프로젝트와 직접적/긴밀한 관련은 없지만 자주 사용되는/유용한 도구
ex. 숫자포맷