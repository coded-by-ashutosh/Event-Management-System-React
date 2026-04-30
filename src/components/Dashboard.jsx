import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import './Style.css';

const Dashboard = ({ user }) => {

    const navigate = useNavigate();

    const goToProfile = () => {
        navigate("/profile");
    }
    return (
        <>
            
            <div className="dashboard container text-center my-5">
                <h2 className="text-primary fw-bold mb-3">Welcome, {user.name}</h2>
                <p className="lead">
                    You are now logged in as <strong>{user.username}</strong>.
                </p>
                <button className="btn btn-warning fw-semibold" onClick={goToProfile}>Go to Profile</button>
            </div>
            

        </>
    )
}

export default Dashboard;