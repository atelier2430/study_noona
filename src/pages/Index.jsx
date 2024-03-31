import React, { useEffect, useState } from 'react';
import IndexItem from '../component/IndexItem';
import AssignmentData from '../data/data';

function Index() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [filteredAssignments, setFilteredAssignments] = useState([]);

  const handleClickTab = (idx) => {
    setSelectedTab(idx);
  }

  useEffect(() => {
    handleClickTab(0);
  },[]);

  useEffect(() => {
    if (selectedTab === 0) {
      setFilteredAssignments(AssignmentData);
    } else {
      const filtered = AssignmentData.filter(assignment => assignment.week === selectedTab);
      setFilteredAssignments(filtered);
    }
  }, [selectedTab]);

  return (
    <div className="wrap">
      <h1>
        <strong>코딩알려주는누나 리액트 스터디 1기</strong>
        <div>최은영 / 2024.03.18 ~ 2024.04.21</div>
      </h1>
      
      <div className={`tab-head selected-${selectedTab}`}>
        <button
          type="button"
          className={`tab ${selectedTab === 0 && 'selected'}`}
          onClick={() => {handleClickTab(0)}}
          >전체</button>
        {AssignmentData.map((assignment, index) => (
          <button
          type="button"
          className={`tab tab-0${assignment.week} ${selectedTab === index + 1 && 'selected'}`}
          key={assignment.week}
          onClick={() => {handleClickTab(index + 1)}}
          >{assignment.week}주차</button>
        ))}
      </div>
      <div className="tab-body">
        <div className="tab-inner">
          {filteredAssignments.map((assignment) => (
            <ul className="list" key={assignment.week}>
              {assignment.assignmentList.map((item) => (
                <IndexItem
                  key={item.id}
                  week={assignment.week}
                  title={item.title}
                  standardDate={item.standardDate}
                  dueDate={item.dueDate}
                  submittedDate={item.submittedDate}
                  pass={item.pass}
                  crown={item.crown}
                  url={item.url}
                />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
