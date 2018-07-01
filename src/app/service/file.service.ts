import { Injectable } from '@angular/core';
import { HttpService } from 'app/service/http.service';
import { APIConfig } from 'app/app.config'

@Injectable()
export class FileService {

  constructor(private http:HttpService) { }

  GetFileURL(id) {
    return APIConfig.HOST + APIConfig.PATH_FILE + "/" + id + '?_s=' + APIConfig.SOURCE;
  }

  dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
  }

  UploadDataURL(dataURL) {
    let url = APIConfig.HOST + APIConfig.PATH_FILE;
    let formData = new FormData();
    let file = this.dataURLtoFile(dataURL, "filename");
    formData.append("file", file);
    return this.http.post(url, formData);
  }

}
