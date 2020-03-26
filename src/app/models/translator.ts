export interface Translator {
    id?: Number;
    name: String;
    description: String;
    image: String;
    lang_to: Number;
    lang_from?: Number;
    price: Number;
}
