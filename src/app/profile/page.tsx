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
  TextArea,
  TextField,
} from "@heroui/react";

export default function Profile() {
  const handleUpdateUser = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData: Record<string, string> = Object.fromEntries(formData.entries())

    const resData = await updateUser({
        name:userData.name
    })
    // Convert FormData to plain object
    // formData.forEach((value, key) => {
    //   data[key] = value.toString();
    // });

    // alert("Form submitted successfully!");
    console.log(resData)
  };

  return (
    <Form className="w-full max-w-96" onSubmit={handleUpdateUser}>
      <Fieldset>
        <Fieldset.Legend>Profile Settings</Fieldset.Legend>
        <Description>Update your profile information.</Description>
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
            <Label>Name</Label>
            <Input placeholder="Update Your Name" />
            <FieldError />
          </TextField>
          
         
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">
           
            Save changes
          </Button>
         
        </Fieldset.Actions>
      </Fieldset>
    </Form>
  );
}