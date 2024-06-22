// #[macro_use]
// extern crate diesel;
// extern crate diesel_migrations;

pub mod models;
pub mod schema;

use diesel::prelude::*;
use diesel::sqlite::SqliteConnection;
// use dotenvy::dotenv;
// use std::env;
// use diesel_migrations::{embed_migrations, EmbeddedMigrations, MigrationHarness};
use diesel_migrations::{embed_migrations, EmbeddedMigrations, MigrationHarness};

pub const MIGRATIONS: EmbeddedMigrations = embed_migrations!("migrations");

pub fn establish_connection() -> SqliteConnection {
    // dotenv().ok();

    // let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    let database_url = "database.sqlite";

    let mut connection = SqliteConnection::establish(&database_url)
        .unwrap_or_else(|_| panic!("Error connecting to {}", database_url));

    let _ = connection.run_pending_migrations(MIGRATIONS);

    return connection;
}

// pub fn run_migrations(connection: &SqliteConnection) {
//     let migrations = embed_migrations!();
//     // diesel_migrations::run_pending_migrations(&conn, &migrations).unwrap();
//     connection.run_pending_migrations(MIGRATIONS);
// }

// pub fn run_migrations(connection: &mut impl MigrationHarness<DB>) -> Result<(), Box<dyn Error + Send + Sync + 'static>> {

//     // This will run the necessary migrations.
//     //
//     // See the documentation for `MigrationHarness` for
//     // all available methods.
//     connection.run_pending_migrations(MIGRATIONS)?;

//     Ok(())
// }

// fn run_migrations(
//     connection: &mut impl MigrationHarness<DB>,
// ) -> Result<(), Box<dyn Error + Send + Sync + 'static>> {
//     // Isso executará as migrações necessárias.
//     // Consulte a documentação para `MigrationHarness` para ver todos os métodos disponíveis.
//     connection.run_pending_migrations(MIGRATIONS)?;
//     Ok(())
// }
