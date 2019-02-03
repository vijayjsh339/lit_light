import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
    selector:'profile-creation',
    templateUrl:'./profile.component.html'
}) 
export class CreateProfileComponent implements OnInit {
    profileForm:FormGroup;
    constructor(){}
    ngOnInit(){
        this.profileForm=new FormGroup({
            fullName:new FormControl(),
            email: new FormControl()
        });
    }
    onSubmit(): void {
        console.log(this.profileForm.value);
    }
    
}