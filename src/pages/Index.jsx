import React from 'react';
import IndexItem from '../component/IndexItem';

function Index() {
  const assignmentArray = [
    {
      week: 1,
      assignmentList: [
        {
          id: 1,
          title: '1. 리액트 기초 강의 1강~5강',
          dueDate: '',
          submittedDate: '',
          url: '',
        },
        {
          id: 2,
          title: '2. 가위바위보 게임 1강~4강',
          dueDate: '24.03.19 (화)',
          submittedDate: '24.03.18 (월)',
          url: 'rock-paper-scissors',
        },
        {
          id: 3,
          title: '2. 가위바위보 게임 5강~6강',
          dueDate: '24.03.20 (수)',
          submittedDate: '24.03.18 (월)',
          url: 'rock-paper-scissors',
        },
        {
          id: 4,
          title: '3. 클래스 컴포넌트 - 가위바위보 게임',
          dueDate: '24.03.21 (목)',
          submittedDate: '',
          url: 'rock-paper-scissors-class',
        },
        {
          id: 5,
          title: '4. 리액트 Lifecycle 1강~2강',
          dueDate: '',
          submittedDate: '',
          url: '',
        },
        {
          id: 6,
          title: '5. 두번째 프로젝트: 날씨앱 만들기 1강~6강',
          dueDate: '24.03.23 (토)',
          submittedDate: '24.03.23 (토)',
          url: 'weather',
        },
        {
          id: 7,
          title: '5. 두번째 프로젝트: 날씨앱 만들기 7강~9강',
          dueDate: '24.03.24 (일)',
          submittedDate: '24.03.24 (일)',
          url: 'weather',
        },
      ]
    },
    {
      week: 2,
      assignmentList: [
        {
          id: 8,
          title: '6. 라우터: 멀티 웹페이지를 만드는 법 1강~6강',
          dueDate: '',
          submittedDate: '',
          url: '',
        },
        {
          id: 9,
          title: '7. 세번째 프로젝트: 쇼핑몰 웹사이트 만들기 1강~5강',
          dueDate: '24.03.27 (수)',
          submittedDate: '',
          url: '',
        },
        {
          id: 10,
          title: '7. 세번째 프로젝트: 쇼핑몰 웹사이트 만들기 6강~9강',
          dueDate: '24.03.28 (목)',
          submittedDate: '',
          url: '',
        },
        {
          id: 11,
          title: '7. 세번째 프로젝트: 쇼핑몰 웹사이트 만들기 10강~13강',
          dueDate: '24.03.29 (금)',
          submittedDate: '',
          url: '',
        },
        {
          id: 12,
          title: '8. Redux: 게임 체인져 1강~6강',
          dueDate: '24.03.31 (일)',
          submittedDate: '',
          url: '',
        },
      ]
    },
  ];
  
  return (
    <div className="wrap">
      <h1>
        <strong>코딩알려주는누나 리액트 스터디 1기</strong>
        <div>최은영 / 2024.03.18 ~ 2024.04.21</div>
      </h1>
      
      {assignmentArray.map((assignment) => (
        <ul className="list" key={assignment.week}>
          {assignment.assignmentList.map((item) => (
            <IndexItem
              key={item.id}
              week={assignment.week}
              title={item.title}
              dueDate={item.dueDate}
              submittedDate={item.submittedDate}
              url={item.url}
            />
          ))}
        </ul>
      ))}
    </div>
  );
}

export default Index;
