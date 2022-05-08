# from sales_report import SalesReport
# from sales_report_refactor_csv import SalesReportCSV
from sales_report_refactor_csv import SalesReportJSON

# Exercício 1
# relatorio_de_vendas = SalesReport('meu_relatório')
# relatorio_de_vendas.serialize()
# relatorio_de_vendas.serialize_csv()

# Exercício 2
# relatorio_de_comprasJSON = SalesReportJSON('meu_relatorio')
# relatorio_de_comprasCSV = SalesReportCSV('meu_relatorio')
# relatorio_de_comprasJSON.serialize()
# relatorio_de_comprasCSV.serialize()

# Exercício 3
relatorio_de_comprasJSON = SalesReportJSON('meu_relatorio')
print(relatorio_de_comprasJSON.get_length())
