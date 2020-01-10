import React from "react";

class VideoItem extends React.Component {
    render() {
        const video = this.props.video;
        console.log(video);

        return (
            <div>
                <ul className="list-unstyled">
                    <li className="media">
                        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
                        <div className="media-body">
                            <h5 className="mt-0 mb-1">{video.snippet.title}</h5>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default VideoItem;