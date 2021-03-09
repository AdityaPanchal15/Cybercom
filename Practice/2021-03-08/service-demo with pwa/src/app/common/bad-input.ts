// import { AppError } from './app-error';

export class BadInput {
    constructor(error){
        alert(JSON.stringify(error.error.error));
    }
 }