import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class CounterService{

    private timer:any;
    private val: any;
    private minute: any;
    private second: any;
     
    constructor(private http: Http) {}
    getCounter(timer)
    {
        this.minute = Math.floor(timer / 60);
        this.second = '00' + (timer % 60);
        this.val = this.minute + ':' + this.second.substring(this.second.length - 2);
        return this.val;       
    }
    getSeconds(stopTime)
    {
        let min, sec;
        min = parseInt(stopTime.substr(0, stopTime.indexOf(':')));
        sec = parseInt(stopTime.substr(stopTime.indexOf(":") + 1));
        return stopTime =  (min * 60) + sec;
    }
}
