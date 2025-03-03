import { Link } from "react-router-dom";
import { Button } from "./button";
import { ModeToggle } from "./mode-toggle";
import * as motion from "motion/react-client";

const Navbar = () => {
  return (
    <>
      <section>
        <nav className="bg-transparent bg-opacity-30 backdrop-blur-md fixed top-0 left-0 right-0 border-b flex items-center justify-between px-6 h-16 w-full z-50">
          <Link to="/home" className="font-bold text-xl">
            VisionCloud
          </Link>
          <div className="flex space-x-4">
            <Link to="/about">
              <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.8 }}>
                <Button variant="outline">About</Button>
              </motion.div>
            </Link>
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.8 }}>
                <Button variant="outline">Contact</Button>
              </motion.div>
            </Link>
            <ModeToggle />
          </div>
        
        </nav>
      </section>
    </>
  );
};

export default Navbar;
