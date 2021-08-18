SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1 AS first, 2 AS second, 3 AS third;
SELECT 10+15 AS soma;
SELECT 5*5 AS  multiplicação;
SELECT * FROM Scientists;
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;
SELECT * FROM Scientists
ORDER BY Name;
SELECT * FROM Projects
ORDER BY Name DESC;
SELECT CONCAT('O projeto ', Name, ' ', 'precisou de ', Hours, ' ', 'horas para ser concluído.') AS Description FROM Projects;
SELECT Name, Hours FROM Projects
ORDER BY Hours DESC LIMIT 3;
SELECT DISTINCT Project FROM AssignedTo;
SELECT Name FROM Projects
ORDER BY Hours DESC LIMIT 1;
SELECT Name FROM Projects
ORDER BY Hours ASC LIMIT 1 OFFSET 1;
SELECT * FROM Projects
ORDER BY Hours LIMIT 5;
SELECT CONCAT('Existem ', COUNT(Name), ' ', 'cientistas na tabela Scientists.') FROM Scientists;