-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `users` (
	`name` text,
	`id` integer PRIMARY KEY,
	`date` numeric,
	`country` text,
	`state` text,
	`school` text,
	`password` text NOT NULL,
	`gender` text,
	`user` text NOT NULL,
	`mail` text
);
--> statement-breakpoint
CREATE TABLE `theme` (
	`id_tema` integer,
	`title` text,
	`description` text,
	`id_pregunta` integer
);
--> statement-breakpoint
CREATE TABLE `preguntas` (
	`id` integer PRIMARY KEY,
	`options` text,
	`quest` text,
	`answer` text
);
--> statement-breakpoint
CREATE TABLE `progress` (
	`id` integer,
	`id_user` integer,
	`id_theme` integer PRIMARY KEY,
	`disponibilidad` text
);

*/