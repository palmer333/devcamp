import pikkanode from './pikkanode.png';

const nav = {
    display:"flex",
    justifyContent: "space-between",
    backgroundColor: "#ffdab9",
    padding: "5px 50px"
};


const menu = {
    textDecoration: "none",
    color: "#f08080",
    fontSize: "1em"
};

const li = {
    paddingRight: "20px",
};

const Navbar = () => {
    return (
        <nav style={nav}>
            <div>
                <a href="#">
                    <img src={pikkanode} style={{ height: "50px" }} alt="logo" />
                </a>
            </div>
            <ul style={{display:"flex",flexWrap: "wrap", listStyle:"none"}}>
                <li style={li}>
                    <a href="#" style={menu}>Create pikka</a>
                </li>
                <li style={li}>
                    <a href="#" style={menu}>Sign up</a>
                </li>
                <li style={li}>
                    <a href="#" style={menu}>Sign in</a>
                </li>
                <li style={li}>
                    <a href="#" style={menu}>Sign out</a>
                </li>
            </ul>


        </nav>
    );
};

export default Navbar;