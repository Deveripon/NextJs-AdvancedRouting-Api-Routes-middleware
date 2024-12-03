import { NextResponse } from "next/server";

const isAuthenticated = false;
export function middleware(req) {
    // check that user is authenticated or not by using native response api
    /*    if (isAuthenticated) {
        console.log("user authenticated");

        return new Response("", { status: 200 });
    } else {
        console.log("user not authenticated");

        return Response.redirect(new URL("/login", req.url));
    } */

    // check that user is authenticated or not by using NextResponse api

    if (req.url.includes("/dashboard")) {
        console.log("this middleware called from dashboard page");

        if (isAuthenticated) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    }

    // use sapareate middleware to saparate routes

    if (req.url.includes("/login")) {
        console.log("this middleware called from login page");
    }

    if (req.url.includes("/")) {
        console.log("this middleware called from home page");
    }
}

// single middleware by using config object
/* export const config = {
    matcher: ["/dashboard"],
};
 */
