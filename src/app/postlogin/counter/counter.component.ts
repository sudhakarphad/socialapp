import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CounterService } from '../../_services/counter.service';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css'],
    providers: [CounterService]
})

export class CounterComponent implements OnInit {
   
    private countDown:any; 
    constructor(private router: Router,private CounterService: CounterService) {}
    
    private interv;
    private stopTime;
    private min;
    private sec;
    public okAlert:string;
    public timer;

    ngOnInit(): void { 
        
        this.timer = 600;      
        this.interv = setInterval(() => { 
            this.countDown = this.CounterService.getCounter(this.timer);
            if (this.countDown =="0:00"){
                clearInterval(this.interv);
                this.okAlert="Done!";
            }
            // console.log( this.countDown );
            this.timer--;}, 1000);

    }

    stopTimer(stopTime)
    {
        this.timer = this.CounterService.getSeconds(stopTime);
        console.log("Stop pressed");
        clearInterval(this.interv);
    }

    changeTimerState(countDown)
    {
        let nowTimer;
        nowTimer = this.CounterService.getSeconds(countDown);
        
        if (nowTimer <= this.timer){
       
        clearInterval(this.interv);
        this.timer--;
        this.interv = setInterval(() => {
            this.countDown = this.CounterService.getCounter(this.timer);
            if (this.countDown == "0:00") {clearInterval(this.interv);this.okAlert = "Done!"; }
            console.log(this.countDown);
            this.timer--;
        }, 1000);
            console.log("running..");
        }
        else{
            console.log("timer Stopped.!");
            clearInterval(this.interv);
            this.timer++
        }
    }

  
}
