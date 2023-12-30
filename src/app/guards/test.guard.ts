import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

export const TestGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {

    const authenticatedPermissions = [
        'ADMIN',
        'SUPER_ADMIN'
    ];

    // const permissions = [
    //     'CITIZEN',
    //     'INSPECTOR',
    //     'ADMIN',
    //     'VIEWER'
    // ]
    const myPermissions = localStorage.getItem('permissions');

    return !!(myPermissions && (
        JSON.parse(myPermissions).includes(authenticatedPermissions[0]) ||
        JSON.parse(myPermissions).includes(authenticatedPermissions[1])));
}