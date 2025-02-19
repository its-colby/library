export function concat(...x: string[]) {
    return x.join("");
}

export function subscript(x: string) {
    return `_{${x}}`;
}

export function exp(x: string) {
    return `^{${x}}`;
}

export function text(x: string) {
    return `\\text{${x}}`;
}

export function parens(x: string) {
    return `\\left(${x}\\right)`;
}

export function brackets(x: string) {
    return `\\left[${x}\\right]`;
}

export function braces(x: string) {
    return `\\left\\{${x}\\right\\}`;
}
