import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { TestService } from './test.service';
import { inject } from '@angular/core';

export const TestResolver: ResolveFn<any> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {


    return inject(TestService).getInfoById('97085bbc-71a7-4af6-8b7c-b6da918526ed');
}