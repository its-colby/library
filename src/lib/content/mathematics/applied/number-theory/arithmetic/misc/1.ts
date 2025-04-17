import { Exposition, Prose } from "$book";

export const chapter = Exposition.from([
    Prose.parse(`
        $$a^{p-1} \\equiv 1 \\pmod{p}$$ Think of the formula $$a^x = 1$$ for the multiplicative group $$Z/pZ$$, where $$p$$ is prime. This is the definition of the order of an element. Since $$p$$ is prime, the group is cyclic and finite, so all orders are finite. For any element $$a$$, the x will be some factor of $$p-1$$. Therefore, if you raise $$a$$ to the power of $$p-1$$, you will get 1. (what if you thought of this as a homomorphism instead?)
    `),

], Prose.parse(`Fermat's Little Theorem`));