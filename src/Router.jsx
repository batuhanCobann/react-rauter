import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Home } from "./home";
import { Posts } from "./Posts";
import { notFound } from "./notFount";

export const Router = () => {
    return  (
        <BrowserRouter>
            <Routes>
                <Route path="app" Component={App}></Route>
                <Route path="/home" Component={Home}></Route>
                <Route path="/posts" element={<Posts />}></Route>
                <Route path="*" Component={notFound}></Route>
            </Routes>
        </BrowserRouter>
    )
};