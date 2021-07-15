export interface componentsStateInterface {
  leftDrawerState: boolean;
  showPendingJob: boolean;
  showPendingAcct: boolean;
  showReportedJob: boolean;
  showReportetAcct: boolean;
  
}

function state(): componentsStateInterface {
  return {
    leftDrawerState: false,
    showPendingJob: false,
    showPendingAcct: false,
    showReportedJob: false,
    showReportetAcct: false,
  }
}
export default state;
