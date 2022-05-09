import { Component } from '@angular/core';

@Component ({
    selector : 'app-warning-alert',
    templateUrl : './warning-alert.component.html',
    styles : [`
        h4 {
            background-color : red;
            font-weight : bold;
            padding : 1rem;
            border : 1px solid black;
        }
    `]
})
export class WarningAlertComponent{

}