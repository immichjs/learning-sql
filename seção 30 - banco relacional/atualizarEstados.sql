update estado
set nome = 'Maranhão'
where sigla = 'MA'

select est.nome from estado est where sigla = 'MA'

update estado
set nome = 'Paraná',
    populacao = 11.32
where sigla = 'PR'

select 
    est.nome,
    sigla,
    populacao
from estado est
where sigla = 'PR'