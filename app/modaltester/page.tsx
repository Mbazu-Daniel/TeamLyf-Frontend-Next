'use client';

import React, { useState } from 'react';
import FirstModal from '@/components/modals/workspace/FirstWorkSpaceModal';
import SecondModal from '@/components/modals/workspace/SecondWorkSpaceModal';

const WorkspacePage = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(true);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const handleContinue = () => {
    setIsFirstModalOpen(false);
    setIsSecondModalOpen(true);
  };

  const handleCloseSecondModal = () => {
    setIsSecondModalOpen(false);
  };

  const handleSubmit = () => {
    console.log("Form submitted in second modal");
    // Perform any submit logic here
  };

  return (
    <div>
      <FirstModal
        isOpen={isFirstModalOpen}
        onClose={() => setIsFirstModalOpen(false)}
        onContinue={handleContinue}
      />
      <SecondModal
        isOpen={isSecondModalOpen}
        onClose={handleCloseSecondModal}
        onSubmit={handleSubmit}
        onBack={() => {
          setIsSecondModalOpen(false);
          setIsFirstModalOpen(true);
        }}
      />
    </div>
  );
};

export default WorkspacePage;
