import Link from 'next/link'
import {motion, AnimatePresence} from 'framer-motion'
const ResponsiveMenu=({open}:any)=>{
    return(
        <div>

            <AnimatePresence mode='wait'>
                {open && (
                        <motion.div
                        initial={{opacity: 0, y: -100}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -100}}

                        className=" relative top-10 h-screen">

                            <div className="md:hidden bg-gray-500 rounded-3xl py-10 m-5">
                                <ul className="flex flex-col justify-center items-center gap-5">
                                    <li className="underline font-bold text-white">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="underline font-bold text-white">
                                        <Link href="Product">Product</Link>
                                    </li>
                                    <li className="underline font-bold text-white">
                                        <Link href="Single-Product-Page">Single-Product-Page</Link>
                                    </li>
                                    <li className="underline font-bold text-white">
                                        <Link href="Cart">Cart</Link>
                                    </li>
                                    <li className="underline font-bold text-white">
                                        <Link href="Contact Us">Contact Us</Link>
                                    </li>
                                      
                                    <li className="underline font-bold text-white">
                                        <Link href="Faq">Faq</Link>
                                    </li>

                                    <li className="underline font-bold text-white">
                                        <Link href="About">About</Link>
                                    </li>
                                    
                                </ul>
                            </div>
                            </motion.div>
                    )
                }

                </AnimatePresence>

        </div>
    )
}


export default ResponsiveMenu