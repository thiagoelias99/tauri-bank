// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod client;

use chrono::{DateTime, Utc};
use client::Client;
use client::RegisterClientDto;
use uuid::Uuid;

#[tauri::command]
fn register_new_client(dto: RegisterClientDto) -> Result<Client, String> {
    print!("Registering new client: {:?}", dto);

    let client = Client::new(Client {
        id: Uuid::new_v4().to_string(),
        name: dto.name,
        email: dto.email,
        phone: dto.phone,
        birthday: dto.birthday,
        accounts: None,
        created_at: Utc::now().to_string(),
    });

    Ok(client)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![register_new_client])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
