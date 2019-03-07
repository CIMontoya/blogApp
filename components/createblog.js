import React from 'react'
import { TextInput, View} from 'react-native'
import { Button } from 'react-native-elements';
import styles from './styles';



export default class CreateBlog extends React.Component {
constructor(props){
  super(props)
  this.state =
  { text: "useless placeholder" }
}
    change = (text) => {
      console.log("text: ", text.nativeEvent.text)
      this.setState({text: text.text})
    }

  render() {
  return (
    <View style={styles.container}>
      <TextInput
        multiline={true}
        style={{height: 500, borderColor: 'gray'}}
        onChange={this.props.change}
        value={this.props.text}
      />
      <Button style={styles.navbar}
        title="Submit Blog"
        type="outline"
      />
    </View>

  )
  }
}
