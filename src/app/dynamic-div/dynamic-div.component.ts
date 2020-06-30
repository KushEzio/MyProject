import {
  Component,
  OnInit,
  HostListener,
  OnDestroy,
  Renderer2,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.css'],
})
export class DynamicDivComponent implements OnInit, OnDestroy, AfterViewInit {
  numbers: number[];
  count: number;
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    console.log('i am scrolling');
    // const numbers = Array(10);
    //   .fill(0)
    //   .map((x, i) => i + count + 1);
    // // console.log(count, numbers);
    // this.numbers = [...this.numbers, ...numbers];
    this.count += 1;

    let mydiv = this.render.createElement('div');
    this.render.addClass(mydiv, 'text-center');
    this.render.addClass(mydiv, 'wrapper');
    let mybutton = this.render.createElement('button');
    this.render.addClass(mybutton, 'btn-primary');
    this.render.addClass(mybutton, 'btn');
    this.render.setAttribute(mybutton, 'myid', `${this.count}`);

    this.render.listen(mybutton, 'click', (myevent) => {
      // console.log(this.render.)
      console.log(myevent.target.innerHTML);
      let value = myevent.target.innerHTML.split(' ');
      console.log(value[1]);
      // debugger;
      alert(`Button '${value[1]}' is clicked`);
    });
    var text = this.render.createText(`Button ${this.count}`);
    this.render.appendChild(mybutton, text);
    this.render.appendChild(mydiv, mybutton);
    this.render.appendChild(this.ele.nativeElement, mydiv);
  }

  constructor(private render: Renderer2, private ele: ElementRef) {
    this.numbers = Array(21)
      .fill(0)
      .map((x, i) => i + 1);
  }
  ngAfterViewInit() {
    this.count = this.numbers.length;
  }

  ngOnInit(): void {
    // console.log('jjljljjl : ' + this.numbers);
  }
  clickEvent(number1: number) {
    alert(`Button '${number1}' is clicked`);
  }

  ngOnDestroy() {
    // console.log('removing');
    this.numbers = [];
  }
}
