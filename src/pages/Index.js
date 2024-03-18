import React from 'react'
import { Link } from "react-router-dom"

const Index = () => {
  return (
    <div className="wrap">
        <h1>
            <strong>코딩알려주는누나 리액트 스터디 1기</strong>
            <span>최은영 / 2024.03.18 ~ 2024.04.21</span>
        </h1>
        <ul className="list">
            <li className="item">
                <Link to="/">
                    <span className="tag tag01">1주차</span>
                    <span className="title">1. 리액트 기초 강의 1~5강</span>
                    <span className="date">~ 24.03.18 (월)</span>
                </Link>
            </li>
            <li className="item">
                <Link to="rock-paper-scissors">
                    <span className="tag tag01">1주차</span>
                    <span className="title">2. 가위바위보 게임 1~4강</span>
                    <span className="date">~ 24.03.19 (화)</span>
                </Link>
            </li>
            <li className="item">
                <Link to="rock-paper-scissors">
                    <span className="tag tag01">1주차</span>
                    <span className="title">2. 가위바위보 게임 5~6강</span>
                    <span className="date">~ 24.03.20 (수)</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Index