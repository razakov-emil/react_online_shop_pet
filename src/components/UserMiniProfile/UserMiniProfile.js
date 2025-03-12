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
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        }}
      >
        Log Out
      </button>
    </div>
  );
}
