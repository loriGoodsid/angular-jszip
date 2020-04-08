import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import JSZip = require('jszip');

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'JsZip Test';
  files : File[];

  ngOnInit(){
  }


  onSelectFile(event:any) {
    console.log(event.target.files);
    this.files = event.target.files;
  }

  downloadZip(){
    const jszip = new JSZip();
    for(let file of this.files) {
      jszip.file(`${file.name}`, file);
    }

    jszip.generateAsync({ type: 'blob' }).then(function(content) {
          saveAs(content, 'jsZipExample.zip');
    });
  }
}
