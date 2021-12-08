import { Component } from '@angular/core';
import { FormControl, FormGroup, FormControlName } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  onSubmit(cform) {
    console.log(cform.value);
  }

  cform1 = new FormGroup({
    name: new FormControl()
    });
    onSubmit1(cform1) {
      console.log(cform1.value);
    }
}
