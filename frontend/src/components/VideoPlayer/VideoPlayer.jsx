import React from 'react';

const VideoPlayer = (props) => {
        return (
            <><><h1>{props.videoSnippet.snippet.title}</h1>
                <p>{props.videoSnippet.snippet.description}</p>

                {console.log('VideoPlayer snippet result: ', props.videoSnippet.snippet.description)}
             
                <iframe id="ytplayer" type="text/html" width="960" height="640" src={props.videoUrl} autoPlay="0" frameBorder="0"></iframe>
            </></>
        )
    }

export default VideoPlayer;