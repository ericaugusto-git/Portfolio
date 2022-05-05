import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css', '../../assets/bootstrap.min.css']
})
export class DesktopComponet implements OnInit{
  start = false
  @ViewChild("start_menu") start_menu: ElementRef;
  @ViewChild("start_btn") start_btn: ElementRef;
  matrix = false;
  time = new Date().toLocaleString();
  constructor () {}
  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date().toLocaleString();
    }, 1000)
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.start_menu){
      if(this.start_menu.nativeElement.contains(event.target) || this.start_btn.nativeElement.contains(event.target)) {
        console.log("inside")
      } else {
        this.start = false;
      }
    }
  }

  whenStart(){
    this.start = !this.start;
  }

  openLink(url: any){
    window.open(url, '_blank');
  }

  theMatrix(){
    const canvas = document.createElement("canvas");
    document.getElementById("canvas").append(canvas);
    const ctx = canvas.getContext("2d");

    let w = 0;
    let h = 0;
    let cols = 0;
    let ypos = [];
    const setCanvasSize = () => {
      w = canvas.width = document.body.offsetWidth;
      h = canvas.height = document.body.offsetHeight - 8;
      cols = Math.floor(w / 20) + 1;
      ypos = Array(cols).fill(0);
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    ctx.fillStyle = "transparent";
    ctx.fillRect(0, 0, w, h);

    const randBool = (n) => (Math.random() > n ? true : false);

    function matrix() {
      ctx.fillStyle = "#0001";
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = "#0f0";
      ctx.font = "15pt monospace";

      ypos.forEach((y, ind) => {
        const x = ind * 20;
        ctx.fillText(
          randBool(0.9)
            ? "🎸"
            : randBool(0.9)
            ? "🐵"
            : String.fromCharCode(Math.random() * 128),
          x,
          y
        );
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 20;
      });
    }

    setInterval(matrix, 50);
  }
  onMatrix(event){
    this.matrix = event;
    setTimeout(() => this.theMatrix(), 150)
  }

  shutdown(){
  }
}
