import 'stylesheets/Footer.scss';

import React from 'react';
import { State } from '../store/reducer';
import { useSelector } from 'react-redux';

export default function Footer() {
  const { timerId } = useSelector((state: State) => state.time);


  return (
    <div className={`bottom-area ${timerId ? 'hidden' : ''}`}>
      <span className='hint'>
        <kbd>Ctrl</kbd> + <kbd>k</kbd> to open command pallet
      </span>
      <span className='hint'>
        <kbd>Tab</kbd> to restart test
      </span>

      <footer>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.github.com/zio7711/zio_type'
        >
          <span>&lt;/&gt;</span> github
        </a>

        <span>
          created by{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.github.com/zio7711'
          >
            @Ziao Tan
          </a>
        </span>
        
      </footer>
    </div>
  );
}
