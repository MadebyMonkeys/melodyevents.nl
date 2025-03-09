import date from "lume/plugins/date.ts";
import decap_cms from "lume/plugins/decap_cms.ts";
import favicon from "lume/plugins/favicon.ts";
import inline from "lume/plugins/inline.ts";
import metas from "lume/plugins/metas.ts";
import postcss from "lume/plugins/postcss.ts";
import purgecss from "lume/plugins/purgecss.ts";
import robots from "lume/plugins/robots.ts";
import sass from "lume/plugins/sass.ts";
import svgo from "lume/plugins/svgo.ts";
import transform_images from "lume/plugins/transform_images.ts";

export default function () {
    return (site: Lume.Site) => {
        /** 🔹 Filters */
        site
            .filter("getRelatedPosts", (postList, tags) =>
                postList.filter((post) =>
                    tags.some((tag) => post.tags.includes(tag))
                )
            );

        /** 🔹 Plugins */
        site
            .use(date())
            .use(favicon({
                input: "/static/images/favicon.svg"
            }))
            .use(inline())
            .use(metas())
            .use(sass())
            .use(postcss())
            .use(purgecss())
            .use(robots())
            .use(svgo())
            .use(transform_images())
            .use(decap_cms());

        /** 🔹 Bestanden kopiëren */
        site
            .copy("js")
            .copy("static", ".");
    }
}
