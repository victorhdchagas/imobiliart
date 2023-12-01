"use client"
import React from "react"
import {signIn} from "next-auth/react";

export default function FacebookLoginButton() {
	
	return (
		<div>
			<button onClick={()=>signIn("facebook",{callbackUrl:"/protected"})}>facebook</button>
			
		</div>
	)
}
