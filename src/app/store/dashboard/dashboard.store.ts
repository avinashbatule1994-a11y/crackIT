export const DashboardStore = signalStore(
  withState({
    subjects: [],
    search: '',
    loading: false
  }),

  withComputed(() => ({})),

  withMethods(() => ({}))
);

function signalStore(arg0: any, arg1: any, arg2: any) {
  throw new Error("Function not implemented.");
}
function withState(arg0: { subjects: never[]; search: string; loading: boolean; }): any {
  throw new Error("Function not implemented.");
}

function withComputed(arg0: () => {}): any {
  throw new Error("Function not implemented.");
}

function withMethods(arg0: () => {}): any {
  throw new Error("Function not implemented.");
}

