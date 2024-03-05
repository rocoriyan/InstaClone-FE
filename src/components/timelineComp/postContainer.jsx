const PostContainer = (props) => {
    return(
        <div className="postContainer">
            <div className="userBar">
                <p className="usernameTxt">{props.username}</p>
            </div>
            <div className="postImage">
                <img src={props.image}/>
            </div>
            <div className="postDescription">
                <p className="usernameTxt">{props.username}</p>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default PostContainer;