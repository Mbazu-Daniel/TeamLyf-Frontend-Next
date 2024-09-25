import React, { useState } from 'react';
import Image from 'next/image';
import WorkspaceImage from '@/public/assets/modals/workspaceimage.svg';
import ArrowLeft from '@/public/assets/arrowlefticon.svg';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';

interface SecondModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  onSubmit: (selectedWorkflow: string) => void;
}

const SecondModal: React.FC<SecondModalProps> = ({
  isOpen,
  onClose,
  onBack,
  onSubmit,
}) => {
  const { handleSubmit, formState } = useForm();
  const [selectedWorkflow, setSelectedWorkflow] = useState<string>('');

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleFormSubmit = () => {
    if (selectedWorkflow) {
      onSubmit(selectedWorkflow);
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-2xl shadow-lg max-w-5xl w-full h-[520px] flex overflow-hidden">
        {/* Left Section */}
        <div className="flex-1 p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <h2 className="text-2xl font-bold">Define your workflow</h2>
            <p className="font-medium text-xs text-gray-800 mb-6">
              Choose a suitable workflow that's best for your work ethics
            </p>

            {/* Workflow Options */}
            <div className="space-y-4">
              <div
                className={`p-2 border-2 rounded-md cursor-pointer transition ${
                  selectedWorkflow === 'Basic'
                    ? 'border-gray-300 bg-gray-100'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setSelectedWorkflow('Basic')}
              >
                <h3 className="font-bold mb-2">Basic</h3>
                <p className="text-xs text-gray-600 flex items-center space-x-1">
                  <span className="w-3 h-3 bg-gray-200 rounded-sm inline-block" />
                  <span className="pr-2">To-do</span>
                  ➜
                  <span className="w-3 h-3 pl-2 bg-purple-200 rounded-sm inline-block" />
                  <span className='pr-2'>In-progress</span>
                  ➜
                  <span className="w-3 h-3 pl-2 bg-green-300 rounded-sm inline-block" />
                  <span>Completed</span>
                </p>
              </div>

              <div
                className={`p-2 border-2 rounded-md cursor-pointer transition ${
                  selectedWorkflow === 'Product'
                    ? 'border-gray-300 bg-gray-100'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setSelectedWorkflow('Product')}
              >
                <h3 className="font-bold mb-2">Product + Engineering</h3>
                <p className="text-xs text-gray-600 flex items-center space-x-1">
                  <span className="w-3 h-3 bg-yellow-200 rounded-sm inline-block" />
                  <span className='pr-2'>Backlog</span>
                  ➜
                  <span className="w-3 h-3 pl-2 bg-blue-300 rounded-sm inline-block" />
                  <span className="pr-2">Scoping</span>
                  ➜
                  <span className="w-3 h-3 bg-red-300 pl-2 rounded-sm inline-block" />
                  <span className='pr-2'>In-design</span>
                  ➜
                  <span className="w-3 h-3 pl-2 bg-purple-200 rounded-sm inline-block" />
                  <span className='pr-2'>In-development</span>
                  ➜
                  <span className="w-3 h-3 bg-green-300 rounded-sm inline-block" />
                  <span>In-review</span>
                </p>
              </div>

              <div
                className={`p-2 border-2 rounded-md cursor-pointer transition ${
                  selectedWorkflow === 'Marketing'
                    ? 'border-gray-300 bg-gray-100'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setSelectedWorkflow('Marketing')}
              >
                <h3 className="font-bold mb-2">Marketing</h3>
                <p className="text-xs text-gray-600 flex items-center space-x-1">
                  <span className="w-3 h-3 bg-orange-300 rounded-sm inline-block" />
                  <span>Backlog</span>
                  ➜
                  <span className="w-3 h-3 bg-pink-300 rounded-sm inline-block" />
                  <span>Planning</span>
                  ➜
                  <span className="w-3 h-3 bg-blue-300 rounded-sm inline-block" />
                  <span>In-progress</span>
                  ➜
                  <span className="w-3 h-3 bg-green-300 rounded-sm inline-block" />
                  <span>Ready for review</span>
                  ➜
                  <span className="w-3 h-3 bg-purple-200 rounded-sm inline-block" />
                  <span>Approved</span>
                </p>
              </div>

              <div
                className={`p-2 border-2 rounded-md cursor-pointer transition ${
                  selectedWorkflow === 'Blank'
                    ? 'border-gray-300 bg-gray-100'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setSelectedWorkflow('Blank')}
              >
                <h3 className="font-bold">Blank</h3>
                <p className="text-xs text-gray-600">
                  Create a custom workflow your way and in your own words
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-6">
            <Button
              leftIcon={
                <Image
                  src={ArrowLeft}
                  alt="arrow left icon"
                  width={5}
                  height={5}
                />
              }
              label="Back"
              onClick={onBack}
              className="bg-gray-100 text-gray-500 px-3 py-1 border-1 border-gray-800 rounded-md gap-2"
            />
            <Button
              label="Create Project"
              onClick={handleSubmit(handleFormSubmit)}
              isLoading={formState.isSubmitting}
              disabled={formState.isSubmitting || !selectedWorkflow}
              className="bg-purple-200 text-white transition hover:-translate-y-[3px] hover:text-white hover:bg-purple-300 focus-visible:bg-[none] active:-translate-y-[1px]"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative h-full">
          <Image
            src={WorkspaceImage}
            alt="Workflow Illustration"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SecondModal;
