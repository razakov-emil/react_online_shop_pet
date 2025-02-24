import "./UserMiniProfile.css";

export default function UserMiniProfile({ user, setUser }) {
  return (
    <div className="user-miniprofile">
      <img className="miniprofile-img" src={user.image} alt={user.username} />
      <div className="miniprofile-info">
        <span>{user.firstName + " " + user.lastName}</span>
        <span>{user.email}</span>
      </div>

      <button
        className="logout"
        onClick={() => {
          setUser({});
          localStorage.clear("accessToken");
          localStorage.clear("refreshToken");
        }}
      >
        Log Out
      </button>
    </div>
  );
}
