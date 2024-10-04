import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home page">
            <h2><b>Welcome to Organika</b></h2>
            <img src="/images/Home_2.jpg" alt=""></img>

            <Link to="/catalog">
                <h1>
                    <button className="btn btn-outline-light">Check our fresh catalog! <i className="fa-solid fa-circle-chevron-right"></i>
                    </button>
                </h1>
            </Link>

        </div>
    );
}

export default Home;