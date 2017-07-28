import { Injectable } from '@angular/core';
import { Dress } from './Dress';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GetdressService {
 //user = 'keephopealive';
 //private url = `https://api.github.com/users/${this.user}`;
  url = '';
  dress: Dress = new Dress();
  thedress;
  constructor(private _http: Http) { }
  retrieveDresses() {
    this.url = `http://api.shopstyle.com/api/v2/products?pid=uid7225-39667915-4&format=json&cat=dresses`;
    this.thedress = {"products":
      [{"id":656260776,
        "name":"Women's Topshop Spot Peplum Midi Dress",
        "brandedName":"Topshop Women's Spot Peplum Midi Dress",
        "currency":"USD",
        "price":130.0,
        "priceLabel":"$130",
        "salePrice":84.9,
        "description":"Show off sun-kissed skin but keep it classy in this retro-dot peplum dress with a midriff cutout, plunging neck and sassy slit skirt. Brand: TOPSHOP. Style Name:Topshop Spot Peplum Midi Dress.",
        "image": {"sizes": {"XLarge": {"url": "https://img.shopstyle-cdn.com/pim/1b/6a/1b6a0776072c8fce3142d5b29b8370a1_xlarge.jpg"}}}
    },
      {
        "id":655439033,
        "name":"Women's Eliza J Ruffle Sleeve Sheath Dress",
        "brandedName":"Eliza J Women's Ruffle Sleeve Sheath Dress",
        "currency":"USD",
        "price":130.0,
        "priceLabel":"$130",
        "salePrice":84.9,
        "description":"Show off sun-kissed skin but keep it classy in this retro-dot peplum dress with a midriff cutout, plunging neck and sassy slit skirt. Brand: TOPSHOP. Style Name:Topshop Spot Peplum Midi Dress.",
        "image": {"sizes": {"XLarge": {"url": "https://img.shopstyle-cdn.com/pim/1b/6a/1b6a0776072c8fce3142d5b29b8370a1_xlarge.jpg"}}}        
      }]};
    console.log(this.url);
   return this._http.get(this.url).map(data=>data.json()).toPromise();

    /*var bubbles = this._http.get(this.url).map(data=>data.json()).toPromise();
    bubbles.then((data) => {
       // console.log("In dressservice", data.products[0].brandedName);
        for( var i = 0; i< data.products.length; i++){
        this.dress.name = data.products[i].brandedName;
        console.log("this.dress.name", this.dress.name);
        this.dress.description = data.products[i].description;
        this.dress.originalprice = data.products[i].priceLabel;
        this.dress.rentalprice = (.50 * data.products[i].description);
        this.dress.image = data.products[i].image.sizes.XLarge.url;
       // return this._http.
      // this._http.post('/dressinfo',data).map(data=>data.json()).toPromise();
       this._http.post('/dressinfo',{this.dress.name: data.products[i].brandedName }).map(data=>data.json()).toPromise();
      }
    })
      return bubbles;*/
  }

  retrieveAllDresses(){
    console.log("get all dresses from getdress.service.ts")
   return this._http.get("/getallthedress").map(data=>data.json()).toPromise();
  }

  findingtheDress(thatdress, dressId){

    return this._http.post("/gettingthedress", {thatdress: thatdress, dressId: dressId}).map(data=>data.json()).toPromise();
    
  }

  getSingleDress(dressId){
    console.log("in getdress.service getting single dress", dressId)
    return this._http.post("/gettingsingledress", {dressId: dressId}).map(data=>data.json()).toPromise();


  }

  // filterDress(search) {
  //    return this._http.post('/dress/search', search).map(data => data.json()).toPromise();
  //  }


 }
