// src/states/loginState.js
import { atom } from 'recoil';

export const loginStatus = atom({
  key: 'loginStatus', // 고유한 키
  default: false, // 기본값
});