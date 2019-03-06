import React, {Component} from 'react';
// import Students from './Students'

class NestedComponent extends Component{
  render(){
    console.log(this.props);
    return(
      <ul>
        <li>Oyekunle Opeyemi {this.props.studentClass} {this.props.studentSchool}</li>
        <li>Adeferanmi Tolulope {this.props.studentClass} {this.props.studentSchool}</li>
        <li>Moyin Akinbolwale {this.props.studentClass} {this.props.studentSchool}</li>
      </ul>
    )
  }
}

export default NestedComponent
