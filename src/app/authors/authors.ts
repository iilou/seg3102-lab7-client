import { Component } from '@angular/core';
import { ActivatedRoute, Router, Routes, RouterOutlet } from '@angular/router';
import { Author } from './author/author';

export const authorsRoutes: Routes = [
  {path: ':id', component: Author}
];

@Component({
  selector: 'app-authors',
  imports: [RouterOutlet],
  templateUrl: './authors.html',
  styleUrl: './authors.css'
})
export class Authors {
  constructor(private router: Router, private route: ActivatedRoute) { }

  submit(value: string): void {
    this.router.navigate(['./', value], {relativeTo: this.route}).then(r => {});
  }
}
