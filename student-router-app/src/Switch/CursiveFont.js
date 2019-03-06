import React, {Component} from 'react'

const CursiveFont = BaseComponent=> {
  return class EnhancedComponent extends Component{
    render(){
      const styles = {
        fontFamily:"cursive",
        color:"green"
      }
      return(
        <BaseComponent styles={styles} />
      )
    }
  }
}

export default CursiveFont
