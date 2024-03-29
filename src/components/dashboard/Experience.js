import React, { Component } from 'react'
import { connect } from 'react-redux';
import Moment from 'react-moment';
import {DeleteExperience} from '../../actions/profileActions';
import PropTypes from 'prop-types';

class Experience extends Component {
    onDeleteClick(id){
        this.props.DeleteExperience(id);
    }

    render() {
      const experience = this.props.experience.map(exp =>(
          <tr key={exp._id}>
            <td>{exp.company}</td>
            <td>{exp.title}</td>
            <td>
                
                <Moment format="DD/MM/YYYY">{exp.from}</Moment> -{' '}
                { exp.to === null ? ('Now') : (
                <Moment format="DD/MM/YYYY">{exp.to}</Moment>
                )}
            </td>
            <td>
                <button onClick={this.onDeleteClick.bind(this,exp._id)} className="btn btn-danger">Delete</button>
            </td>
          </tr>
      ));
    return (
      <div>
            <h4>Experience Credentials</h4>
            <table className="table">
            <tbody>
                <tr>
                    <th>Company</th>
                    <th>Title</th>
                    <th>Years</th>
                </tr>
                    {experience}
            </tbody>
            </table>
      </div>
    );
  }
}

Experience.propTypes = {
    DeleteExperience: PropTypes.func.isRequired
};

export default connect(null,{DeleteExperience})(Experience);