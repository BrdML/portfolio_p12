"use client"

import  { AnimatePresence, motion } from "framer-motion";

import Navbar from "../Navbar";
import Footer from "../Footer";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes";


const TransitionProvider = ({children}) => {
    const pathName = usePathname()
    return (
        <AnimatePresence mode="wait">
            <div key={pathName} className="h-screen">
                <motion.div 
                    className="h-screen w-screen fixed bg-black rounded-b-[90px] z-40"
                    animate={{height: "0vh"}}
                    exit={{height: "140vh"}}
                    transition={{duration: 0.5, ease: "easeOut"}}
                />
                <motion.div
                    className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
                    initial={{pointerEvents:"none", opacity: 1}}
                    animate={{pointerEvents:"none", opacity: 0}}
                    exit={{pointerEvents:"none", opacity: 0}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                >        
                    {pathName.substring(1)}
                </motion.div>
                <motion.div 
                    className="h-screen w-screen fixed bg-black rounded-t-[90px] bottom-0 z-30"
                    initial={{height: "140vh"}}
                    animate={{height: "0vh", transition: {delay: 0.5}}}
                />
                        <Navbar/>
                        <div>{children}</div>
                        <Footer/>
            </div>
        </AnimatePresence>
    )
}

export default TransitionProvider