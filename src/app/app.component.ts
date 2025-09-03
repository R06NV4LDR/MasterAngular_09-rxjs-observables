import { Component, DestroyRef, inject, OnInit } from "@angular/core";

import { interval } from "rxjs";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef)
  
  ngOnInit(): void {
    const subscription = interval(1000).subscribe({
      next: (val) => console.log(val),
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
    // This is the full ngOnInit interval object which could take `next`, `complete` and `error` as parameters
    // interval(1000).subscribe({
    //   next: (val) => console.log(val),
    //   complete: () => {},
    //   error: () => console.log()
  }
}
