import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './skeleton.css';

const DealSkeleton = () => {
  return (
    <section>
      <ul className='list'>
        {Array(8)
          .fill()
          .map((item, index) => (
            <li className='card' key={index}>
              <Skeleton duration={1} height={180} />
              <h4 className='card-title'>
                <Skeleton duration={1} width={`90%`} />
              </h4>
              <p className='card-channel'>
                <Skeleton duration={1} height={20} width={120} />
              </p>
              <div className='card-metrics'>
                <Skeleton duration={1} width={`90%`} />
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default DealSkeleton;
