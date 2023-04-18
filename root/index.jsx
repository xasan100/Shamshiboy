import React, { useState } from 'react'
import { Menu } from 'antd';
import Square from "../assets/svg/3d-square 1.svg"
import Setting from "../assets/svg/discount-shape 1.svg"
import Container from "./style.js"

const RootCom = () => {
    function getItem(label, key, icon, children, type) { return { key, icon, children, label, type, } }
    const [page, setPage] = useState('sub1')

    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const items = [
        getItem('Category', 'sub1', <Square />),
        getItem('Products', 'sub2', <Square />,),
        getItem('Permissions', 'sub4', <Square />,),
        getItem('Role', 'role', <Square />,),
        getItem('Shop', 'sub5', <Setting />,),
        getItem('Orders', 'sub6', <Setting />,),
        getItem('Setting', 'sub3', <Setting />, [
            getItem('Admin staff', 'role1'),
            getItem('Role2', 'role2'),
            getItem('Role3', 'role3'),
        ],),

    ]


    const returnComFunc = (type) => {
        switch (type) {
            case 'sub1': return <CategoryCom />
            case 'sub2': return <ProductsCop />
            case 'sub4': return <PermissionsCom />
            case 'sub5': return <ShopCom />
            case 'role': return <RoleComp />
            case 'sub6': return <OrdersComp />
            case 'role1': return <AdminCom />
        }
    }
    return (
        <Container>
            <Container.Sidebar>
                {collapsed ?
                    <Container.Logo onClick={toggleCollapsed}>
                        Logo
                    </Container.Logo>
                    : <Container.Logo onClick={toggleCollapsed}>
                        Logo
                    </Container.Logo>}
                <Menu
                    theme={'dark'}
                    onClick={(e) => setPage(e.key)}
                    defaultSelectedKeys={['sub1']}
                    defaultOpenKeys={['sub1']}
                    inlineCollapsed={collapsed}
                    mode="inline"
                    items={items}
                />

            </Container.Sidebar>
            <Container.Inset>
                {returnComFunc(page)}
            </Container.Inset>
        </Container>
    )
}

export default RootCom