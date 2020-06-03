import  React, { Component } from "react";
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
       // selectedPostId: null,
        error: false

    }
    postSelectedHandler = (id) => {
        this.props.history.push({pathname: '/'+ id})
     }

     componentDidMount() {
        axios.get("/posts")
        .then((response) => {
            const posts = response.data.slice(0,4); 
            const updatedPosts = posts.map((post) => {
                return {
                    ...post,
                    author: 'Anjali'
                }
            })
            this.setState({posts: updatedPosts})
            this.setState({error:false})
        })
        .catch((error) => {
            console.log(error)
            this.setState({error:true})
        })
        
    }

    render() {
        let posts=[]
        if(this.state.error) {
            posts = <h1 style={{textAlign:`center`}}>Something went wrong, cannot load posts!!</h1>  
        }else{  
            posts= this.state.posts.map((post) => {
                return      <Post
                                title={post.title} 
                                author={post.author}
                                key={post.id}
                                clicked={this.postSelectedHandler.bind(this, post.id)}>                              
                            </Post>
                      
            }) 
        }
        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;