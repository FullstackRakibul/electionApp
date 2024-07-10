import React from 'react'
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Item } = Menu;



const MainHeader = () => {
    const navigate = useNavigate();
    const handleClick = (e: { key: string }) => {
    navigate(e.key);
  };
  return (
    <>
      <Menu mode="horizontal" onClick={handleClick}
        style={{backgroundColor:'#fff' , borderRadius:'3px' , boxShadow:'5p%'}}
      >
        <Item key="/core/dashboard">Dashboard</Item>
        <Item key="/core/about">About</Item>
        <Item key="/core/termsandcondition">Terms And Condition</Item>
        <Item key="/logout">Logout</Item>
      </Menu>
    </>
  )
}

export default MainHeader