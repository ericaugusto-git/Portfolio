import { AfterViewInit, Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import LocalEchoController from 'local-echo';


@Component({
  selector: 'app-cmd',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './cmd.component.html',
  styleUrls: ['./cmd.component.css', '../../../node_modules/xterm/css/xterm.css']
})
export class CmdComponent implements OnInit,AfterViewInit, OnChanges {
  term = new Terminal();
  localEcho = new LocalEchoController();
  matrix = false;

  @ViewChild("terminal") terminal: ElementRef;
  @Output() onMatrix: EventEmitter<any> = new EventEmitter();

  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  ngAfterViewInit(): void {
    this.term.open(this.terminal.nativeElement)
    const fitAddon = new FitAddon();
    this.term.loadAddon(fitAddon);
    fitAddon.fit();
    this.term.loadAddon(this.localEcho);
    this.term.setOption('cursorBlink', true);
    this.term.setOption('fontWeight', '900');
    this.term.setOption('fontFamily', `'Fira Mono', monospace`);
    // this.term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
    // Auto-completes common commands
    this.echo()

    function autocompleteCommonCommands(index, tokens) {
      if (index == 0) return ["clear", "matrix", "ls", "chown"];
      return [];
    }
    this.localEcho.addAutocompleteHandler(autocompleteCommonCommands);
}

echo(){
  this.localEcho.read("~$ ")
  .then(input => {
    if(input == "clear"){
      this.term.clear()
    }
    else if(input == "matrix"){
      this.matrix = !this.matrix;
      this.onMatrix.emit(this.matrix)
    }
    this.echo()
  })
  .catch(error => this.term.writeln(`Error reading: ${error}`));
}
  ngOnInit() {
  }
}
