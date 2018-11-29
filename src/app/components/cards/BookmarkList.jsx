import React, {PropTypes} from 'react';

import * as serverApi from "app/utils/ServerApiClient";

class BookmarkList extends React.Component {

    static propTypes = {
        account: PropTypes.string.isRequired,
        community: PropTypes.string.isRequired
    };

    constructor() {
        super();
        this.state = {
            posts: [],
        };

        this.onRemoveBookmark = this.onRemoveBookmark.bind(this);
    }

    componentDidMount(){
        const { account, community } = this.props;
        const me = this;
        let posts = [];

        serverApi.getBookmarks(account, community).then((bookmarks) => {
            bookmarks.forEach(item => { posts.push(JSON.parse(item.post_data)); });
            me.setState({posts});
        });
    }

    onRemoveBookmark(e){
        const index = e.target.getAttribute('data-key');
        const post = this.state.posts[index];
        const post_url = `@${post.author}/${post.permlink}`;
        serverApi.removeBookmark(this.props.account, post_url, this.props.community);
        let temp_posts = this.state.posts;
        temp_posts.splice(index, 1);
        this.setState({posts: temp_posts});
    }

    render() {
        const renderSummary = items => items.map((item, index) => <li key={index}>
                [<a data-key={index} onClick={this.onRemoveBookmark}>Remove</a>] <a href={`/@${item.author}/${item.permlink}`}>{item.title}</a>
        </li>);

        return (
            <div id="posts_list" className="PostsList">
                <ul className="PostsList__summaries">
                    {renderSummary(this.state.posts)}
                </ul>
            </div>
        );
    }
}

export default BookmarkList;
