import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})

export class TestComponent implements OnInit {
  cunstructor(){}
 ngOnInit(): void {
    console.log('TestComponent initialisé');
  }
}
