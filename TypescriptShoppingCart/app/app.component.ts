import {Component,ChangeDetectionStrategy, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators} from 'angular2/common';
import { MyFilterPipe } from './test/filter-pipe';

class ContactInfo {
constructor(
    public code:string,
    public name:string,
    public description:string,
    public price:number
    
    ) { }
}


class ContactInfoCart {
constructor(
    public code:string,
    public name:string,
    public description:string,
    public price:number,
    public quantity: number
    
    ) { }
}

@Component({
	selector: 'my-app',
	templateUrl: 'mytemplate.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES] 
  pipes: [ MyFilterPipe ],
  events: ['FruitChange'],
})
export class AppComponent { 
  title = 'Angular App';
  name = "Fotis";
  lastName = "Karalis";
  myTitle = 'Web Developer';
  pageid =1;
  filterList = {name: 'A'};
  FruitChange = new EventEmitter();
  information = [      
   new ContactInfo("APL", "Apple", "Eat one every day to keep the doctor away!", 12),
        new ContactInfo("AVC", "Avocado", "Guacamole anyone?", 16),
        new ContactInfo("BAN", "Banana", "These are rich in Potassium and easy to peel.", 4),
        new ContactInfo("CTP", "Cantaloupe", "Delicious and refreshing.", 3),
        new ContactInfo("FIG", "Fig", "OK, not that nutritious, but sooo good!", 10),
        new ContactInfo("GRF", "Grapefruit", "Pink or red, always healthy and delicious.", 11),
        new ContactInfo("GRP", "Grape", "Wine is great, but grapes are even better.", 8),
        new ContactInfo("GUA", "Guava", "Exotic, fragrant, tasty!", 8),
        new ContactInfo("KIW", "Kiwi", "These come from New Zealand.", 14),
        new ContactInfo("LYC", "Lychee", "Unusual and highly addictive!", 18),
        new ContactInfo("MAN", "Mango", "Messy to eat, but well worth it.", 8),
        new ContactInfo("ORG", "Orange", "Vitamin C anyone? Go ahead, make some juice.", 9),
        new ContactInfo("PAP", "Papaya", "Super-popular for breakfast.", 5),
        new ContactInfo("PCH", "Peach", "Add some cream and enjoy.", 19),
        new ContactInfo("PER", "Pear", "Delicious fresh, or cooked in red wine, or distilled.", 8),
        new ContactInfo("PMG", "Pomegranate", "Delicious, healthy, beautiful, and sophisticated!", 19),
        new ContactInfo("PNP", "Pineapple", "Enjoy it (but don't forget to peel first).", 4),
        new ContactInfo("PSM", "Persimmon", "Believe it or not, they are berries!", 6),
        new ContactInfo("STR", "Strawberry", "Beautiful, healthy, and delicious.", 7),
        new ContactInfo("TNG", "Tangerine", "Easier to peel than oranges!", 8),
        new ContactInfo("WML", "Watermelon", "Nothing comes close on those hot summer days.", 4)
  ];

  
  productlist=true;
  confirmOrder=false;
  checkout=false;
 
  CartItems =[];

  myInfo = this.information[0];
  
  addInfo(newInfo:string) {
    if (newInfo) {
        this.information.push(new ContactInfo(newInfo));
    }
  }


clearCart(){
  if (confirm('Do you want to clear Cart?')) { 
    this.CartItems = [];
    this.showProductlist();    
  }

}

showCheckout(){
  this.checkout=true;
  this.productlist=false;
  this.confirmOrder=false;
}

showConfirmOrder(){
  this.orderNo +=1;
  this.checkout=false;
  this.productlist=false;
  this.confirmOrder=true;
}


goProductList(){
   this.CartItems = [];
    this.showProductlist();    
}

orderValue(){
  totalValue=0;
    for (var i = 0; i < this.CartItems.length; i++) {
       totalValue +=  this.CartItems[i].quantity  * this.CartItems[i].price;
    }

  return totalValue;
}


orderItemsCount(){
  totalItems=0;
    for (var i = 0; i < this.CartItems.length; i++) {
       totalItems +=  this.CartItems[i].quantity  ;
    }

  return totalItems;
}

orderNo=201603001;

query='';


showProductlist(){
  this.productlist=true;
  this.checkout=false;
  this.confirmOrder=false;
}

addCart(additem:information,quantity: number) {
    var found = false;

    for (var i = 0; i < this.CartItems.length && !found; i++) {
        var item = this.CartItems[i];
        if(item.code == additem.code)
        {
          this.CartItems[i].quantity  = this.CartItems[i].quantity + 1;
          found =true;
          return;
        }
    }

   if (!found) {
    this.CartItems.push(new ContactInfoCart(additem.code,additem.name,additem.description,additem.price,quantity));
    }
}


RemoveCart(item:information,quantity: number) {
debugger;
  //  var found = false;
    console.log(item);
 var index = this.CartItems.indexOf(item);
  if (index === -1) {
    return;
  }
  this.CartItems.splice(index,1);
 
}





/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/``