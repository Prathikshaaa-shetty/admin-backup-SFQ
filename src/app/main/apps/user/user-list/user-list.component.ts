import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { CoreConfigService } from "@core/services/config.service";
import { CoreSidebarService } from "@core/components/core-sidebar/core-sidebar.service";

import { UserListService } from "./user-list.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class UserListComponent implements OnInit {
  public sidebarToggleRef = false;
  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public temp = [];
  public previousRoleFilter = "";
  public previousPlanFilter = "";
  public previousStatusFilter = "";

  public selectStatus: any = [
    { name: "All", value: "all" },
    { name: "Active", value: "true" },
    { name: "Inactive", value: "false" },
  ];

  public selectedRole = [];
  public selectedPlan = [];
  public selectedStatus = [];
  public searchValue = "";

  // Decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;

  // Private
  private tempData = [];
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private _coreSidebarService: CoreSidebarService, private _coreConfigService: CoreConfigService, 
    private _userService: UserListService) {
    this._unsubscribeAll = new Subject();
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * filterUpdate
   *
   * @param event
   */
  filterUpdate(event) {
    this.selectedStatus = this.selectStatus[0];

    const val = event.target.value.toLowerCase();

    // Filter Our Data
    const temp = this.tempData.filter(function (d) {
      return d.firstName.toLowerCase().indexOf(val) !== -1 || d.lastName.toLowerCase().indexOf(val) !== -1 || d.email.toLowerCase().indexOf(val) !== -1 || !val;
    });

    this.rows = temp;

    this.table.offset = 0;
  }

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  /**
   * Filter By Status
   *
   * @param event
   */
  filterByStatus(event) {
    const filter = event ? event.value : "";
    this.temp = this.filterRows(filter);
    this.rows = this.temp;
  }

  /**
   * Filter Rows
   *
   *
   *
   * @param statusFilter
   */
  filterRows(statusFilter): any[] {
    this.searchValue = "";
    if (statusFilter == "all" || statusFilter == "") {
      return this.tempData;
    } else if (statusFilter == "true") {
      return this.tempData.filter((row) => row.isActive == true);
    } else if (statusFilter == "false") {
      return this.tempData.filter((row) => row.isActive == false);
    }
  }

  ngOnInit(): void {
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe((config) => {
      if (config.layout.animation === "zoomIn") {
        setTimeout(() => {
          this.getUserList();
        }, 450);
      } else {
        this.getUserList();
      }
    });
  }

  getUserList() {
    this._userService.getUserList().then((response: any) => {
      this.rows = response.data;
      this.tempData = this.rows;
    });
  }

  deleteUser(id) {
    this._userService.deleteUser(id).then((response: any) => {
      if (response.statusCode == 200) {
        this.getUserList();
      }
    });
  }

  onExport() {
    console.log("Export");
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
