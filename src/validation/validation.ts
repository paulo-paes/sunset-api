export interface Validation<T> {
  validate(input: T): void;
  valid(input: T): boolean;
}
