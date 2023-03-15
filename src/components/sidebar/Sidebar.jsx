import React from 'react';
import "./sidebar.css"
import MenuLink from '../menuLink/MenuLink';
import Groups from '../friend/Groups';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import { Group } from '../../data';

function Sidebar(props) {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className='sidebarUser'>
                    <div className='userAvas'>
                    <img 
                    src='https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/105898585_2748361218783040_2142583222949156089_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=2FrdgkucNL8AX-GWKG7&_nc_ht=scontent.fdad1-4.fna&oh=00_AfDw0uCjIeqlyJ8HlqJuGcB1W5tJpbIjbABwa0YjSq6qLQ&oe=6437B0BE'
                    className='userAva'/>
                    </div>
                    <div >
                        <p className='userText'>Hồ Hữu Tuấn</p>
                    </div>
                </div>
                <MenuLink Icon={"https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/334119949_6035960979854295_63127935700261998_n.png?stp=cp0_dst-png&_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=C3p1OTymW2oAX-Uy5Ol&_nc_ht=scontent.fdad2-1.fna&oh=03_AdRMfX3GkybGHL-XH0YFxGc74P5IdV3V5Pt5Ac6uyTFXlg&oe=6437E032"} text="Kỷ niệm"/>
                <MenuLink Icon={"https://scontent.fdad1-2.fna.fbcdn.net/v/t1.15752-9/336196028_651132513689094_905644444596130449_n.png?stp=cp0_dst-png&_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=EpJzAy_GyLsAX_M8dwd&_nc_ht=scontent.fdad1-2.fna&oh=03_AdQEpTr4SL1sn-AdaSvcevwdr6n0CoCYFMNT_ouAmluYkw&oe=6437D892"} text="Bình luận"/>
                <MenuLink Icon={"https://scontent.fdad1-3.fna.fbcdn.net/v/t1.15752-9/336173157_201195082554889_6364100712734766393_n.png?stp=cp0_dst-png&_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=YvVeFwHAP04AX-DwC6v&_nc_ht=scontent.fdad1-3.fna&oh=03_AdTHktXN6rOKc3M_SrS4JShecslXqVhpWCbWCsKIVRaRDw&oe=6437D281"} text="Video trực tiếp"/>    
                <MenuLink Icon={"https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/335592765_759880505580563_1932516119527013918_n.png?stp=cp0_dst-png&_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=495ebqP4G1IAX9AY227&_nc_ht=scontent.fdad2-1.fna&oh=03_AdQe0NI4S7M73iR6XBYqmB0c9i-W1k0CP-Fr0o0GYslrTA&oe=6437F1FC"} text="Bạn bè"/>
                <MenuLink Icon={"https://scontent.fdad1-4.fna.fbcdn.net/v/t1.15752-9/335641883_1245036509552898_6900777832676962024_n.png?stp=cp0_dst-png&_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=idhplZaXGWUAX-Ne-yM&_nc_ht=scontent.fdad1-4.fna&oh=03_AdRkLXDn_xl9kyiOuSluPo1Iye6-QPtek9EGWZaJDdAtDg&oe=6437F49A"} text="Marketplace"/>
                <MenuLink Icon={"https://scontent.fdad1-3.fna.fbcdn.net/v/t1.15752-9/335608724_919621096046039_4180589828808667846_n.png?stp=cp0_dst-png&_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=vGwLGnrMrvEAX9iC5_7&_nc_ht=scontent.fdad1-3.fna&oh=03_AdTky8arFxVrh5AHYR2OwsBy5uOHfLGcCq5gEGIbH2PA7w&oe=6437FA71"} text="Sự kiện"/>
                <MenuLink Icon={"https://scontent.fdad1-4.fna.fbcdn.net/v/t1.15752-9/336307268_603600314601023_7101353209565288544_n.png?stp=cp0_dst-png&_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=oGx65agLsvcAX_dVq5e&_nc_ht=scontent.fdad1-4.fna&oh=03_AdTXpJQTquEOUz6FrMCG9GcH0dhjaGqLV5W-O7VgCGg25g&oe=6437E733"} text="Yêu thích"/>
                <MenuLink Icon={"https://scontent.fdad1-4.fna.fbcdn.net/v/t1.15752-9/335915068_139391989058278_5792374900807368329_n.png?stp=cp0_dst-png&_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=fbInflOpeCcAX_009bK&_nc_ht=scontent.fdad1-4.fna&oh=03_AdRUkxajlbVoAe3SZwRwcXKmPLpjTnP-m7P90NUISKnRPA&oe=6437F74F"} text="Trang"/>
                <MenuLink Icon={"https://scontent.fdad1-2.fna.fbcdn.net/v/t1.15752-9/335837923_1606643513089921_6394715084147188707_n.png?stp=cp0_dst-png&_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ATSqi4nInoAAX9Ry9L4&_nc_ht=scontent.fdad1-2.fna&oh=03_AdSrWUCg564orYkjByGRjuySgQjW2gf1CXQUaG64bUHeCA&oe=6437EB5D"} text="Xem thêm"/>
                <hr className="sidebarHr" />
                <h6 className='sidebarTitle'>Lối tắt của bạn</h6>
                <ul className="sidebarFriendList">
                    {Group.map(u =>(
                    <Groups key={u.id} group={u}/>
                    ))}
                    <div className='menuLinks'>
                    <img src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.15752-9/335837923_1606643513089921_6394715084147188707_n.png?stp=cp0_dst-png&_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ATSqi4nInoAAX9Ry9L4&_nc_ht=scontent.fdad1-2.fna&oh=03_AdSrWUCg564orYkjByGRjuySgQjW2gf1CXQUaG64bUHeCA&oe=6437EB5D" alt="" className='sidebarIcons'/>
                    <span className="menuLinkTextName">Xem thêm</span>
                    </div>
                </ul>
                <b className='policyText'>Quyền riêng tư  · Điều khoản  · Quảng cáo  · Lựa chọn quảng cáo · Cookie · Xem thêm · Meta © 2023</b>

            </div>

        </div>
    );
}

export default Sidebar;