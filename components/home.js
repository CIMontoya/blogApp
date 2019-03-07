import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements';
import styles from './styles'
import Trending from './trending';
import CreateBlog from './createblog';

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      displayBlog: false,
      text: "useless placeholder",
      blogs: [],
      posts: []
    }
  }

  async componentDidMount() {
    try {
        const api = await fetch('https://bilbobloginsbackend.herokuapp.com/')
        const blogs = await fetch('https://bilbobloginsbackend.herokuapp.com/posts')
        const awaitapi = await api.json()
        const awaitposts = await blogs.json()
        this.setState({blogs: awaitapi})
        this.setState({posts: awaitposts})
        console.log(this.state.posts.map(post => post.title))
    } catch(err) {
        console.log("Error fetching data-----------", err)
    }
  }

  change = (text) => {
    this.setState({text: text.text})
  }

  handleClick = (e) => {
    this.setState({displayBlog: true})
    }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.text}>#Trending</Text>
        </View>
        {this.state.displayBlog ? <CreateBlog /> : null}
        <Trending
        posts={this.props.posts}
        state={this.props} />
        <Button
          onPress={() => this.handleClick(this)}
          style={styles.navbar}
          title="Create Blog Post"
          type="outline"
        />
      </View>
    )
  }

}
