import { Component } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';
  itemArray: string[] = new Array(9).fill('empty');
  winMsg:string = "";
  isCross = false;  // cross nhi h to false

  constructor(){}
  //tie ho jay ya any way reload the game
  reloadGame = ()=>{
    this.winMsg="";
    this.isCross=false;
    this.itemArray=new Array(9).fill("empty");
  }

  handleClick(itemNumber:number)
  {
    if(this.winMsg){
      console.log(this.winMsg);
    }
    if(this.itemArray[itemNumber]==='empty'){ //check position is empty h k nhi  
      this.itemArray[itemNumber] = this.isCross ? 'cross': 'circle';// itemnumber means itemposition , iscross true hoga to cross otherwise circle , at first time 
      this.isCross = !this.isCross;   //
    }
    else{
      console.log('Already Filled');
    }
    this.checkWinner(); //cuz any time on click win the game so this function call every time
    if(!this.itemArray.includes('empty'))
     this.reloadGame()
  }
  checkWinner = ()=>{
    if(this.itemArray[0] === this.itemArray[1] && 
      this.itemArray[0] === this.itemArray[2] && 
      this.itemArray[0] !== 'empty')
    {
      this.winMsg = `$(this.itemArray[0]} won`;
    }
    else if(this.itemArray[3] !== 'empty' && 
    this.itemArray[3] === this.itemArray[4] && 
    this.itemArray[4] === this.itemArray[5])
    {
      this.winMsg = `$(this.itemArray[3]} won`;
    }
    else if(this.itemArray[6] !== 'empty' && 
    this.itemArray[6] === this.itemArray[7] && 
    this.itemArray[7] === this.itemArray[8])
    {
      this.winMsg = `$(this.itemArray[6]} won`;
    }
    else if(this.itemArray[0] != 'empty' && 
    this.itemArray[0] === this.itemArray[3] && 
    this.itemArray[3]=== this.itemArray[6])
    {
      this.winMsg = `$(this.itemArray[0]} won`;
    }
    else if(this.itemArray[1] != 'empty' && 
    this.itemArray[1] === this.itemArray[4] && 
    this.itemArray[4]=== this.itemArray[7])
    {
      this.winMsg = `$(this.itemArray[1]} won`;
    }
    else if(this.itemArray[2] != 'empty' && 
    this.itemArray[2] === this.itemArray[5] && 
    this.itemArray[5]=== this.itemArray[8])
    {
      this.winMsg = `$(this.itemArray[2]} won`;
    }
    else if(this.itemArray[0] != 'empty' && 
    this.itemArray[0] === this.itemArray[4] && 
    this.itemArray[4]=== this.itemArray[8])
    {
      this.winMsg = `$(this.itemArray[0]} won`;
    }
    else if(this.itemArray[2] != 'empty' && 
    this.itemArray[2] === this.itemArray[4] && 
    this.itemArray[4]=== this.itemArray[6])
    {
      this.winMsg = `$(this.itemArray[2]} won`;
    }
  }
}
