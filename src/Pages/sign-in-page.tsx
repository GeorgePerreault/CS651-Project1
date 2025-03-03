import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as motion from "motion/react-client";


type LoginData = {
  username: string;
  password: string;
};

type RegisterData = {
  name: string;
  email: string;
  username: string;
  password: string;
};

export default function SignInPage() {
  const navigate = useNavigate(); // Initialize navigation
  const [loginData, setLoginData] = useState<LoginData>({
    username: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState<RegisterData>({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const [showRegister, setShowRegister] = useState(false);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", loginData);

    // Simulate authentication success and navigate to home page
    navigate("/home");
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration submitted:", registerData);

    setLoginData({
      username: registerData.username,
      password: registerData.password,
    });

    setShowRegister(false);
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div
        className={`w-full ${
          showRegister
            ? "max-w-4xl flex gap-6 justify-center"
            : "flex justify-center"
        }`}
      >
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Sign In</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  value={loginData.username}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.8 }}>
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </motion.div>
            </form>
          </CardContent>
          <CardFooter>
            <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.8 }}>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setShowRegister(true)}
                disabled={showRegister}
              >
                Create Account
              </Button>
            </motion.div>
          </CardFooter>
        </Card>

        {showRegister && (
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl">Create Account</CardTitle>
              <CardDescription>Register for a new account</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-name">Full Name</Label>
                  <Input
                    id="register-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={registerData.name}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <Input
                    id="register-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-username">Username</Label>
                  <Input
                    id="register-username"
                    name="username"
                    type="text"
                    placeholder="Choose a username"
                    value={registerData.username}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <Input
                    id="register-password"
                    name="password"
                    type="password"
                    placeholder="Choose a password"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.8 }}>
                  <Button type="submit" className="w-full">
                    Create Account
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
    </>
  );
}
