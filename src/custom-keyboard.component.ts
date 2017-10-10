import { Component,OnInit } from '@angular/core';
import{CustomKeyboardService } from 'custom-keyboard.service'
import{AppService} from 'providers/appService'
import { Subscription } from 'rxjs';

@Component({
  selector: 'custom-keyboard-component',
  template: `
  <div class="keyboard">
  <input id="input" #inputTextArea [(type)]="inputType" (click)="getCaretPos(inputTextArea)"  (keyup)="getCaretPos(inputTextArea)" [ngModel]="inputstr" style="width:90%;margin-left: 17px;" />
  <br>
  <br>
  <div class="button-group">
    <button *ngFor="let key of keys" class="button" (click)="click(key,inputTextArea)">
      {{key}}
    </button>
  </div>
</div>
`,
 providers:[AppService],
 styleUrls: ['./custom-keyboard.css'],
 host: { '(window:keyup)': 'keyPress($event)' }

})
export class CustomKeyboardComponent implements OnInit{
  subscriptions: Subscription;

  public CapsLock: boolean = false;
  public keys = ["Esc", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "bksp", "7", "8", "9", "Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "Enter", "4", "5", "6", "<--", "z", "x", "c", "v", "b", "n", "m", "-", "-->", "1", "2", "3", "Spacebar", "0", "Enter"];
  public inputstr: string = "";
  public caretPos: number = 0;
  public inputTextArea: any;
  public inputType: string = "";

  constructor(private customKeyboardService:AppService) {
    this.subscriptions = this.customKeyboardService.filterOn('inputType').subscribe(d => {
      if (d.error) {
        console.log(d.error);
      }
      else {
        this.inputType=d.data;
      }
    });
  }
  getRecrods(Json) {
   // this.customKeyboardService.setInputReference().subscribe(value => {
    //   this.inputType = value;
      
    //  });
  }

ngOnInit() {
    this.inputstr = "";
    this.CapsLock = false;
    this.keys = ["Esc", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "bksp", "7", "8", "9", "Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "Enter", "4", "5", "6", "<--", "z", "x", "c", "v", "b", "n", "m", "-", "-->", "1", "2", "3", "Spacebar", "0", "Enter"];
    this.caretPos = 0;
   
    //this.inputType= "";
   
  }

  public keyPress(event) {// keyup
    if (event.keyCode == "27" || event.keyCode == "13") {//Esc=27,Enter=13
      console.log(String.fromCharCode(event.keyCode));
    }
    else if (event.keyCode == "20") {
      this.Caps();
    }
    else if (event.keyCode == "17") {//Ctrl

    }
    else {
      this.inputstr = event.target.value;
    }
  }

  public Caps() {//Caps Lock toggle method..
    if (this.CapsLock) {
      this.CapsLock = !this.CapsLock;
      for (let i = 0; i <= 36; i++) {
        if (i >= 1 && i <= 10) {
          this.keys[i] = this.keys[i].toLowerCase();
        }
        else if (i >= 16 && i <= 24) {
          this.keys[i] = this.keys[i].toLowerCase();
        }
        else if (i >= 30 && i <= 36) {
          this.keys[i] = this.keys[i].toLowerCase();
        }
      }
    }
    else {
      this.CapsLock = !this.CapsLock;
      for (let i = 0; i <= 36; i++) {
        if (i >= 1 && i <= 10) {
          this.keys[i] = this.keys[i].toUpperCase();
        }
        else if (i >= 16 && i <= 24) {
          this.keys[i] = this.keys[i].toUpperCase();
        }
        else if (i >= 30 && i <= 36) {
          this.keys[i] = this.keys[i].toUpperCase();
        }
      }
    }
  }

  public click(item, inputTextArea) {
    this.getCaretPos(inputTextArea);//Get Cursor Position From Text Area
    if (item === "Esc" || item === "Enter") {
      console.log(item);
    }
    else {
      if (item !== "bksp" && item !== "Caps" && item !== "Spacebar" && item !== "-->" && item !== "<--") {
       // console.log('lenth' + this.inputstr.length + 'carsor' + this.caretPos);
        if (this.inputstr.length > this.caretPos) {
          let tempstr = this.inputstr.substring(0, this.caretPos);
          tempstr += item;
          this.inputstr = tempstr + this.inputstr.substring(this.caretPos, this.inputstr.length);
          this.caretPos--;
          this.inputTextArea = inputTextArea;
          this.setSelectionRange(this.caretPos, this.caretPos);
        }
        else if (this.inputstr.length === this.caretPos) {
          this.inputstr += item;
        }
      }
      else if (item === "Spacebar") {
        this.inputstr += " ";
      }
      else if (item === "Caps") {//Caps Lock
        this.Caps();
      }
      else if (item === "-->") {//-->
        this.setSelectionRange(this.caretPos, this.caretPos);//Rigth shift
        //alert('lenth' + this.str.length + 'carsor' + this.caretPos);
      }
      else if (item === "<--") {//<--
        this.caretPos--;
        this.setSelectionRange(this.caretPos, this.caretPos);//Lift Shift
        //alert('lenth' + this.str.length + 'carsor' + this.caretPos);
      }
      else if (item === "bksp") {//bksp
        this.inputstr = this.inputstr.substring(0, this.inputstr.length - 1);
      }
    }
    document.getElementById('input').focus();//input focus...
  }
public getCaretPos(oField) {//Get Cursor Position From Text Area
  this.inputTextArea = oField;
  if (oField.selectionStart || oField.selectionStart == '0') {
    this.caretPos = oField.selectionStart;
  }
}
  public setSelectionRange(selectionStart, selectionEnd) {
    if (this.inputTextArea.setSelectionRange) {
      this.inputTextArea.focus();
      this.inputTextArea.setSelectionRange(selectionStart, selectionEnd);
    }
    else if (this.inputTextArea.createTextRange) {
      var range = this.inputTextArea.createTextRange();
      range.collapse(true);
      range.moveEnd('character', selectionEnd);
      range.moveStart('character', selectionStart);
      range.select();
    }
  }
// inputDefine(inputType){

// }
}
