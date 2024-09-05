import React from 'react';
import Image from 'next/image';
import WorkspaceImage from '@/public/assets/modals/workspaceimage.svg';
import UserIcon from '@/public/assets/modals/usericon.svg';

import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  iconName: z.string().min(1, 'Icon & Name is required'),
  projectBrief: z.string().min(1, 'Project brief is required'),
  restrictAccess: z.boolean(),
});

interface FormValues {
  iconName: string;
  projectBrief: string;
  restrictAccess: boolean;
}

interface FirstModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

const FirstModal: React.FC<FirstModalProps> = ({ isOpen, onClose, onContinue }) => {
  // Move the useForm hook call outside of the conditional block
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      iconName: '',
      projectBrief: '',
      restrictAccess: false,
    },
  });

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const onSubmit = (values: FormValues) => {
    console.log(values);
    onContinue();
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-full h-[28rem] flex overflow-hidden">
        {/* Left Section */}
        <div className="flex-1 p-7">
          <h2 className="text-2xl font-bold">Create a project</h2>
          <p className="font-medium text-sm text-gray-800 pt-2 mb-4">
            A project contains a list of tasks, members, chat rooms, with its own workflow and settings.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                name="iconName"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="iconName">Icon & Name</FormLabel>
                    <div className='flex gap-2 items-center'>
                      <div className='bg-initials-100 py-2 px-4 rounded-xl font-bold text-2xl'>D</div>
                      <FormControl>
                        <Input
                          id="iconName"
                          placeholder="Demo project"
                          aria-label="Icon & Name"
                          {...field}
                          className="w-full text-sm font-bold px-3 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-prurple"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="my-10">
                <FormField
                  name="projectBrief"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="projectBrief">Project brief</FormLabel>
                      <FormControl>
                        <Input
                          id="projectBrief"
                          placeholder="A web project for tech-savvy teens and youth..."
                          aria-label="Project brief"
                          {...field}
                          className="w-full my-7 px-3 py-2 border rounded-md focus:outline-none font-bold text-sm focus:ring-2 focus:ring-purple"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                name="restrictAccess"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-col mb-4">
                    <FormLabel htmlFor="restrictAccess">
                      Restrict access
                    </FormLabel>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-800">
                        Only you and invited member have access
                      </p>
                      <FormControl>
                        <label htmlFor="restrictAccess" className="relative inline-block w-12 h-6">
                          <input
                            id="restrictAccess"
                            type="checkbox"
                            className="sr-only peer"
                            aria-label="Restrict access"
                            checked={field.value}
                            onChange={field.onChange}
                          />
                          <div className="w-full h-full bg-gray-300 rounded-full peer-checked:bg-purple-200 peer-focus:ring-2 ring-purple-200 cursor-pointer transition-colors"></div>
                          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                        </label>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col my-4">
                {/* Label at the top */}
                <FormLabel className="mb-1">
                  Invite member
                </FormLabel>

                {/* Container for the descriptive text and button */}
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-800">
                    <Image
                      src={UserIcon}
                      alt="User Icon"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </p>
                  <div className="flex justify-end">
                    <Button
                      label={'Continue'}
                      type='submit'
                      isLoading={form.formState.isSubmitting}
                      disabled={form.formState.isSubmitting}
                      intent='secondary'
                      className='bg-purple-200 text-white transition hover:-translate-y-[3px] hover:bg-purple-500 focus-visible:bg-[none] active:-translate-y-[1px]'
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>

            </form>
          </Form>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative h-full">
          <Image
            src={WorkspaceImage}
            alt="Project Illustration"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstModal;
