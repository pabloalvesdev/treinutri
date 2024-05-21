import { useEffect, useState } from "react";
import { useMainContext } from "../Context";

const Header = () => {
    const { header, setHeader } = useMainContext();
    
    // const defTitle = () => {
    //     debugger;
    //     if(menu) {
    //         setTitle(menu);
    //     }
    //     if(workout) {
    //         setTitle(workout.title);
    //     }
    // }

    // useEffect(()=>{
    //     console.log("s")
    // }, [header])

    return(
        <div className="flex justify-between">
            {header.title !== undefined && <>
                <button onClick={header.back}><i className="fa fa-arrow-left" /> Voltar</button>
                <p className="text-center text-xl font-bold">{header.title}</p>
                <button onClick={header.back}><i className="fa fa-cog" /></button>
            </>}
        </div>
    )
}

export default Header;