"use client";

import { updateUser } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import type { FormEvent } from "react";

export default function Profile() {
  const handleUpdateUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(
      formData.entries()
    ) as Record<string, string>;

    const resData = await updateUser({
      name: userData.name,
    });

    console.log(resData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
          
          {/* Header */}
          <div className="text-center mb-7">
            <h1 className="text-3xl sm:text-4xl font-bold text-red-700">
              Profile
            </h1>

            <p className="text-gray-500 text-sm mt-2">
              Update your profile information
            </p>
          </div>

          {/* Form */}
          <Form
            className="w-full flex flex-col gap-5"
            onSubmit={handleUpdateUser}
          >
            <Fieldset className="w-full">
              <FieldGroup>
                <TextField
                  isRequired
                  name="name"
                  validate={(value) => {
                    if (value.length < 3) {
                      return "Name must be at least 3 characters";
                    }

                    return null;
                  }}
                >
                  <Label className="text-gray-700 font-medium">
                    Name
                  </Label>

                  <Input
                    placeholder="Enter your name"
                    className="w-full"
                  />

                  <FieldError />
                </TextField>
              </FieldGroup>

              <Fieldset.Actions className="mt-6">
                <Button
                  type="submit"
                  className="w-full bg-red-600 text-white font-semibold py-2.5 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Save Changes
                </Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>
        </div>
      </div>
    </div>
  );
}