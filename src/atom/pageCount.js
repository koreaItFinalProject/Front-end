// src/states/loginState.js
import { atom } from 'recoil';

export const pageCounter = atom({
    key: 'pageCount',
    default: 0
});