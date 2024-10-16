import { sqliteTable, AnySQLiteColumn, integer, text, numeric, foreignKey } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const estudiantes = sqliteTable("estudiantes", {
	id: integer("id").primaryKey(),
	user: text("user"),
	name: text("name"),
	date: numeric("date"),
	country: text("country"),
	state: text("state"),
	school: text("school"),
	gender: text("gender"),
	email: text("email"),
	password: text("password"),
});

export const temas = sqliteTable("temas", {
	idTema: integer("id_tema").primaryKey(),
	titulo: text("titulo"),
	descripcion: text("descripcion"),
	idPreguntas: integer("id_preguntas").references(() => preguntas.id),
});

export const preguntas = sqliteTable("preguntas", {
	id: integer("id").primaryKey(),
	opciones: text("opciones"),
	pregunta: text("pregunta"),
	respuesta: text("respuesta"),
});

export const progresos = sqliteTable("progresos", {
	id: integer("id").primaryKey(),
	idEstudiante: integer("id_estudiante").references(() => estudiantes.id),
	idTema: integer("id_tema").references(() => temas.idTema),
	bloqueo: text("bloqueo"),
});