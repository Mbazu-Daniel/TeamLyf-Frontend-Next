"use client";

import Link from "next/link";
import BaseAuthentication from "@/components/auth/BaseAuthentication";
import LeftFormCard from "@/components/auth/LeftFormCard";
import { Card } from "@/components/ui/card";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input"; 
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import PasswordInput from "@/components/auth/PasswordInput";

interface Inputs {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Hi David", data);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center md:grid md:grid-cols-2">
      <LeftFormCard
        title="Productivity at its peak"
        message="Teamlyf – where productivity meets collaboration at its peak. Elevate your work experience as Teamlyf seamlessly integrates tools and streamlines communication right at the core of your team's success."
      />
      <div className="form-pane pt-12 md:pt-0 bg-[#f0f5f8] px-8 md:px-24 flex flex-col justify-end pb-12">
        <Card className="bg-white p-8"> {/* Apply bg-white here */}
          <h2 className="text-xl font-semibold mb-4">Login</h2>
          <h3 className="text-lg mb-4">Securely login to</h3>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="input-section flex gap-4 flex-col">
            
            {/* Email Input Field */}
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                placeholder="Example@gmail.com"
                {...register("email", { required: "Please input a valid email" })}
                intent="default"
                inputSize="md"
                error={errors.email?.message}
              />
            </div>
            
            {/* Password Input Field */}
            <PasswordInput
              label="Password"
              placeholder="Your password"
              register={register}
              error={errors.password?.message}
            />

            <Link href="#" className="text-right text-gray-600 text-sm">
              Forgot Password
            </Link>

            <Button 
              type="submit" 
              label="Login" 
              intent="primary" 
              size="sm" 
            />
          </form>
          <BaseAuthentication />
          <div className="text-center mt-4">
            <p className="inline-block text-sm">
              Don't have an account?{" "}
              <Link href="/auth/register" className="text-blue-500 pl-2">
                Sign up
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
