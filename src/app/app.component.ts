import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CopextelTest';

  ngOnInit(): void {
      // ($('#example') as any).DataTable();
      // ($('#example') as any).DataTable({
      //     stateSave: true,
      // });
  }
}
