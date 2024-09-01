import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  isAuthenticatedNextjs,
  nextjsMiddlewareRedirect
} from '@convex-dev/auth/nextjs/server';

const isPublicPage = createRouteMatcher(["/signin"]);  

export default convexAuthNextjsMiddleware((request) => {
  if(!isPublicPage(request) && !isAuthenticatedNextjs()) {
    return nextjsMiddlewareRedirect(request, "/signin");
  }

  // TODO: Redirect user away from "/signin" if authenticated
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
