const UserList = ({ users }) => {
  if (users.length === 0) return <p>No record(s) found.</p>;

  return (
    <>
      {users.map((user, index) => (
        <ul key={`${user.name}-${index}`}>
          <li>
            {user.name} - {user.email}
          </li>
        </ul>
      ))}
    </>
  );
};

export default UserList;
