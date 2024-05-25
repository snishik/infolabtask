import React, { useEffect } from 'react';

const Home = ({ visits, incrementVisits }) => {
  useEffect(() => {
    incrementVisits();
  }, []);

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>Home page visited {visits} times</p>
      <p><b>Banner ID:</b> B00953260</p>
    </div>
  );
};

export default Home;
