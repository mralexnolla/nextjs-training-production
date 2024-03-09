// to send a message to a particular rout 



// export const middleware = (request) => {
//     return Response.json({msg: 'Hello Alex'})
// }

// configuring the routes that would be affected

// export const config = {
//     matcher: '/about'
// }





// to restrict multiple routes 

import { NextResponse } from "next/server";

export const middleware = (request) => {
    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: ['/about:path*' /*'/tasks/:path*'*/],  // here am blocking averything after about and tasks though i commented tasks to have access to it 
};