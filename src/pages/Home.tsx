import { Link } from "react-router-dom";
import { useListSlotsQuery } from "../api/queries/slots";
import { formatTimestamp } from "../helpers/TimeHelpers";

const Home = () => {
  const { data, loading } = useListSlotsQuery();
  return (
    <div>
      <h1>Home</h1>
      {data ? (
        <table>
          <thead>
            <th>ID</th>
            <th>Start time</th>
            <th>End time</th>
          </thead>
          <tbody>
            {data.slots.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{formatTimestamp(row.startTime)}</td>
                <td>{formatTimestamp(row.endTime)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      <Link to="/form">Form</Link>
    </div>
  );
};

export default Home;
