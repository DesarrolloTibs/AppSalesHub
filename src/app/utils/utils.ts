import { ActivatedRouteSnapshot, Router } from "@angular/router";

/**
 * Get de path current Url
 * @param {string} currentUrl - filename
 */
export const getCurrentRoute = (currentUrl:string) => {
    return currentUrl.split('/')[1].toString()
  }

  export const collectRouteParams=(router: Router)=> {
    let params = {};
    let stack: ActivatedRouteSnapshot[] = [router.routerState.snapshot.root];
    while (stack.length > 0) {
      const route = stack.pop()!;
      params = {...params, ...route.params};
      stack.push(...route.children);
    }
    return params;
  }
