import { useState, useEffect } from "react";
import "./App.css";
import Skeleton from "./components/Skeleton";

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("https://api.github.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);


  const formSubmitHandler = (e) => {
    e.preventDefault()
    setLoading(true);
    console.log(search)
    fetch("https://api.github.com/search/users?q=" + search)
      .then((res) => {
        console.log("res" , res)
        return res.json();
      })
      .then((data) => {
        setUsers(data.items);
        setLoading(false);
      });
  }

  return (
    <div className="App">
      <form onSubmit={formSubmitHandler}>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button type="submit">Search</button>
      </form>
      {loading && <Skeleton />}
      {!loading &&
        users.map((user, index) => {
          return (
            <div className="user">
              <img src={user.avatar_url}  />
              <p>{user.login}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
