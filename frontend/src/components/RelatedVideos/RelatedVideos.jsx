import React from 'react';

const RelatedVideos = (props) => {
    return (
        <>
            {props.related.map((video) => {
                { console.log(`On RelatedVideos.jsx result, video inside map thumbnail:`, video.snippet.thumbnails.standard.url) }     
                return (
                    <><p><img src={video.snippet.thumbnails.standard.url} className="thumbnails"  alt="Video thumbnail."  /></p><p>{video.snippet.title}</p><p>Channel: {video.snippet.channelTitle}</p></>


                )
            })}
        </>
    );
}
export default RelatedVideos;
