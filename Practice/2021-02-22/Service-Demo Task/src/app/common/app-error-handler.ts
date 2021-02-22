import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(errors) {
        alert(errors);
        // console.log();
    }
}