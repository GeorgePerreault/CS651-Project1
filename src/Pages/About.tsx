import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const About = () => {
  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
        <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-gray-600 mt-4 text-lg">
            We are a startup focused on revolutionizing industries through computer vision and machine learning. Our team is passionate about solving real-world problems using AI.
          </p>

          <div className="mt-6 flex justify-center space-x-4">
            <Link to="/home">
              <Button className="px-6 py-2 text-lg bg-black text-white border-black">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default About
