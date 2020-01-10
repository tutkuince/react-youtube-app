import React from "react";
import './VideoItem.css';

class VideoItem extends React.Component {
    onVideoSelect = (video) => {
      console.log(video);
    };

    render() {
        const video = this.props.video;

        return (
            <div onClick={() => this.onVideoSelect(video)} className="video-item">
                <ul className="list-unstyled">
                    <li className="media">
                        <img width={180} src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
                        <div className="media-body">
                            <h6 className="mt-0 mb-1 ml-1">{video.snippet.title}</h6>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default VideoItem;