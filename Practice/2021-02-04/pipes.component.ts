import {Component} from '@angular/core';

@Component({
    selector:'pipe',
    template:`
        {{courses.title | uppercase | lowercase}}<br/>
        {{courses.students | number}}<br/>
        {{courses.rating | number:'1.1-1'}}<br/>
        {{courses.price | currency:'INR':true:'3.2-2' }}<br/>
        {{courses.releaseDate | date:'shortDate'}}<br/>
        {{text | summary:10 }}
    `
})
export class PipeComponent{
    courses={
        title:"The complete Angular Course.",
        rating:4.9745,
        students:30123,
        price:190.95,
        releaseDate:new Date(2016,3,1)
    }
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}