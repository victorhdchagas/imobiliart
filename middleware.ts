// export { auth as middleware } from "@/lib/auth"
import {withAuth} from "next-auth/middleware";

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|/).*)"],
}

export default withAuth(
	function middleware(req) {
		// console.log(req.nextauth.token)
	},
	{
		pages: {
			signIn: "/login",
			error: "/error",
		},
		callbacks: {
			authorized: ({ token,req }) => {
				// console.log(token)
				// console.log(Object.keys(req), req.nextUrl)
				if(req.nextUrl.pathname ==="/") return true;
				return !!token
			}
		},
	}
);

