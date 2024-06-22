// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod client;

use chrono::Utc;
use client::Client;
use client::RegisterClientDto;
// use tauri_bank::schema::Client::created_at;
// use tauri_bank::schema::Client;
use uuid::Uuid;

use diesel::prelude::*;
use tauri_bank::establish_connection;


#[tauri::command]
fn register_new_client(dto: RegisterClientDto) -> Result<Client, String> {
    // print!("Registering new client: {:?}", dto);
    use tauri_bank::schema::Client::dsl::*;

    let connection = &mut establish_connection();

    let generated_id = Uuid::new_v4().to_string();
    let genereted_created_at = Utc::now().to_string();

    // let client = Client {
    //     id: Some(generated_id),
    //     name: dto.name,
    //     email: dto.email,
    //     phone: dto.phone,
    //     birthday: dto.birthday,
    //     created_at: genereted_created_at,
    // };

    let client = diesel::insert_into(tauri_bank::schema::Client::table)
        .values((
            id.eq(generated_id),
            name.eq(dto.name),
            email.eq(dto.email),
            phone.eq(dto.phone),
            birthday.eq(dto.birthday),
            created_at.eq(genereted_created_at),
        ))
        .returning((id, name, email, phone, birthday, created_at))
        .get_result(connection)
        .expect("Error saving new post");

    // let client = Client::new(Client {
    //     id: Some(Uuid::new_v4().to_string()),
    //     name: dto.name,
    //     email: dto.email,
    //     phone: dto.phone,
    //     birthday: dto.birthday,
    //     // accounts: None,
    //     created_at: Utc::now().to_string(),
    // });

    Ok(client)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![register_new_client])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
