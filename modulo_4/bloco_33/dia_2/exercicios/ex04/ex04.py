import json
import csv


def import_books(file_path):
    try:
        with open(file_path) as file:
            # return [json.loads(line) for line in file]
            return json.load(file)
    except json.JSONDecodeError:
        print("Problema no arquivo")
    except FileNotFoundError:
        print("Arquivo não foi encontrado")


def count_books(books):
    lst_categories = {}
    for book in books:
        for category in book["categories"]:
            if not lst_categories.get(category):
                lst_categories[category] = 0
            lst_categories[category] += 1
    return lst_categories


def calc_porcentage(books_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in books_category.items()
    ]


def export_data(data):
    header = ["categoria", "porcentagem"]
    with open("report.csv", mode="w") as file:
        report_writer = csv.writer(file)
        report_writer.writerow(header)
        report_writer.writerow(data)


if __name__ == "__main__":
    lst_books = import_books("books.json")
    print(lst_books)
    result_categories = count_books(lst_books)
    result_porcentage = calc_porcentage(result_categories, len(lst_books))
    print(result_porcentage)
    export_data(result_porcentage)
