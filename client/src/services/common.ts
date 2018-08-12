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

export const groupBy = (array: any[], callback: (value: any, index: number) => any) => array.reduce(
  (
    accumulator: object,
    currentValue: any,
    currentIndex: number,
  ) => {
    const key = callback(currentValue, currentIndex);

    return {
      ...accumulator,
      [key]: accumulator[key] ? [
        ...accumulator[key],
        currentValue,
      ] : [
        currentValue,
      ],
    };
  },
  {},
);
