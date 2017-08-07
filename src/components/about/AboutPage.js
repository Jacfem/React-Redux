import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This app uses React, Redux, React Router, and more!</p>
        <Link to="/" className="btn btn-primary btn-lg">Go Home</Link>
      </div>
    );
  }
}

export default AboutPage;
