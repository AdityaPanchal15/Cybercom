import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector:'courses',  // <courses>
    template:`
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">     
                {{course}}
            </li>
        </ul>
        
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td> 
            </tr>
        </table>

        <button class=" btn btn-primary" [class.active]="isActive">Class Binding</button>

        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">style Binding</button>
        `

})
export class CoursesComponent{
    title="List of courses";        //string interpolation
    courses;                        
    colSpan=2;                      //attribute binding

    isActive=false;                 //class binding & in style binding
    
    constructor(service:CoursesService){    //dependancy injection
        // let service=new CoursesService();    //Services
        this.courses=service.getCourses();      
    }

    //Logic for calling an HTTP service
    
    

}