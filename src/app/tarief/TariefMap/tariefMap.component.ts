import { Component } from '@angular/core';
import {AgmCoreModule} from "@agm/core"
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Marker } from '@agm/core/services/google-maps-types';
import { TariefService, IParkeertariefInfo } from '../../services/parkeertarief.service';

//API used: https://angular-maps.com/guides/getting-started/#setting-up-angular-google-maps
//Google site: https://developers.google.com/maps/documentation/javascript/importing_data

@Component({
selector: 'app-tariefmap',
templateUrl: './tariefMap.component.html',
styleUrls: ['./tariefMap.component.scss']
}) 


export class TariefMapComponent implements OnInit{
    
    Tarieven : IParkeertariefInfo;
    private position;
    lat: number =  51.2194475;
    lng: number =  4.4024643;
    location : any;
    icon = "/assets/location.png";

    polygonPunten : polygon[];


    constructor(private _svc : TariefService) { }
    

    lines : any[][];
    data: any[];

    ngOnInit() {
        if(navigator.geolocation)
        {   
            navigator.geolocation.getCurrentPosition(position =>
            {
               this.location = position.coords;
               this.lat = position.coords.latitude;
               this.lng = position.coords.longitude;
               console.log(position.coords); 
               console.log(this.lat);
               console.log(this.lng);
            });
        }
        this._svc.getTarief()
        .subscribe(result => this.extractData(result));
    
}
  

    extractData(result : IParkeertariefInfo){
        if (result!=null)
        {
         //   console.log(result);
            this.data = result.data;

            let linelenght = 0;
            for(var i = 0; i < result.data.length; i++)
            {
                result.data[i].geometry2.coordinates.forEach(lines => linelenght += lines.length) //multiple lines in one coordinates[]
            }
            this.lines = new Array(linelenght);

            this.polygonPunten = new Array(result.data.length);

            for(var i = 0; i < result.data.length; i++)
            {
                let polygon : punt[];
                polygon = new Array(result.data[i].geometry2.coordinates[0].length);
                for(var j = 0; j < result.data[i].geometry2.coordinates[0].length; j++)
                {
                    polygon[j] =
                    ({
                        lat : result.data[i].geometry2.coordinates[0][j][1],
                        lng : result.data[i].geometry2.coordinates[0][j][0],
                                                
                    })

                }

                this.polygonPunten[i] = ({

                    punten : polygon,
                    fillColor : result.data[i].kleur
                })
                    
                         
            }
          //  console.log(this.polygonPunten);
            
        } 
    
  
    }
}


export interface punt{
    lat: number;
    lng: number;
}

export interface polygon{
    punten : punt[]
    fillColor : string

}
