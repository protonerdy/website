"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../globals.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../globals.css"

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    appointment: new Date(),
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setFormData({ ...formData, appointment: date });
    }
  };
  

  const validateForm = () => {
    const { firstName, lastName, email, phone, message } = formData;
    let isValid = true;

    if (!firstName) {
      toast.error('First name is required.');
      isValid = false;
    }

    if (!lastName) {
      toast.error('Last name is required.');
      isValid = false;
    }

    if (!email) {
      toast.error('Email address is required.');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Email address is invalid.');
      isValid = false;
    }

    if (!phone) {
      toast.error('Phone number is required.');
      isValid = false;
    }

    if (!message) {
      toast.error('Message is required.');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );
      console.log('SUCCESS!', response.status, response.text);
      toast.success('Message sent successfully!');
      router.push('/');
    } catch (error) {
      console.log('FAILED...', error);
      toast.error('Failed to send message.');
    }
  };

  return (
    <>
      <ToastContainer />
      <main className="relative bg-white dark:bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip h-[100vh]">
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Contact Us
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            We would love to hear from you. Please fill out the form below.
          </p>

          <form className="my-8 space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstName">First name</Label>
                <Input 
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange} />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastName">Last name</Label>
                <Input 
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange} />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="123-456-7890"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="message">Message</Label>
                <Input
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-800 dark:text-white dark:border-gray-600"
                />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="appointment">Appointment Date and Time</Label>
              <DatePicker
                selected={formData.appointment}
                onChange={handleDateChange}
                showTimeSelect
                dateFormat="Pp"
                customInput={<CustomDatePickerInput placeholder="Choose date and time" />}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-800 dark:text-white dark:border-gray-600"
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Send Message &rarr;
              <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>
        </div>
      </main>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const CustomDatePickerInput = ({ value, onClick, placeholder }: { value?: string; onClick?: () => void; placeholder?: string }) => (
  <div onClick={onClick} className="relative cursor-pointer">
    <Input
      type="text"
      value={value || placeholder}
      readOnly
      className="w-full p-2 border border-gray-300 rounded-md shadow-sm dark:bg-zinc-800 font-light dark:text-white dark:border-gray-600"
    />
  </div>
);

export default Contact;
