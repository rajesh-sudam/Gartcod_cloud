import { Component ,OnInit,OnDestroy} from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  private countdown:any;
  remainingTime:string=' ';
  remainingdays: string='';
  remaininghours: string='';
  remainingmin: string='';
  remainingsec:string=' ';
  textColor: string = 'rgb(255, 255, 143)'; 
  iconColor: string = 'rgb(210, 156, 156)'; 
  iconSize: number = 80;
  currentIcon: string = 'desktop';
  ngOnInit() {
    this.changeColors();

    const targetDate = moment().add(28, 'days').add(14, 'hours').add(48, 'minutes').add(20, 'seconds');

    this.countdown = setInterval(() => {
      const now = moment();
      const duration = moment.duration(targetDate.diff(now));

      this.remainingTime = `${duration.days()} ${duration.hours()} ${duration.minutes()} ${duration.seconds()}`;
      this.remainingdays = `${duration.days()}`;
      this.remaininghours=`${duration.hours()}`;
      this.remainingmin=`${duration.minutes()}`;
      this.remainingsec= `${duration.seconds()}`;

      if (duration.asMilliseconds() <= 0) {
        this.remainingTime = 'Timer expired!';
        clearInterval(this.countdown);
      }
    }, 1000);
  }

  changeColors(){
    const icons = ['desktop', 'mobile', 'chrome'];
    const textColors = ['rgb(211, 211, 211)','rgb(255, 182, 193)', 'rgb(255, 255, 143)'];
    let currentIndex = 0;

    setInterval(() => {
      this.currentIcon = icons[currentIndex];
      this.textColor = textColors[currentIndex];
      currentIndex = (currentIndex + 1) % textColors.length;
    }, 3000); 
  }
  

  ngOnDestroy() {
    clearInterval(this.countdown);
  }
}
