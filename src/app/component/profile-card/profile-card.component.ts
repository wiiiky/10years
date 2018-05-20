import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar} from '@angular/material';
import { CoverEditorComponent } from 'app/component/cover-editor/cover-editor.component';
import { FileService } from 'app/service/file.service';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  @ViewChild('coverEditor') coverEditor: CoverEditorComponent;

  data: any = {
    cover: '',
  };

  constructor(private userService: UserService, private fileService: FileService, private snackBar: MatSnackBar) { }

  showCoverEditor = false;
  uploadingCover = false;

  ngOnInit() {
    this.userService.GetUserProfile('').subscribe(data=>this.onGetProfile(data), err=>this.onProfileError());
  }

  onGetProfile(data){
    if(data.cover!=""){
      data.cover = this.fileService.GetFileURL(data.cover);
    }
    if(data.avatar!=""){
      data.avatar = this.fileService.GetFileURL(data.avatar);
    }
    this.data = data;
    this.showCoverEditor = false;
    this.uploadingCover = false;
  }

  onProfileError(){
    this.snackBar.open("网络错误", "确认", {
      duration: 3000,
    });
  }

  onChangeCover(e) {
    if(e.target.files.length<=0){
      return;
    }
    let self = this;
    var img = new Image;
    img.onload = function() {
      if(img.width < 1200 || img.height < 240){
        self.snackBar.open("请上传宽度大于 1200px，高度大于 240px 的封面图片。", "确认", {
          duration: 3000,
        });
        return;
      }
      self.coverEditor.SetImage(img);
      self.showCoverEditor = true;
    }
    img.src = URL.createObjectURL(e.target.files[0]);
    e.target.value = "";
  }

  onCoverEditorSave(img){
    if(this.uploadingCover){
      return;
    }
    this.data.cover = img;
    this.uploadingCover = true;
    this.fileService.UploadDataURL(img).subscribe(data=>this.onCoverUpload(data), err=>this.onCoverUploadError(err));
  }

  onCoverUpload(data){
    this.userService.UpdateUserCover(data.id).subscribe(data=>this.onGetProfile(data), err=>this.onCoverUploadError(err));
    console.debug(data);
  }

  onCoverUploadError(err){
    this.snackBar.open("图片上传失败", "确认", {
      duration: 3000,
    });
    this.uploadingCover = false;
  }

  onCoverEditorCancelled(e){
    this.showCoverEditor = false;
  }
}
