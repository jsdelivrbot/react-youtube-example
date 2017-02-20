import React from 'react'; 

const VideoDetail = ({video}) => {

    // because async
    
    if(!video){
        return <div>loading...</div>    
    }

    const videoId = video.id.videoId; 
    const url = `https://www.youtube.com/embed/${videoId}`; 

    // interperlating syntax ES6 ^^^^ ( joining strings with variable ) ?

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>

            <div className="detail">
                <div>
                    {video.snippet.title}
                </div>
                <div>
                    {video.snippet.description}
                </div>
            </div>
        </div>
    ); 
}; 

export default VideoDetail; 