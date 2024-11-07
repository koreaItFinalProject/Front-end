// src/states/loginState.js
import { atom } from 'recoil';

export const animationDirectionState = atom({
    key: 'animationDirection',  // 고유한 키
    default: 'right-to-left',  // 기본값은 오른쪽에서 왼쪽
});