import React from "react";
import Header from "./Header";

interface Props {
    children: React.ReactNode;
};

const Layout = ({ children }:Props) => {
    return(
        <div>
            <Header />
            <div className="flex items-center justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg gap-20 h-[80vh] w-[80vw]">
                {children}
            </div>
        </div>
        
    )
}

export default Layout;