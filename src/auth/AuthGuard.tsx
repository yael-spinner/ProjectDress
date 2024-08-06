import { ReactNode } from "react"
import { selectAuth } from "../redux/auth/auth.selectors"
import { Navigate } from "react-router-dom"
import { PATHS } from "../routes/paths"
import { useSelector } from "react-redux"
import { LinearProgress } from "@mui/material";

type Props = {
    children:ReactNode
}
export default function AuthGuard({children}: Props){
    const { isAuthenticated, isInitialized } = useSelector(selectAuth);
    if(!isInitialized){
        return <LinearProgress />
    }
    if(!isAuthenticated){
        return <Navigate to={PATHS.login}/>
    }

    return <>{children}</>
}