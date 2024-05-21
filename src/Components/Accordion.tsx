import { useState } from "react";


interface Props {
    title: string;
    children: React.ReactNode;
}

const Accordion = ({ children, title }: Props) => {
    const [open, setOpen] = useState(false);
    return(
        <div className="w-full mb-5 py-2 px-4 text-primaryFont shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer p-20 rounded-lg">
            <button onClick={() => setOpen(!open)} className="gap-3 flex items-center">
                {/* <MdCorporateFare /> */}
                <span><b>{title}</b></span>
                {/* <MdKeyboardArrowRight size={20} className={`transition-all duration-500 ease-in-out ${open ? "rotate-90" : ""}`} /> */}
            </button>
            <div className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-1'
            }`}>
                <div className="overflow-hidden">{children}</div>
            </div>
        </div>
    );
};

export default Accordion;