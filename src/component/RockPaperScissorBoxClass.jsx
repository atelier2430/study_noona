import React, { Component } from "react";
import PropTypes from "prop-types";
import RockImg from "../assets/images/project01/rock.png";

class RockPaperScissorBoxClass extends Component {
  calculateGameResult() {
    const { result } = this.props;
    if (result > 0) {
      return "win";
    }
    if (result < 0) {
      return "lose";
    }
    return "tie";
  }

  render() {
    const { item, title } = this.props;
    const gameResult = this.calculateGameResult();
    return (
      <div className={`rps-box ${item && gameResult}`}>
        <div className="title">{title}</div>
        {item && <img src={item.img} alt="" />}
        <div className="result">{item && gameResult}</div>
      </div>
    );
  }
}

RockPaperScissorBoxClass.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  result: PropTypes.number.isRequired,
};

RockPaperScissorBoxClass.defaultProps = {
  item: {
    name: "Rock",
    img: RockImg,
  },
};

export default RockPaperScissorBoxClass;
