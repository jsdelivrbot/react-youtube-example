import React from 'react'; 
import VideoListItem from './video_list_item.js'

const VideoList = (props) => {
    
    const videoItems = props.videos.map((video) => {
        return <VideoListItem 
            onVideoSelect={props.onVideoSelect}
            key={video.etag} 
            video={video}/>
    }); 

    return (
        <ul className="col-xs-4 list-group" >
            {videoItems}
        </ul>    
    ); 
}; 

export default VideoList; 

    // use map iterator 
    // var array = [1,2,3]; 
    // array.map(function(number){return number * 2});