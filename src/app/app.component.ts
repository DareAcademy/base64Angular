import { Component, ElementRef, ViewChild } from '@angular/core';
import { category } from './data/category';
import { categoryService } from './servicies/categoryService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url:any='';

  @ViewChild('txtId') txtId!:ElementRef;

  constructor(private CategoryService:categoryService) { }

  onFileSelected(file:any){
    debugger

    let reader=new FileReader();
    reader.readAsDataURL(file.target.files[0])
    reader.onload=(_event)=>{
      this.url=reader.result
    }
  }

  onSave(){
    debugger
  var obj=new category();
  obj.image=this.url;


  this.CategoryService.Insert(obj).subscribe((x:any)=>{
      console.log("done")
    })
 
}

getFile(){

    
  this.CategoryService.getImage(parseInt(this.txtId.nativeElement.value)).subscribe(res=>{
    console.log(res.data)
    this.url=res.data
  
    // var a = document.createElement('a');
    // debugger
    // //let x=res.data.replace("data:image/jpeg;base64," , "")
    // const blob = new Blob([res.data], {type: 'image/png'});
    // a.href = this.url;
    // a.download = res.name;
    // a.click(); 

  })
}
}
