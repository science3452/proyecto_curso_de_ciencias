import { relations } from "drizzle-orm/relations";
import { preguntas, temas, progresos, estudiantes } from "./schema";

export const temasRelations = relations(temas, ({one, many}) => ({
	pregunta: one(preguntas, {
		fields: [temas.idPreguntas],
		references: [preguntas.id]
	}),
	progresos: many(progresos),
}));

export const preguntasRelations = relations(preguntas, ({many}) => ({
	temas: many(temas),
}));

export const progresosRelations = relations(progresos, ({one}) => ({
	tema: one(temas, {
		fields: [progresos.idTema],
		references: [temas.idTema]
	}),
	estudiante: one(estudiantes, {
		fields: [progresos.idEstudiante],
		references: [estudiantes.id]
	}),
}));

export const estudiantesRelations = relations(estudiantes, ({many}) => ({
	progresos: many(progresos),
}));