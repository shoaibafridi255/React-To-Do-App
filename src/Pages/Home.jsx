import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(
    `This is the user info : ${(user.username, user.email, user.password)}`
  );
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">This is My Home!</h1>
          <hr />
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            reprehenderit. Earum veniam nostrum distinctio cupiditate deserunt
            itaque magnam labore modi dolores excepturi at cumque ipsam
            voluptatibus hic ut, aut iure.
          </p>
          <p>
            <strong>UserName </strong>: {user.username}
          </p>
          <p>
            <strong>Email</strong>: {user.email}
          </p>
          <p>
            <strong>Password</strong> :{user.password}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
