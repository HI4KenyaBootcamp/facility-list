import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Title from "./Title";
import "./NavBar.css";
import FilterOptions from "./FilterOptions";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.state = { term: "" };
  }
  search(queryterm) {
    console.log("Inside Nav search fn");
    this.props.search(queryterm);
  }
  componentWillReceiveProps(nxt) {
    this.setState({
      term: nxt.term
    });
  }

  render() {
    console.log("rendering navbar ", this.state.term);
    return (
      <div className="mynav bg-light">
        <nav className="navbar navbar-expand-lg ">
          <a className="navbar-brand" href="/">
            <Title cname={"nav_title"} />
          </a>
          <div className="nav-item" style={{ width: "50%" }}>
            <SearchBar
              cname={"nav_searchbar"}
              term={this.props.term}
              search={this.search}
            />
          </div>
        </nav>
        <FilterOptions cname={"nav_filteroptions"} />
        <ul
          className="nav nav-tabs bg-light"
          id="myTab"
          role="tablist"
          style={{ paddingLeft: "177px" }}
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Facilities
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Resolution Reports
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#contact"
              style={{ border: "none" }}
              role="tab"
              aria-controls="contact"
              aria-selected="true"
            >
              Updates
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;