import { page as principal_domains } from "./principal";
import { page as ufd_domains } from "./ufd";
import { page as integral_domains } from "./integral";
import { page as dedekind_domains } from "./dedekind";
import { page as euclidean_domains } from "./euclidean";
import { Category } from "$lib/content/utils/category";

export const category = new Category(
    "Domains", 
    [
        principal_domains, 
        ufd_domains, 
        integral_domains, 
        dedekind_domains, 
        euclidean_domains
    ]
);
