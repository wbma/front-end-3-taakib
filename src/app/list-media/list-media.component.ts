import {Component, OnInit} from '@angular/core';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {

  printThis: string;
  mediaArray: any;
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(public mediaService: MediaService) {
  }

  ngOnInit() {
    this.printThis = this.mediaService.test;
    this.mediaService.getAllMedia().subscribe(data => {
      console.log(data);
      this.mediaArray = data;

      this.mediaArray.forEach(media => {
        const temp = media.filename.split('.');
        const thumbName = temp[0] + 'tn320.png';
        media.thumbnail = thumbName;
      });
      console.log(this.mediaArray);
    });
  }

}
