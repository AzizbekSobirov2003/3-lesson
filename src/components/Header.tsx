import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { MainLogo } from "../assets/images/index";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar fluid className="bg-gray-100">
      <Navbar.Brand>
        <img src={MainLogo} className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
          TimAcademy ADMIN
        </span>
      </Navbar.Brand>
      <div className="flex items-center md:order-2">
        <span className="block text-2xl mr-2">Bonnie Green</span>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block truncate text-sm font-medium">
              Email: name@flowbite.com
            </span>
            <span className="block truncate text-sm font-medium">
              Password: ******
            </span>
          </Dropdown.Header>
          <NavLink to="/profile">
            <Dropdown.Item>Profile</Dropdown.Item>
          </NavLink>

          <Dropdown.Divider />
          <NavLink to="/login">
            <Dropdown.Item>Logout</Dropdown.Item>
          </NavLink>
        </Dropdown>
      </div>
    </Navbar>
  );
}

export default Header;

