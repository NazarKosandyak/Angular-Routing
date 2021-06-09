import { Component, OnInit ,ElementRef,Renderer2} from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  setName:string;
  setPass:any;
  setEmail:any;
  RegExForName = /^[a-zA-Z]{4,16}\b$/i;
  RegExpforPass = /.*(\w{4,16}[-_]?)/;
  RegExpforEmail = /(\w+\.?\w+\.?\w+@{1}\w+\.\w+)/
  RegTestName;
  RegTestPass;
  RegTestEmail;
  count:number = 1
  isVisible:boolean;
  isHiden:boolean = true
  myObj:object;
  array = [];
  editIndex;
  constructor(private renderer :Renderer2,private el:ElementRef) { }

  ngOnInit(): void { 
    
    
  }
  addUser():void{
    this.RegTestName = this.RegExForName.exec(this.setName)
    this.RegTestPass = this.RegExpforPass.exec(this.setPass)
    this.RegTestEmail = this.RegExpforEmail.exec(this.setEmail)
    if( this.RegTestName != null && this.RegTestPass != null && this.RegTestEmail !=null ){
      this.myObj = {
        id:this.count,
        name:this.setName,
        pass:this.setPass,
        email:this.setEmail
      }
      this.count++
      this.array.push(this.myObj)
      for (const iterator of this.array) {
        console.log(iterator);
      }
      
    }
    else{
      alert('Переконайся у правильності вводу')
    }
    this.setName = ''
    this.setPass = ''
    this.setEmail = ''
    this.isVisible = false
   

  }
  deleteUser(index:number):void{
    this.array.splice(index,1)
    this.count--
  }
  editUser(index:number):void{
    for (const key in this.array[index]) {}
    this.setName = this.array[index].name
    this.setPass = this.array[index].pass
    this.setEmail = this.array[index].email
    this.isVisible = true
    this.isHiden = false
    this.editIndex = index
  }
  saveEdit():void{
    this.myObj = {
      id:this.count,
      name:this.setName,
      pass:this.setPass,
      email:this.setEmail
    }
    this.RegTestName = this.RegExForName.exec(this.setName)
    this.RegTestPass = this.RegExpforPass.exec(this.setPass)
    this.RegTestEmail = this.RegExpforEmail.exec(this.setEmail)
    if( this.RegTestName != null && this.RegTestPass != null && this.RegTestEmail !=null ){
      console.log(this.array[this.editIndex]);
      this.array[this.editIndex].name = this.setName
      this.array[this.editIndex].pass = this.setPass
      this.array[this.editIndex].email = this.setEmail
      this.isVisible = false
      this.isHiden = true
      this.setName = ''
      this.setPass = ''
      this.setEmail = ''
    }
    else{
      alert('Переконайся у правильності вводу')
    }
 
    
  }
}
