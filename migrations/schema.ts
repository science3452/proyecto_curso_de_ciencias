import { sqliteTable, AnySQLiteColumn, text, integer, numeric } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const users = sqliteTable("users", {
	name: text("name"),
	id: integer("id").primaryKey(),
	date: numeric("date"),
	country: text("country"),
	state: text("state"),
	school: text("school"),
	password: text("password").notNull(),
	gender: text("gender"),
	user: text("user").notNull(),
	mail: text("mail"),
});

export const theme = sqliteTable("theme", {
	idTema: integer("id_tema"),
	title: text("title"),
	description: text("description"),
	idPregunta: integer("id_pregunta"),
});

export const preguntas = sqliteTable("preguntas", {
	id: integer("id").primaryKey(),
	options: text("options"),
	quest: text("quest"),
	answer: text("answer"),
});

export const progress = sqliteTable("progress", {
	id: integer("id"),
	idUser: integer("id_user"),
	idTheme: integer("id_theme").primaryKey(),
	disponibilidad: text("disponibilidad"),
});