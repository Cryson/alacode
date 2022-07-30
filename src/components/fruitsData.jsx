import React from 'react'
import apple from '../images/fruits/dot-apple.svg';
import banana from '../images/fruits/dot-banana.svg';
import peach from '../images/fruits/dot-peach.svg';
import orange from '../images/fruits/dot-orange.svg';
import grape from '../images/fruits/dot-grape.svg';

export const fruitsData = [
  { title: 'プロフィール', link: '/profile', image: <img className="image" src={apple} alt="アップル" /> },
  { title: 'スキル', link: '/skill', image: <img className="image" src={banana} alt="バナナ" /> },
  { title: 'サービス', link: '/service', image: <img className="image" src={peach} alt="ピーチ" /> },
  { title: 'せいさくぶつ', link: '/items', image: <img className="image" src={orange} alt="オレンジ" /> },
  { title: 'おといあわせ', link: '/contact', image: <img className="image" src={grape} alt="グレープ" /> },
];