import React, { Component } from 'react'
import "./App.css";

class App extends React.Component {
  state = {
    fullName: "BEN SAID Mayssa",
    profession: "devlopper web ",
    bio: "I am currently a student at GO My Code Academy,Electronics Engineer is looking for a new opportunity as a software Developper",
    image: "https://png.pngtree.com/png-clipart/20201023/ourlarge/pngtree-illustration-of-the-back-side-and-side-profile-of-hijab-girl-png-image_2373912.jpg",
    show: true,
    count: 0,
  };

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    },500);
  }
  render() {
    return (
      <div className="app">
      <div className="box" >
        {this.state.show && (
          <div className="inf">
            <div  className="profImg">
              <img style={{width : "150px" , paddingTop:"70px" , paddingBottom:"20px"}} src={this.state.image} alt="" />
            </div>
            <section className="pos" style={{border:"black double", marginLeft:"650px",width:"250px"}}>
              <h1>{this.state.fullName}</h1>
              <h3>{this.state.profession}</h3>
              <p>{this.state.bio}</p>
              <div className="count">
                Count: {this.state.count}{" "}
                sec
              </div>
            </section>
          </div>
        )}
        <button type="button" className="btn" onClick={this.handleClick}>Show Me </button>
      </div>
    </div>
  );
}
}
export default App;