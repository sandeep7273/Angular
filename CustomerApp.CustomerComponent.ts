import { Component, Injector } from '@angular/core';
import{Customer} from "./CustomerApp.model"
import { BaseLogger } from '../Utility/CustomerApp.Loggger';
@Component({
  templateUrl: './CustomerApp.CustomerView.html',
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel : Customer = new Customer();
  CustomerModels :Array<Customer> = new Array<Customer>();
  LogObj : BaseLogger = null;
  constructor(_injector:Injector){
    this.LogObj=_injector.get("1");
    this.LogObj.Log();
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
