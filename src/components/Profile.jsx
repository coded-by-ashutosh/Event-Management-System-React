import Header from "./Header";
import Footer from "./Footer";

function Profile({ user }) {
  return (
    <>
     
      <div className="container my-5">
        <div className="card shadow-lg mx-auto" style={{ maxWidth: "500px" }}>
          <div className="card-body text-center">
            <img
              src={`https://api.dicebear.com/9.x/initials/svg?seed=${user.name}`}
              alt="Profile Avatar"
              className="rounded-circle mb-3"
              style={{ width: "100px", height: "100px" }}
            />
            <h3 className="text-primary fw-bold mb-2">{user.name}</h3>
            <p className="text-warning mb-4">@{user.username}</p>

            <div className="text-start px-4">
              <p>
                <strong>Email:</strong> {user.email || "Not Provided"}
              </p>
              <p>
                <strong>Role:</strong> {user.role || "Member"}
              </p>
              <p>
                <strong>Joined:</strong> {user.joined || "February 2025"}
              </p>
            </div>

            <button className="btn btn-warning fw-semibold mt-3">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Profile;