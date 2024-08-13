"use client";

import Link from "next/link";
import { useState } from "react";
import BaseAuthentication from "@/components/auth/BaseAuthentication"
import OpenEye from "@/public/assets/eyeopenicon.svg";
import CloseEye from "@/public/assets/eyecloseicon.svg";
import LeftFormCard from "@/components/auth/LeftFormCard";
import BaseFormCard from "@/components/auth/BaseFormCard";
import BaseBtn from "@/components/auth/BaseBtn";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/Label";

interface Inputs {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

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
        <BaseFormCard heading="Login" title="Securely login to">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="input-section flex gap-4 flex-col">
            
            {/* Email Input Field */}
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              placeholder="Example@gmail.com"
              {...register("email", { required: "Please input a valid email" })}
              intent="default"
              inputSize="md"
              error={errors.email?.message}
            />
            
            {/* Password Input Field */}
            <Label htmlFor="password">Password</Label>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Your password"
              {...register("password", { required: "Please provide a password" })}
              intent="default"
              inputSize="md"
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword((prevShow) => !prevShow)}
                  className="text-sm leading-5"
                >
                  {showPassword ? <img src={OpenEye} className="w-5 h-5" alt="Hide password" /> : <img src={CloseEye} className="w-5 h-5" alt="Show password" />}
                </button>
              }
              error={errors.password?.message}
            />

            <Link href="#" className="text-right text-gray-600 text-sm">
              Forgot Password
            </Link>

            <BaseBtn btnTitle="Login" />

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
        </BaseFormCard>
      </div>
    </div>
  );
};

export default LoginPage;
