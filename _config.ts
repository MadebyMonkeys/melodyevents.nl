import lume from "lume/mod.ts";
import plugins from "./_plugins.ts";

const site = lume({
    location: new URL("https://melodyevents.nl/"),
    src: "_src",
});

site.use(plugins());

export default site;
