import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const HomePage = () => {
  return (
   
    <div>
         <div>HomePage</div>
        <Link to="/about">
          <Button>About</Button>
        </Link>
        <Link to="/contact">
          <Button>Contact</Button>
        </Link>
      </div>
  )
}

export default HomePage