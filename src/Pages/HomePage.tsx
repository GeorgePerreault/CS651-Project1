import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
   
    <div>
         <div>HomePage</div>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>
  )
}

export default HomePage