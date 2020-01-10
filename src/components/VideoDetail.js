import React from "react";

class VideoDetail extends React.Component {
    render() {
        const video = this.props.video;

        if (!video)
            return <div>Loading...</div>;
        return(
            <div className="container">
                <div className="row">
                    <div className="col col-md-12">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                                title={video.snippet.title}
                                className="embed-responsive-item"
                                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-md-12">
                        <h6>{video.snippet.title}</h6>
                        <p>{video.snippet.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoDetail;