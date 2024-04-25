import React from 'react';
import Loading from './Loading';
import { useRouter } from 'next/navigation';

interface Props {
  loading: boolean;
}

const Header: React.FC<Props> = ({ loading }) => {
  const router = useRouter();
  const title = 'Podcaster';
  const handleClick = () => {
    router.push('/');
  }
  return (
    <>
      <div className="bg-gray-200 p-4 flex flex-row justify-between sticky top-0 z-50">
        <h1 className="text-2xl font-bold" onClick={()=> handleClick()}>{title}</h1>
        {loading && <Loading />}
      </div>
      <div className="border-t border-gray-300"></div>
    </>
  );
};


export default Header;