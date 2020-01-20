import { Component, OnInit } from '@angular/core';
// import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormsModule } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
@Component({
  selector: 'app-content-conversation',
  templateUrl: './content-conversation.component.html',
  styleUrls: ['./content-conversation.component.scss']
})
export class ContentConversationComponent implements OnInit {
  weblink = true;
  file = true;
  video = true;
  fileData : any;
  FormData : any;
  regexp: any;

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log('cliked');
    if(form.value.optradio === 'web_link' || 'video') {
      if(this.is_url(form.value.weblink_url)) {
        console.log('data ready to send');
      }
    }
    if(form.value.optradio === 'file') {
      if(this.checkFileTypeService(this.file)) {
        console.log('file ready to send');
      }
    }
    form.reset();
  }
  handleFileUpload(files,cat) {
    this.fileData = files.item(0);
    this.file = this.fileData.name;

}
radioClicked(option) {
  if(option === 'file') {
    this.weblink = false;
    this.video = false;
    this.file = true;


  }
  if(option === 'weblink') {
    this.weblink = true;
    this.video = false;
    this.file = false;

  }
  if(option === 'video') {
    this.weblink = false;
    this.video = true;
    this.file = false;

  }

}
is_url(str)
{
  this.regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (this.regexp.test(str))
        {
          return true;
        }
        else
        {
          return false;
        }
}
checkFileTypeService(fileD){
  var fName = fileD;
  var allowedFileTypes = ['pptx', 'csv', 'xlsx', 'txt', 'docx', 'pdf'];
  var fNameSplit = fName.split('.');
  if (allowedFileTypes.includes(fNameSplit[fNameSplit.length-1])){
    return true
  }
  else{
    return false
  }
}
 }
 
 