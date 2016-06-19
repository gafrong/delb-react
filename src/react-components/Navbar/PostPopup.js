import React from 'react';
import Popup from './Popup';

class PostPopup extends React.Component{
  handlePost = () => {

  };

  render(){
    return(
      <Popup {...this.props} style="post-popup">
        <header>Post a new product</header>
        <section>
          <table>
            <tbody className="form-group">
              <tr>
                <td>Name</td>
                <td><input placeholder="Enter product's name" className="form-control"/></td>
              </tr>
              <tr>
                <td>Description</td>
                <td><input placeholder="Enter product's description" className="form-control"/></td> 
              </tr>
              <tr>  
                <td>Link</td>
                <td><input placeholder="http://www..." className="form-control"/></td>
              </tr>
              <tr>
                <td>Media</td>
                <td><input placeholder="Paste a direct link to an image" className="form-control"/></td> 
              </tr>
            </tbody>   
          </table> 
        </section>
        <footer className="post-footer">
          <button onClick={this.handlePost} className="post-btn">Hunt it!</button>
        </footer>
      </Popup>
    );
  }
}

export default PostPopup;