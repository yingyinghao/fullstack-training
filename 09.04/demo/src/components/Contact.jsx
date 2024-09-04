import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <h2>Contact Page</h2>
      <table className="table">
        <thead>
          <tr>
            <th>
              <Link to="china">China</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="usa">USA</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="india">India</Link>
            </td>
          </tr>
        </tbody>
      </table>
      <Outlet /> {/* This will render the nested route components */}
    </>
  );
};

export default Contact;
