type Selector = (value: any) => any;

export const applyFromSelectors = (
  func: (...args: any[]) => any,
  // tslint:disable-next-line:trailing-comma
  ...selectors: Selector[]
) => (
  (...args: any[]) => {
    const selectedArgs = args.map((arg, index) => selectors[index] ? selectors[index](arg) : arg);

    return func(...selectedArgs);
  }
);
