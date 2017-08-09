import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {}
    };
  }

  render() {
    return (
      <div>
        <h1>Manage Course</h1>
        <CourseForm
          course={this.state.course}
          errors={this.state.errors}
          allAuthors={[]}
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
};

function mapStateToProps(state, ownProps) {
  let course = {id: "", watchHref: "", title: "", authorId: "", length: "", category: ""};
  return {
    course: course
  };
}

function mapDispatchToProps(dispatch) {
  //determines what actions are available in our component
  return {
    // anon. function using arrow function syntax
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
