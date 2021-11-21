import React from 'react';
import Header from '../sections/Header';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Landing() {
  console.log('LANDING COMPONENT');
  const { curentUser } = useSelector((state) => state.user);

  // //set user
  // const setUserContext = async () => {
  //   return await axios
  //     .get('/user')
  //     .then((res) => {
  //       // setUser(res.data.currentUser);
  //       history.push('/home');
  //     })
  //     .catch((err) => {
  //       // setError(err.response.data);
  //     });
  // };

  if (curentUser) {
    <Redirect to="/home" />;
  }

  return (
    <div className="page">
      <Header />
      <h3>This is the public landing page</h3>
    </div>
  );
}
