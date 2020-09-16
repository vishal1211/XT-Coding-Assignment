import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {


  jsonData = {
    "nodeOne": "John Doe",
    "nodeTwo": "05/06/2020",
    "nodeThree": 777,
    "nodeFour": [
      { "elementOne": "B Street" },
      { "elementTwo": "City" },
      { "elementThree": "Area - 591323" },
      {
        "elementFour": [
          { "elementFive": "06/07/2020" },
          { "elementSix": 123 }
        ]
      }
    ],
    "nodeFour1": [
      { "elementOne": "B Street" },
      { "elementTwo": "City" },
      { "elementThree": "Area - 591323" },
      {
        "elementFour": [
          { "elementFive": "06/07/2020" },
          { "elementSix": 123 }
        ]
      }
    ]
  };

 nestedArray:any;
  constructor() {

    console.log(Object.keys(this.jsonData));
   
    // for(let i=0;)

  }

  ngOnInit(): void {
  }


  getLabel(label) {
 
    return label.replace(/([a-z])([A-Z])/g, '$1 $2');
  }


  checkDataType(list){
// console.log(typeof list =="object" )
    return typeof list;
  }

  nestedTable(list){
    console.log(list);
  }
  
}
