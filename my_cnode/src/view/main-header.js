import React, {Component} from "react";
import {Layout, Row, Col, Divider, Menu, Icon, Dropdown, Button} from "antd";
import Nav from "./nav";

class MainHeader extends Component {
    render () {
        return (
            <Layout.Header>
                <Row className="wrap">
                    <Col md={6} xs={24}>
                        <h1 id="logo">humanbrain</h1>
                    </Col>
                    <Col md={18} xs={0}>
                        <Divider className="headerDivider" type="vertical" />
                        <Nav id="nav" mode="horizontal" />
                    </Col>
                    <Col md={0} xs={24} className="xsNav">
                        <Dropdown 
                            overlay={<Nav id="xs-nav" mode="vertical" />}
                            trigger={["click", "touch", "hover"]}
                            placement="bottomRight"
                        >
                            <Button><Icon type="bars" /></Button>
                        </Dropdown>
                    </Col>
                </Row>
            </Layout.Header>
            )
    }
}

export default MainHeader;