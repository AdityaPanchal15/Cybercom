import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
    // courses=[1,2];
    viewMode='some'; //ngSwitch
    courses;

    data=[
      {id:1,name:'course1' },
      {id:2,name:'course2' },
      {id:3,name:'course3' },
    ];

    onAdd(){
      this.data.push({id:4,name:'course4'});
    }
    onChange(course){
      // let index=this.data.indexOf(course);
      // this.data.splice(index,1);
      course.name='UPDATED';
    }

    loadCourses(){
      this.courses=[
          {id:1,name:'course1' },
          {id:2,name:'course2' },
          {id:3,name:'course3' }
      ];
    }
    trackCourse(index,course){
      return course?course.id:undefined;
    }

    //ngClass
    isSelected=true;
    onClick(){
      if(this.isSelected){
        this.isSelected=false;
      }else{
        this.isSelected=true;
      }
    }

    //ngStyle
    canSave=false;
}
