export const sum = (a: number, b: number): number => a + b;

export const sumN = (first: number, ...n: number[]): number =>
  n.reduceRight((acc, curr) => sum(acc, curr), first);
