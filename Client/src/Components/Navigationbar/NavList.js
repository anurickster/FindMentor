import React from 'react';
import { NavLink } from 'react-router-dom';
import decode from './../../addons/tokenDecoder';

const NavList = () => {
  const { role } = decode() || '';

  if (role === 'Student') {
    return (
      <>
        <li className='nav-item active'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/homepage'
          >
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/about'
          >
            About us
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/service'
          >
            Service
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/contact'
          >
            Contact
          </NavLink>
        </li>

        <li className='nav-item' onClick={() => localStorage.clear()}>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/'
          >
            Log out
          </NavLink>
        </li>
      </>
    );
  } else if (role === 'Mentor') {
    return (
      <>
        <li className='nav-item'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/welcomepage'
          >
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/mentorprofile'
          >
            Your Profile
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/addcourse'
          >
            Add Course
          </NavLink>
        </li>

        <li className='nav-item' onClick={() => localStorage.clear()}>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/'
          >
            Log out
          </NavLink>
        </li>
      </>
    );
  } else if (role === 'Admin') {
    return (
      <>
        <li className='nav-item'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/homepage'
          >
            Home
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/addmentor'
          >
            Add Mentor
          </NavLink>
        </li>
        <li className='nav-item' onClick={() => localStorage.clear()}>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/'
          >
            Log out
          </NavLink>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li className='nav-item active'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/homepage'
          >
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/about'
          >
            About us
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/contact'
          >
            Contact
          </NavLink>
        </li>
      </>
    );
  }
};

export default NavList;
