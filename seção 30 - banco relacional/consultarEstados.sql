select * from estado

select Sigla, nome as 'Nome do Estado' from estado
where regiao = 'Sul'

select nome, regiao, populacao from estado
where populacao >=10
order by populacao desc