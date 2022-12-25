import React from "react";
// import './CommentsList.css';


const CommentsList = (props) => {
    return (
        <div>
            {props.parentList.map((entry, index) => {
                return (
                    <React.Fragment>
                        <p>{entry.index}</p>
                        <p className='userName'>{entry.userName}</p>
                        <p>{entry.userComment}</p>
                        <span>
                            <i className=" hover glyphicon glyphicon-thumbs-up"> </i>
                            <i className=" hover glyphicon glyphicon-thumbs-down"> </i>
                        </span>
                        <hr />
                    </React.Fragment>
                )
            })}
        </div>
    )

}
export default CommentsList;

