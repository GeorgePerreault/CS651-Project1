import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
            <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-2xl">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Computer Vision & ML Startup</h1>
                <p className="text-gray-600 mt-4 text-lg">
                    We specialize in cutting-edge AI solutions for real-world applications. Transforming vision into intelligence.
                </p>
                <div className="mt-6 flex justify-center space-x-4">
        <Link to="/about">
          <Button variant="outline" className="px-6 py-2 text-lg bg-black text-white border-black">About</Button>
        </Link>
        <Link to="/contact">
          <Button variant="outline" className="px-6 py-2 text-lg bg-black text-white border-black">Contact</Button>
        </Link>
            <Link to="/sign-in-page">
                <Button variant="outline" className="px-6 py-2 text-lg bg-black text-white border-black">Sign In</Button>
            </Link>
      </div>
    </div>
        </div>
  )
}

export default HomePage

