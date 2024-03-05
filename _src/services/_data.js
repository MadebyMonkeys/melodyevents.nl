export const basename = "services";
export const type = "service";
export const layout = "layouts/service.vto";
export const templateEngine = "vto,md";
export const description = "Onze diensten";

export function url(page) {
    return `/services/${page.data.basename}/`;
}