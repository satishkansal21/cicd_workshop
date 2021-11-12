import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserService } from '../user.service';

@Component({
  selector: 'name-that-cat-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {
  user$ = this.userService.getCurrentUser();
  id$ = this.router.params.pipe(map((params) => params['id']));

  constructor(
    private readonly userService: UserService,
    private router: ActivatedRoute
    ) {
  }
}
