import React from "react";

class VideoDetail extends React.Component {
    render() {
        const video = this.props.video;
        if (!video)
            return <div>Loading...</div>;
        return(
            <div>
                <div>{video.snippet.title}</div>
            </div>
        );
    }
}

export default VideoDetail;