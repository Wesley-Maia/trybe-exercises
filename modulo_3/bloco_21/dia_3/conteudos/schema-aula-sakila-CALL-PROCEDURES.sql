CALL ObterNomeAtores;
CALL ShowAllActors();
CALL ShowAllActorsWithSyllable('lope');

CALL ShowAllAverageRentalDurationOfMovie('ACADEMY DINOSAUR', @media_de_dias);
SELECT @media_de_dias;

CALL ObterAtoresPopulares();
CALL ObterFilmesCategorias('Action');

CALL VerificaStatusCliente('SANDRA.MARTIN@sakilacustomer.org', @statusClient);
SELECT @statusClient;