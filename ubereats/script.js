"use strict";
name= prompt('Введи своё Имя', 'Арман');
switch (name){
	case "Арман":
	alert('THE BEST IN THE WORLD');
	break;

	case "Алексей":
	case "Лёша":
	case "inzani":
	alert(`Вы руинер и бездарь, ${name}!`);
	break;
	default:
	alert(`Ну тоже неплохо, да, ${name}!`);
}