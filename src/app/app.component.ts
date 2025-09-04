import {
  Component,
  effect,
  DestroyRef,
  inject,
  OnInit,
  signal,
  computed,
} from "@angular/core";
import { toObservable } from "@angular/core/rxjs-interop";

import { interval, map } from "rxjs";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);
  intervalSignal = 
  // interval = signal(0);
  // doubleInterval = computed(() => this.interval() * 2);
  private d estroyRef = inject(DestroyRef);
 
  constructor() {
    // effect(() => {
    //   console.log(`Clicked button ${this.clickCount()} times.`);
    // });
  }

  ngOnInit(): void {
    // console.log(this.message());

    // const subscription = interval(1000)
    //   .pipe(map((val) => val * 2))
    //   .subscribe({
    //     next: (val) => console.log(val),
    //   });
    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });

    const subscription = this.clickCount$.subscribe({
      next: (val) => console.log(`Clicked button ${this.clickCount()} times.`)
  
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });

    // This is the full ngOnInit interval object which could take `next`, `complete` and `error` as parameters
    // interval(1000).subscribe({
    //   next: (val) => console.log(val),
    //   complete: () => {},
    //   error: () => console.log()
  }

  onClick() {
    this.clickCount.update((prevCount) => prevCount + 1);
  }
}
