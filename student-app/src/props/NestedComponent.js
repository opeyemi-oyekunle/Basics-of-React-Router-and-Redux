import React, {Component} from 'react';

class NestedComponent extends Component{
  render(){
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
