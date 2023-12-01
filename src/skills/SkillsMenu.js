import React, { Component } from 'react'
import "../styles/skillsMenu.css"
import classNames from 'classnames'
import skills from "./skillsData"
import frontendIcon from "../assets/eagle-emblem.png"
import backendIcon from "../assets/hawk-emblem.png"

export default class SkillsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
    }
  }
  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
    })
  }
  
    renderContent = (skills) => {  
      return skills.map((skills, index) => (
        <div key={index} className={`skil-sub-container-${this.state.activeMenuItem}`} 
        >
          <h3>{skills.title}</h3>
          <div className="level-container">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`level-point ${i < skills.level ? "filled" : "unfilled"}`}></div>
          ))}
          </div>
        </div>
      ));
  }

render() {
  const {activeMenuItem} = this.state;
  const menuItem = ["FRONT-END", "BACK-END"];

  const currentIcon = activeMenuItem === 1 ? frontendIcon 
 :backendIcon;
  
  return (
    <div className='skill-menu'>
      {menuItem.map((item, index) => (
        <div
        key={index}
        className={classNames("skill-item", {activeSkills: activeMenuItem === index + 1})}
        onClick={() => this.handleMenuItemClick(index + 1)}>
          <h2 className='skills-title'>{item}</h2>
        </div>
      ))}
      <img className='skil-icon' src={currentIcon} alt='current skill'/>
      <div className='skill-sub-container'>{this.renderContent(skills[activeMenuItem])}</div>
    </div>
  )
}
}