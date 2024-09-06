import { Link, Outlet } from "react-router-dom";
const Contact=()=>{
    return (
        <>
          <h2> Contact Page</h2>
          <table className="table">
              <tr>
                  <td width={200}>
                    <ul>
                        <li> <Link to="india"> India</Link></li>
                        <li> <Link to="usa"> USA</Link></li>
                        <li> <Link to="china"> China</Link></li>
                    </ul>
                  </td>
                  <td>
                      <Outlet />
                  </td>
              </tr>
          </table>
        </>
    )
}
export default Contact;