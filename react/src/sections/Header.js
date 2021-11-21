import React from 'react';
import { Link } from 'react-router-dom';
import InlineButton from './../components/InlineButton';
import useLogout from './../hooks/useLogout';

import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const { logoutUser } = useLogout();

  console.log(currentUser);

  return (
    <header>
      {currentUser ? (
        <React.Fragment>
          Hello, {currentUser.username}.
          <InlineButton name={'logout'} handleClick={logoutUser} />
        </React.Fragment>
      ) : (
        <div className="btnGroup">
          <Link to="/login">
            <InlineButton name={'login'} />
          </Link>
          <Link to="/register">
            <InlineButton name={'register'} />
          </Link>
        </div>
      )}
    </header>
  );
}
