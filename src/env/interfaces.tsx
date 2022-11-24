export interface MenuInterface {
    categories: CategoryInterface[];
    order: number;
    title: any[];
}
export interface CategoryInterface {
    items: ItemInterface[];
    order: number;
    title: any[];
}
export interface ItemInterface {
    alergens: AlergenInterface[];
    description: any[];
    order: number;
    price: number;
    title: any[];
}
export interface AlergenInterface {
    title: any[];
}
export interface InfoInterface {}
