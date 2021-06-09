import { Component, OnInit,  ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-countlist',
  templateUrl: './countlist.component.html',
  styleUrls: ['./countlist.component.css']
})
export class CountlistComponent implements OnInit {
 
  @ViewChild('changeBox') changeBox :ElementRef
  @ViewChild('inputAdd') inputAdd:ElementRef 
  @ViewChild('list') list:ElementRef
  iterator;
  length
  checkMe;
  showSecret = false;
  editIndex;
  setName;
  messege;
  elem;
  myObj;
  array=[]
    constructor() { }
  
    ngOnInit(): void {
      
    }
    addMessege(): void {
      if (this.messege) {
        this.myObj = {
          name: this.messege
        }
      this.length = this.array.length + 1 
      this.array.push(this.messege)
      this.messege=''
      }
    }
 
    checkMyBox(index):void{
      
      if(this.changeBox.nativeElement.checked == true){
        this.checkMe = true
      }
      else{
        this.checkMe = false
      }
      
    }
    editBtn(index):void{
      this.showSecret = true
      this.editIndex = index
    }
    deleteUser(index:number):void{
      this.array.splice(index,1)
      this.length = this.array.length 
      
    }
    getSave():void{
      this.myObj = {
        name:this.setName
     }
      for (this.iterator in this.array[this.editIndex]) {}
      this.array[this.editIndex] = this.setName
      console.log(this.messege);
      this.showSecret = false
      
    }
}
