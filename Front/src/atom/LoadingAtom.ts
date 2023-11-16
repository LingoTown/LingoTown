import { atom } from "recoil";

type LoadingAtom = {
  loading: boolean,
};

export const loadingAtom = atom<LoadingAtom>({
  key: 'LoadingAtom',
  default: {
    loading:true
  }
});

export const initialLoading = {
  loading:true
};