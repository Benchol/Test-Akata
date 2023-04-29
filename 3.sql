SELECT niveau
FROM resultat_examen
WHERE code_matiere = 'ALG' AND note >= 10
GROUP BY niveau
HAVING COUNT(*) >= 30;