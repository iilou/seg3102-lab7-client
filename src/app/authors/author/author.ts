import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthorEntity} from '../../books/model/bookEntity';
import {BooksService} from '../../books/service/books-service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-author',
  imports: [],
  templateUrl: './author.html',
  styleUrl: './author.css'
})
export class Author {
  selectedAuthor!: AuthorEntity | null;
  private subscription!: Subscription;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private booksService: BooksService = inject(BooksService);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.subscription = this.booksService.getAuthor(id).subscribe({
        next: (data: AuthorEntity) => {
          this.selectedAuthor = data;
        },
        error: (_: any) => {
          this.selectedAuthor = null;
        }
      })
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
