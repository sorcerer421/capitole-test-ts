import React from 'react';

interface Props {
  loading: boolean;
}

const Header: React.FC<Props> = ({ loading }) => {
  const title = 'Podcaster';
  return (
    <>
      <div className="bg-gray-200 p-4 flex flex-row justify-between sticky top-0 z-50">
        <h1 className="text-2xl font-bold">{title}</h1>
        {loading && <div className="text-blue-500">Loading...</div>}
      </div>
      <div className="border-t border-gray-300"></div>
    </>
  );
};


export default Header;