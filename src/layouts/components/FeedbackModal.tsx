// components/FeedbackModal.tsx
"use client";

import React, { useState } from 'react';
import Modal from './Modal';
import FeedbackForm from './FeedbackForm';

const FeedbackModal: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSubmit = async (formData: { name: string; email: string; message: string }) => {
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Feedback submitted successfully!');
      handleCloseModal();
    } else {
      alert('Failed to submit feedback.');
    }
  };

  return (
    <>
      <button onClick={handleOpenModal}>Give Feedback</button>
      <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
        <FeedbackForm onSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

export default FeedbackModal;
