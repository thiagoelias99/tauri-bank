// @generated automatically by Diesel CLI.

diesel::table! {
    Client (id) {
        id -> Nullable<Text>,
        name -> Text,
        email -> Text,
        phone -> Text,
        birthday -> Text,
        created_at -> Text,
    }
}
