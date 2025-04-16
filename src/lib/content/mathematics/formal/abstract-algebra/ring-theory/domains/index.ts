import { Folder } from "$directory";

import { file as principal_domains } from "./principal";
import { file as ufd_domains } from "./ufd";
import { file as integral_domains } from "./integral";
import { file as dedekind_domains } from "./dedekind";
import { file as euclidean_domains } from "./euclidean";

export const folder = new Folder({
    title: "Domains", 
    files: [
        principal_domains, 
        ufd_domains, 
        integral_domains, 
        dedekind_domains, 
        euclidean_domains
    ]
});
