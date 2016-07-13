import React from 'react';
import LoginPopup from './LoginPopup';
import PostPopup from './PostPopup';

import Menu from 'react-motion-menu';
import Actions from '../../actions';
import {Link} from 'react-router';


class Navbar extends React.Component {
  constructor(){
    super();
    this.state = {
      popupStatus: false,
      menu1: {isOpen: false}
    }
  }

  handleOnOpen(name){
    this.setState({[name] : {isOpen: true}});
  }

  handleOnClose(name){
    this.setState({[name] : {isOpen: false}});
  }

  showPopup = () => {
    this.setState({popupStatus: true});
  };

  hidePopup = () => {
    this.setState({popupStatus: false});
  };

  handleLogout = (e) => {
    this.setState({menu1: {isOpen: false}});
    e.preventDefault();
    Actions.logout();
  };

  renderProductSearch(){
    return(
      <section className="product-search-box">
        <div className="input-group">
          <input className="product-search" placeholder="search"/>
          <span className="input-group-btn">
            <button className="btn btn-default product-search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
          </span>
        </div>
      </section>
    );
  }

  renderLogo() {
    return (
      <section>
        <img src="./img/delb.png" className="brand-logo"/><span className="brand-title">delb</span>
      </section>
    );
  }

  renderMenuBtn() {
    console.log('this props id',this.props.user.id);
    var userLink = ('/profile/' + this.props.user.id);
    return (
      <div>
        <Menu
          name="menu1"
          direction="vertical"
          onOpen={this.handleOnOpen.bind(this)}
          onClose={this.handleOnClose.bind(this)}
          distance={50}
          width={45}
          height={45}
          y={-13}
          x={-20}
          customStyle={{
            color: "#555",
            textAlign:"center",
            lineHeight:"45px",
            backgroundColor: "#fff",
            borderRadius: "50%",
            boxShadow: "1px 1px 1px #ddd"
          }}
          >
          <span>
            {
              this.state.menu1.isOpen 
              ?
              <a><i className="fa fa-times fa-lg"></i></a> 
              :
              <img src={this.props.user.avatar} className="profile-img"/>
            }  
          </span>
          
          <Link to={userLink}><i className="fa fa-user fa-lg menu"></i></Link>
          <a href="#"><i className="fa fa-heart fa-lg menu"></i></a> 
          <a href="#"><i className="fa fa-cog fa-lg menu"></i></a> 
          <a href="#" onClick={this.handleLogout}><i className="fa fa-sign-out fa-lg menu"></i></a> 
        </Menu>
      </div>
    );
  }

  renderPost(){
    return(
      <span>
        <a href="#" onClick={this.showPopup} className="plus">+</a>
      </span>      
    );
  }

  renderUser() {
    return (
      <section>
        {
          this.props.user
          ?
          // Display Post link here
          <section>
              <span className="post-add">{this.renderPost()}</span>
              <span className="menu-motion-btn">{this.renderMenuBtn()}</span>

            <PostPopup user={this.props.user} status={this.state.popupStatus} hidePopup={this.hidePopup}/>
          </section>
          :
          // Display Login link here
          <section>
            <a href="#" onClick={this.showPopup} className="login-btn">Login</a>
            <LoginPopup status={this.state.popupStatus} hidePopup={this.hidePopup}/>
          </section>
        }
      </section>
    );
  }

  renderToggleNav() {
    return (    
      <section className="navbar">
          <div className="navbar-header"> 
            <Link to="/" className="navbar-brand">{this.renderLogo()}</Link>
            <span className="nav-list-search">{this.renderProductSearch()}</span>    
            <span className="right-align">{this.renderUser()}</span>
        </div>           
      </section>
    );
  }

  render(){
    return (
      <section>
        <section>
          {this.renderToggleNav()} 
        </section>
      </section>
    );
  }
}

export default Navbar;