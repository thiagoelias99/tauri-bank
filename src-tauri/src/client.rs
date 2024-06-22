use serde::{Deserialize, Serialize};
use diesel::prelude::*;

#[derive(Debug, Serialize, Deserialize, Clone)]
#[derive(Queryable, Selectable)]
// #[diesel(table_name = crate::schema::clients)]
#[diesel(table_name = tauri_bank::schema::Client)]
#[diesel(check_for_backend(diesel::sqlite::Sqlite))]
pub struct Client {
    pub id: Option<String>,
    pub name: String,
    pub email: String,
    pub phone: String,
    pub birthday: String,
    // pub accounts: Option<Vec<Account>>,
    pub created_at: String,
}

impl Client {
    pub fn new(data: Client) -> Self {
        Client {
            ..data
        }
    }
}

// Exemplo de definição da struct Account, substitua de acordo com a sua necessidade
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Account {
    // Campos da struct Account
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct RegisterClientDto {
    pub name: String,
    pub email: String,
    pub phone: String,
    pub birthday: String,
}