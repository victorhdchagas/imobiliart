"use client"
import React from "react"
import {motion} from "framer-motion"

function DivAnimateHover(props:React.PropsWithChildren<{className:string}>) {
	return (
		<motion.div 
			whileHover={{ y:  -3.1,scale:1.01,transition: { duration: 0.1}}}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5,delay:0.01 }}
			className={props.className}>{props.children}</motion.div>
	)
}


export default DivAnimateHover
