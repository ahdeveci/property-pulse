import React from 'react';
import { ClipLoader } from 'react-spinners';

const overrideStyle = {
  display: 'block',
  margin: '100px auto',
};

const Loading = ({ loading }) => {
  return (
    <ClipLoader
      color="#3b82f6"
      loading={loading}
      cssOverride={overrideStyle}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default Loading;
