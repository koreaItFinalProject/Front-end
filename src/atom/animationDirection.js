// src/states/loginState.js
import { atom } from 'recoil';

export const animationDirectionState = atom({
    key: 'animationDirection',  // 고유한 키
    default: 'left-to-right',  // 기본값은 왼쪽에서 오른쪽
});