export function repeat(n, str) {
  return str.repeat(n);
}

export function partial(fn, arg) {
  return fn.bind(this, arg);
}
