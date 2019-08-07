import React, {Component} from "react";
import {Link} from "react-router-dom";
import {List, Avatar} from "antd";
import data from "./data";
import TxtTag from "./txtTag";

class IndexList extends Component {
    render() {
        console.log(data);
        return (
            <List
                loading = {false}
                dataSource = {data.data}
                renderItem = {item => <List.Item
                        actions={["回复 " + item.reply_count, "访问 " + item.last_reply_at.split("T")[0]]}
                    >
                        <List.Item.Meta
                            avatar = {<Avatar src={item.author.avatar_url} />}
                            title = {
                                <Link to={"/details/" + item.id}>
                                    <TxtTag data={item} />
                                    {item.title}
                                </Link>
                            }
                            description = {<p><Link to={"/user/" + item.id}>{item.author.loginname}</Link> 发表于：{item.create_at.split("T")[0]}</p>}
                         />
                    </List.Item>}
            >
            </List>
        );
    }
}

export default IndexList;