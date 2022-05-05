import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.css']
})
export class PaintComponent implements OnInit {

  constructor() { }
  public disabled = false;
  public touchUi = false;

  public colorCtr: AbstractControl = new FormControl(null);


  ngOnInit(): void {
    var canvas = <HTMLCanvasElement> document.getElementById("draw");
    var color = this.colorCtr
    var ctx =  canvas.getContext("2d");
    resize();

    // resize canvas when window is resized
    function resize() {
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight - 130;
    }

    // initialize position as 0,0
    var pos = { x: 0, y: 0 };

    // new position from mouse events
    function setPosition(e) {
      pos.x = e.clientX - 15;
      pos.y = e.clientY - 41;
    }

    function draw(e) {
      if (e.buttons !== 1) return; // if mouse is not clicked, do not go further
      ctx.beginPath(); // begin the drawing path

      ctx.lineWidth = 10; // width of line
      ctx.lineCap = "round"; // rounded end cap
      ctx.strokeStyle = color !== undefined ? color.value : '#000000'; // hex color of line

      ctx.moveTo(pos.x, pos.y); // from position
      setPosition(e);
      ctx.lineTo(pos.x, pos.y); // to position

      ctx.stroke(); // draw it!
    }


    // add window event listener to trigger when window is resized
    window.addEventListener("resize", resize);

    // add event listeners to trigger on different mouse events
    document.addEventListener("mousemove", draw);
    document.addEventListener("mousedown", setPosition);
    document.addEventListener("mouseenter", setPosition);
  }

}
