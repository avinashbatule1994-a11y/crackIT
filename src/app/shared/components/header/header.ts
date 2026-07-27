// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   imports: [],
//   templateUrl: './header.html',
//   styleUrl: './header.scss',
// })
// export class Header {}
import { Component, inject } from '@angular/core';
import { UiStateService } from '../../../services/ui-state.service';


@Component({
  selector:'app-header',
  standalone:true,
  templateUrl:'./header.html',
  styleUrl:'./header.scss'
})
export class Header{

  ui = inject(UiStateService);

}