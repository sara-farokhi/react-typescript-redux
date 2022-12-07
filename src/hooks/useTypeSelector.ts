import { TypedUseSelectorHook, useSelector as useSelector_ } from "react-redux"
import { RootState } from "../redux/store"

const useSelector: TypedUseSelectorHook<RootState> = useSelector_
export default useSelector

