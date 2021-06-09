import { Component, OnInit  ,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent implements OnInit {

  @ViewChild('setText') setText :ElementRef 
  @ViewChild('textCon') divCont : ElementRef
  @ViewChild('textArea') textArea:ElementRef
  @ViewChild('cenzor') cenzor : ElementRef
  pushValue = [];
  myValue;
  createArrayForCheck;
  indexVal:string;
  joinArray:any[];
  
  constructor() { }
  ngOnInit(): void {
    
  }
  getAdd():void{
  if(this.myValue == undefined){
    this.setText.nativeElement.style.border = '1px solid red'
    this.setText.nativeElement.placeholder = 'Please write a word'
  }
  else{
    this.setText.nativeElement.style.border = '1px solid grey'
    this.pushValue.push(this.myValue)
    this.divCont.nativeElement.textContent += this.myValue + " "
    this.myValue = ''
    
    
  }
    
  }


  resetValue():void{
    this.myValue = ''
    this.pushValue = []
    this.divCont.nativeElement.textContent = ""
  }
  
  getCenzor():void{

    this.createArrayForCheck = this.textArea.nativeElement.value.split(' ')
    console.log(this.createArrayForCheck);
    
    if(this.textArea.nativeElement.value == ''){
      this.textArea.nativeElement.style.border = '1px solid red'
      this.textArea.nativeElement.placeholder = 'Please write a text!'
      
    }
    else{
      for(let str of this.createArrayForCheck){
        if(this.pushValue.indexOf(str)!= -1){
          this.indexVal = this.createArrayForCheck.indexOf(str);
          str = "*".repeat(str.length)
          this.createArrayForCheck[this.indexVal] = str
          console.log(str);
          this.joinArray = this.createArrayForCheck.join(" ")
          console.log(this.joinArray);
          this.textArea.nativeElement.value = this.joinArray
          this.textArea.nativeElement.textContent = this.textArea.nativeElement.value
          this.textArea.nativeElement.style.border = '1px solid grey'
        }
    }
    
      
    }
  }
}
