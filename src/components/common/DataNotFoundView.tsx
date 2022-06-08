import React from 'react';

const DataNotFoundView = (keyText: string) => {
  return (
    <div>
      <p>Could not find any data for {keyText}.</p>
    </div>
  );
};

export default DataNotFoundView;
