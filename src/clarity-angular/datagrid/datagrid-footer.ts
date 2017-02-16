/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    selector: "clr-dg-footer",
    template: `
        <ng-content></ng-content>
    `,
    host: {
        "[class.datagrid-foot]": "true",
    }
})
export class DatagridFooter {

    ngAfterContentInit() {
        console.log("Footer content init");
    }

    ngAfterViewInit() {
        console.log("Footer view init");
    }
}