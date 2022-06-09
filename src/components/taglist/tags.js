import React from "react";
import PostListItem from "../post-list-item";
import { ListGroup } from 'reactstrap';


class Tags extends React.Component {
    render() {
        const {posts, onLike, onImportant, onDelete ,updateState} = this.props
        function addTask() {

            updateState(this.label);
            console.log(this);

        }
        return (<div>

                {posts.map(item => {
                    return (
                        <li key={item.id} className="" onClick={addTask.bind(item)}>
                            {item.label}
                        </li>
                    )
                })}
            </div>
        )
    }
}


export default Tags;
