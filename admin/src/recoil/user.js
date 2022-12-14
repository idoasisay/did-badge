import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: 'user',
  default: {
    isLogin: false,
    address: '',
    testAddress: '',
    badges: [],
  },
  effects_UNSTABLE: [persistAtom],
});
