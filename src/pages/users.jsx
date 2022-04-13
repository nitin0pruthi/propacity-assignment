import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import UserChart from "../components/userChart";
import { getAlbumns, getUsers } from "../utils/apis/user";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);

  /**
   * loading users and albums
   */
  useEffect(() => {
    (async function () {
      const usersResponse = await getUsers();
      const albumsResponse = await getAlbumns();
      setUsers(usersResponse);
      setAlbums(albumsResponse);
    })();
  }, []);

  // user ids
  const userIds = useMemo(() => {
    if (users) {
      let ids = users.map((user) => {
        return user.id;
      });
      return ids;
    }
  }, [users]);

  // number of albums per user id
  const usersAlbumCount = useMemo(() => {
    if (userIds) {
      return userIds.map((id) => {
        return albums.reduce((acc, curr) => {
          if (curr.userId === id) {
            acc++;
          }
          return acc;
        }, 0);
      });
    }
  }, [userIds, albums]);

  return (
    <div className="p-4 space-y-4">
      <div className="w-1/2 mx-auto">
        {/* Chart */}
        {userIds && usersAlbumCount && (
          <UserChart
            data={{
              labels: userIds,
              datasets: [
                {
                  label:'Number of albums',
                  data: usersAlbumCount,
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                },
              ],
            }}
          />
        )}
      </div>
      {/* List */}
      <div className="border border-gray-400 rounded p-4 space-y-2">
        <h1>Users list:</h1>
        <div className="grid grid-cols-4 gap-2 ">
          {users?.length > 0 &&
            users.map((user) => {
              return (
                <Link to={`/users/${user.id}/albums`} key={String(user.id)}>
                  <div className="text-base p-4 bg-gray-300 hover:bg-gray-400 rounded ">
                    {user.name}
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Users;
