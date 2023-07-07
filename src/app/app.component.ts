import { Component } from '@angular/core';
import * as worldMapData from './worldMap.json';
import { Maps, Marker } from '@syncfusion/ej2-angular-maps';
Maps.Inject(Marker);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';

  public markerData: object[] = [
    { Name:"Tokyo", Latitude:35.6894875, Longitude:139.6917064, Population:33200000, Color:"red", Shape:"Pentagon" },
    { Name:"New York", Latitude:40.7127753, Longitude:-74.0059728, Population:17800000, Color:"green",Shape:"Diamond" },
    { Name:"Sao Paulo", Latitude:-23.5505199, Longitude:-46.6333094, Population:17700000, Color:"orange",Shape:"InvertedTriangle" },
    { Name:"Seoul/Incheon", Latitude:37.566535, Longitude:126.9779692, Population:17500000, Color:"red",Shape:"Pentagon"},
    { Name:"Mexico City", Latitude:19.2464696, Longitude:-99.1013498, Population:17400000, Color:"green",Shape:"Diamond"},
    { Name:"Osaka/Kobe/Kyoto", Latitude:35.0212466, Longitude:135.7555968, Population:16425000, Color:"red",Shape:"Pentagon" },
    { Name:"Manila", Latitude:14.5995124, Longitude:120.9842195, Population:14750000, Color:"red",Shape:"Pentagon" },
    { Name:"Jakarta", Latitude:-6.17511, Longitude:106.8650395, Population:14250000, Color:"red",Shape:"Pentagon" },
    { Name:"Lagos", Latitude:6.5243793, Longitude:3.3792057, Population:13400000, Color:"blue",Shape:"Rectangle" },
    { Name:"Cairo", Latitude:30.0444196, Longitude:31.2357116, Population:12200000, Color:"blue",Shape:"Rectangle" },
    { Name:"Los Angeles", Latitude:34.0522265, Longitude:-118.2436596, Population:11789000, Color:"green",Shape:"Diamond" },
    { Name:"Buenos Aires", Latitude:-34.6036844, Longitude:-58.3815591, Population:11200000, Color:"orange",Shape:"InvertedTriangle" },
    { Name:"Rio de Janeiro", Latitude:-22.9068467, Longitude:-43.1728965, Population:10800000,Color:"orange",Shape:"InvertedTriangle" },
    { Name:"Moscow", Latitude:55.755826, Longitude:37.6173, Population:10500000, Color:"yellow", Shape:"Triangle" },
    { Name:"Shanghai", Latitude:31.2303904, Longitude:121.4737021, Population:10000000, Color:"red",Shape:"Pentagon" },
    { Name:"Karachi", Latitude:25.0700428, Longitude:67.2847875, Population:9800000, Color:"red",Shape:"Pentagon"},
    { Name:"Paris", Latitude:48.856614, Longitude:2.3522219, Population:9645000, Color:"yellow", Shape:"Triangle" },
    { Name:"Istanbul", Latitude:41.0082376, Longitude:28.9783589, Population:9000000, Color:"yellow",Shape:"Triangle" },
    { Name:"Nagoya", Latitude:35.1814464, Longitude:136.906398, Population:9000000, Color:"red",Shape:"Pentagon" },
    { Name:"Beijing", Latitude:39.9041999, Longitude:116.4073963, Population:8614000, Color:"red",Shape:"Pentagon" },
    { Name:"Chicago", Latitude:41.8781136, Longitude:-87.6297982, Population:8308000, Color:"green",Shape:"Diamond"},
    { Name:"London", Latitude:51.5073509, Longitude:-0.1277583, Population:8278000, Color:"yellow", Shape:"Triangle" }
  ]

  public citiesInIndia = [
    { Name:"Mumbai", Latitude:19.0759837, Longitude:72.8776559, Population:14350000, Color:"red",Shape:"Pentagon" },
    { Name:"Delhi", Latitude:28.6139391, Longitude:77.2090212, Population:14300000, Color:"red",Shape:"Pentagon" },
    { Name:"Kolkata", Latitude:22.572646, Longitude:88.363895, Population:12700000, Color:"red",Shape:"Pentagon" }
  ]

  public titleSettings: object = {
    text: 'Top 15 populated cities in the world'
  }

  public layerOptions: object[] = [{
    shapeData: worldMapData,
    shapeSettings: {
      fill: '#E5E5E5'
    },
    markerSettings:[
      {
        visible: true,
        dataSource: this.markerData,
      },
      {
        visible: true,
        dataSource: this.citiesInIndia,
        template: '<div style="color:red;font-size:11px">${Name}</div>',
        // shape: 'Pentagon',
        // height: 20,
        // width: 20
      }
    ],
    markerClusterSettings:{
      allowClustering: true,
      shape: 'Circle',
      height: 20,
      width: 20,
      allowClusterExpand: true,
      connectorLineSettings: { color:'Orange', width: 3},
      labelStyle: { color: 'White' },
      fill: 'Blue'
    }
  }]
}
