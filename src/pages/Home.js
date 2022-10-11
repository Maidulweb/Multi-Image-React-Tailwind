import React from 'react';
import InputImageOne from '../component/InputImageOne';
import InputImageTwo from '../component/InputImageTwo';
import InputImageThree from '../component/InputImageThree';
import InputImageFour from '../component/InputImageFour';
import InputImageFive from '../component/InputImageFive';

const Home = () => {
    return (
      <div className="flex justify-between">
        <div className="w-2/6">
          <div className="image-one bg-cyan-50 flex items-center justify-center h-56">
            <InputImageOne />
          </div>
          <div className="flex justify-between mt-5">
            <div className="bg-cyan-50 image-two w-1/2 h-36  flex items-center justify-center mr-1">
              <InputImageTwo />
            </div>
            <div className="bg-cyan-50 image-three w-1/2 h-36  flex items-center justify-center ml-1">
              <InputImageThree />
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <div className="bg-cyan-50 image-four w-1/2 h-36  flex items-center justify-center mr-1">
              <InputImageFour />
            </div>
            <div className="bg-cyan-50 image-five w-1/2 h-36  flex items-center justify-center ml-1">
              <InputImageFive />
            </div>
          </div>
        </div>
        <div className="w-4/6 flex items-center">
          <h1 className='text-center w-full font-extrabold text-6xl'>Content</h1>
        </div>
      </div>
    );
};

export default Home;