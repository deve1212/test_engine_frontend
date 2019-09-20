import Card from './Cards';
import Appbar from './Appbar';
import React from 'react';
import {getSubjects} from '../../Actions';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  componentWillRecieveProps(nextprops)
  {
  	console.log(nextprops)
  }

  constructor(props)
  {
  	super(props);
  	props.getSubjects();
  }


  render() {
    return (<div>
	    <Appbar/>
	    <Card/>
    </div>)
  }
}
const mapStateToProps = {
	subjects: subjects
}

export default connect({getSubjects}, mapStateToProps)(Dashboard);