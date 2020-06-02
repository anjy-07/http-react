import  React, { Component } from "react";
import axios from 'axios'
import Post from '../../../components/Post/Post'
import './Posts.css'

class Posts extends Component {
    state = {
        posts: [],
       // selectedPostId: null,
       // error: false

    }
    postSelectedHandler = (id) => {
        this.setState({selectedPostId:id})
     }

     componentDidMount(){
        axios.get("/posts")
        .then((response) => {
            console.log(response.data)
            const posts = response.data.slice(0,4); 
            const updatedPosts = posts.map((post) => {
                return {
                    ...post,
                    author: 'Anjali'
                }

            })
            this.setState({posts: updatedPosts})
        })
        .catch((error) => {
            console.log(error)
          //  this.setState({error:true})
        })
        
    }

    render() {
        console.log("hi")
        let posts = <p style={{textAlign:`center`}}>Something went wrong</p>
        
        posts= this.state.posts.map((post,id) => {
            return <Post
                        key={id} 
                        title={post.title} 
                        author={post.author}
                        clicked={this.postSelectedHandler.bind(this, post.id)}></Post>
        })
        console.log(posts)
     

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;