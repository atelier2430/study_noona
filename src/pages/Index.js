import React from 'react';
import IndexList from '../component/IndexList';

function Index() {
  const assignmentArray = [
    {
      week: 1,
      title: '1. 리액트 기초 강의 1강~5강',
      dueDate: '',
      submittedDate: '',
      url: '',
    },
    {
      week: 1,
      title: '2. 가위바위보 게임 1강~4강',
      dueDate: '24.03.19 (화)',
      submittedDate: '24.03.18 (월)',
      url: 'rock-paper-scissors',
    },
    {
      week: 1,
      title: '2. 가위바위보 게임 5강~6강',
      dueDate: '24.03.20 (수)',
      submittedDate: '24.03.18 (월)',
      url: 'rock-paper-scissors',
    },
    {
      week: 1,
      title: '3. 클래스 컴포넌트',
      dueDate: '24.03.21 (목)',
      submittedDate: '',
      url: '',
    },
    {
      week: 1,
      title: '4. 리액트 Lifecycle 1강~2강',
      dueDate: '',
      submittedDate: '',
      url: '',
    },
    {
      week: 1,
      title: '5. 두번째 프로젝트: 날씨앱 만들기 1강~6강',
      dueDate: '24.03.23 (토)',
      submittedDate: '',
      url: '',
    },
    {
      week: 1,
      title: '5. 두번째 프로젝트: 날씨앱 만들기 7강~9강',
      dueDate: '24.03.24 (일)',
      submittedDate: '',
      url: '',
    },
  ];
  return (
    <div className="wrap">
      <h1>
        <strong>코딩알려주는누나 리액트 스터디 1기</strong>
        <div>최은영 / 2024.03.18 ~ 2024.04.21</div>
      </h1>
      <ul className="list">
        {assignmentArray.map((assignment) => (
          <IndexList
            week={assignment.week}
            title={assignment.title}
            dueDate={assignment.dueDate}
            submittedDate={assignment.submittedDate}
            url={assignment.url}
          />
        ))}
      </ul>
    </div>
  );
}

export default Index;
