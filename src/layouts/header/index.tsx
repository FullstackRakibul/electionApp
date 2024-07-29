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
        <Item key="/core/fisrt-appriser">First Appriser</Item>
        <Item key="/core/second-appriser">Second Appriser</Item>
      </Menu>
    </>
  )
}

export default MainHeader