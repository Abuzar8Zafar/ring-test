import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { timer } from 'rxjs';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule ,CommonModule],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomePage {
  public timer: number = 120;
  private subscription: Subscription | any;

  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  colorring1 : any
  colorring2 : any
  colorring3 : any
  colorring4 : any
  colorring5 : any
  colorring6 :any

  background:any

  getpoint : any = []
  constructor() {

    const source = timer(1000, 1000);
    this.subscription = source.subscribe(val => {      
      this.timer--;
      if (this.timer === 0) {
        this.subscription.unsubscribe();
        alert('Timer has ended!'); 
        location.reload(); 
      }
    });
  
  }


  ringbackrount(value :any , points : any , diagram :any){

    if(value == 'ring1'){
      let getpoints = points
      this.getpoint.push({"total" : getpoints})
      console.log(this.getpoint);
      
      this.playAudio()
      this.colorring1 = true
      this.colorring2 = false
      this.colorring3 = false
      this.colorring4 = false
      this.colorring5 = false
      this.colorring6 = false
      alert(points)

    }
    else if(value == 'ring2'){
      this.playAudio()
      let getpoints = points
      this.getpoint.push({"total" : getpoints})
      console.log(this.getpoint);
      this.colorring1 = false
      this.colorring2 = true
      this.colorring3 = false
      this.colorring4 = false
      this.colorring5 = false
      this.colorring6 = false
      alert(points)


    }
    else if(value == 'ring3'){
      this.playAudio()
      let getpoints = points
      this.getpoint.push({"total" : getpoints})
      console.log(this.getpoint);
      this.colorring1 = false
      this.colorring2 = false
      this.colorring3 = true
      this.colorring4 = false
      this.colorring5 = false
      this.colorring6 = false
      alert(points)


    }
    else if(value == 'ring4'){
      this.playAudio()
      let getpoints = points
      this.getpoint.push({"total" : getpoints})
      console.log(this.getpoint);
      this.colorring1 = false
      this.colorring2 = false
      this.colorring3 = false
      this.colorring4 = true
      this.colorring5 = false
      this.colorring6 = false
      alert(points)


    }
    else if(value == 'ring5'){
      this.playAudio()
      let getpoints = points
      this.getpoint.push({"total" : getpoints})
      console.log(this.getpoint);
      this.colorring1 = false
      this.colorring2 = false
      this.colorring3 = false
      this.colorring4 = false
      this.colorring5 = true
      this.colorring6 = false
      alert(points)


    }
    else if(value == 'ring6'){
      this.playAudio()
      let getpoints = points
      this.getpoint.push({"total" : getpoints})
      console.log(this.getpoint);
      this.colorring1 = false
      this.colorring2 = false
      this.colorring3 = false
      this.colorring4 = false
      this.colorring5 = false
      this.colorring6 = true
      alert(points)

    }
  }

  playAudio(){
    this.audioPlayer.nativeElement.play();
  }
}

