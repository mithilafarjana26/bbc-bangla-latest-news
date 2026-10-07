"use client";

import { signIn } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import type { FormEvent } from "react";
import Link from "next/link";

const SignIn = () => {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data: Record<string, string> = Object.fromEntries(
      formData.entries()
    ) as Record<string, string>;

    console.log(data);

    const { data: resData, error } = await signIn.email({
      email: data.email,
      password: data.password,
    });

    console.log(resData, error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">

          {/* Heading */}
          <div className="text-center mb-7">
            <h1 className="text-3xl sm:text-4xl font-bold text-red-700">
              সাইন ইন
            </h1>

            <p className="text-gray-500 text-sm mt-2">
              আপনার অ্যাকাউন্টে সাইন ইন করুন
            </p>
          </div>

          {/* Form */}
          <Form
            className="flex w-full flex-col gap-5"
            onSubmit={onSubmit}
          >

            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              className="w-full"
              validate={(value) => {
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                    value
                  )
                ) {
                  return "সঠিক ইমেইল দিন";
                }

                return null;
              }}
            >
              <Label className="text-gray-700 font-medium">
                ইমেইল
              </Label>

              <Input
                placeholder="example@gmail.com"
                className="w-full"
              />

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              name="password"
              type="password"
              className="w-full"
              validate={(value) => {
                if (value.length < 8) {
                  return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
                }

                return null;
              }}
            >
              <Label className="text-gray-700 font-medium">
                পাসওয়ার্ড
              </Label>

              <Input
                placeholder="আপনার পাসওয়ার্ড লিখুন"
                className="w-full"
              />

              <Description className="text-xs text-gray-500">
                আপনার অ্যাকাউন্টের পাসওয়ার্ড দিন
              </Description>

              <FieldError />
            </TextField>

            {/* Forgot Password */}
            {/* <div className="w-full text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-red-600 hover:underline"
              >
                পাসওয়ার্ড ভুলে গেছেন?
              </Link>
            </div> */}

            {/* Button */}
            <div className="w-full pt-1">
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
              >
                সাইন ইন করুন
              </Button>
            </div>
          </Form>

          {/* Sign Up */}
          <div className="text-center mt-6 text-sm text-gray-600">
            <span>অ্যাকাউন্ট নেই? </span>

            <Link
              href="/sign-up"
              className="text-red-600 font-semibold hover:underline"
            >
              সাইন আপ করুন
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignIn;