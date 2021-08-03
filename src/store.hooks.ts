import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();

//useSelect에 별도의 RootState 타입을 안붙이기 위한 useAppSelect 생성
export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
