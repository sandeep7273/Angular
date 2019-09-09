import { Component, Injector } from '@angular/core';
import{Customer} from "./CustomerApp.model"
import { BaseLogger } from '../Utility/CustomerApp.Loggger';
import{ HttpClient} from "@angular/common/http"
@Component({
  templateUrl: './CustomerApp.CustomerView.html',
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel : Customer = new Customer();
  CustomerModels :Array<Customer> = new Array<Customer>();
  LogObj : BaseLogger = null;
  constructor(_injector:Injector, public http:HttpClient){
    this.LogObj=_injector.get("1");
    this.LogObj.Log();
  }
  PostToServer(){
    var custdto:any ={};
    custdto.CustomerCode = this.CustomerModel.CustomerCode;
    custdto.CustomerName = this.CustomerModel.CustomerName;
    custdto.CustomerAmount = this.CustomerModel.CustomerAmount;

    this.http.post("http://localhost:3000/Customers", 
    custdto)
    .subscribe(res=>this.Success(res), res=>this.Error(res));
  }

  // GetFromServer(){
  //   this.http.get("http://localhost:3000/Customers")
  //   .subscribe(res=>this.SuccessGet(res), res=>this.Error(res));
  // }

  Error(res) {
    console.debug(res.json());
  }
  // Success(res) {
  //   this.GetFromServer();
  // }
  Success(res) {
    this.CustomerModels = res.json();
  }

  SelectCustomer(_Selected:Customer){
    this.CustomerModel= _Selected
  }
  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();// clear UI  
  }


  hasError(typeOfValidator: string, controlName:string) : boolean {
    return this.CustomerModel.formCustomerGroup.controls[controlName].hasError(typeOfValidator);
  }
  
}
