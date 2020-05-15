import React, { Component } from 'react'

export default class PostsService extends Component {

    state = {
        posts: []
    }

    async componentDidMount() {
        
        // fetch se usa para hacer el request
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        this.setState({ posts: data });

    }
    render() {
        return (
            <div>
                <p>Posts</p>
                {
                    this.state.posts.map(post => {
                        return (
                            <div key={post.id}>
                                <h1>{post.title}</h1>
                                <p>{post.body}</p>

                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
